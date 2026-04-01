import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

export function useStaffSocket(onNewAppointment) {
    const { isAuthenticated, role } = useSelector((state) => state.user);
    const socketRef = useRef(null);

    const isPrivileged = isAuthenticated && (role === "staff" || role === "admin");

    useEffect(() => {
        if (!isPrivileged) {
            if (socketRef.current) {
                socketRef.current.disconnect();
                socketRef.current = null;
            }
            return;
        }

        const socket = io(window.location.origin, { withCredentials: true });
        socketRef.current = socket;

        socket.on("connect", () => {
            console.log("[socket] connected as", role);
        });

        socket.on("new-appointment", (data) => {
            if (typeof onNewAppointment === "function") {
                onNewAppointment(data);
            }
        });

        socket.on("connect_error", (err) => {
            console.warn("[socket] connection error:", err.message);
        });

        return () => {
            socket.disconnect();
            socketRef.current = null;
        };
    }, [isPrivileged]);
}
