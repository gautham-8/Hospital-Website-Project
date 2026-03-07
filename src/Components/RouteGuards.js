import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

export function PrivateRoute({ children }) {
    const { isSuccess } = useSelector((state) => state.user);
    return isSuccess ? children : <Navigate to="/login" replace />;
}

export function GuestRoute({ children }) {
    const { isSuccess } = useSelector((state) => state.user);
    return isSuccess ? <Navigate to="/" replace /> : children;
}
