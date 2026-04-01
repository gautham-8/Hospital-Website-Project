import React, { useEffect } from "react";
import { FiCalendar, FiX } from "react-icons/fi";
import "./ToastNotification.css";

function ToastItem({ toast, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => onClose(toast.id), 8000);
        return () => clearTimeout(timer);
    }, [toast.id, onClose]);

    return (
        <div className="toast-item">
            <div className="toast-header">
                <div className="toast-header-left">
                    <div className="toast-icon">
                        <FiCalendar size={16} color="#3b82f6" />
                    </div>
                    <div>
                        <div className="toast-title">New Appointment</div>
                        <div className="toast-time">just now</div>
                    </div>
                </div>
                <button className="toast-close" onClick={() => onClose(toast.id)}>
                    <FiX size={15} />
                </button>
            </div>
            <div className="toast-body">
                <div className="toast-row">
                    <span className="toast-label">Patient</span>
                    <span className="toast-value" style={{ textTransform: 'none' }}>{toast.name}</span>
                </div>
                <div className="toast-row">
                    <span className="toast-label">Specialization</span>
                    <span className="toast-value">{toast.specialization}</span>
                </div>
                <div className="toast-row">
                    <span className="toast-label">Date & Time</span>
                    <span className="toast-value" style={{ textTransform: 'none' }}>
                        {new Date(toast.datetime).toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    );
}

function ToastNotification({ toasts, onClose }) {
    return (
        <div className="toast-wrapper">
            {toasts.map((toast) => (
                <ToastItem key={toast.id} toast={toast} onClose={onClose} />
            ))}
        </div>
    );
}

export default ToastNotification;
