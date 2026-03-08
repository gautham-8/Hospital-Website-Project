import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

export function PrivateRoute({ children }) {
    const { isAuthenticated, isSessionLoading } = useSelector((state) => state.user);
    if (isSessionLoading) return null;
    return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export function GuestRoute({ children }) {
    const { isAuthenticated, isSessionLoading } = useSelector((state) => state.user);
    if (isSessionLoading) return null;
    return isAuthenticated ? <Navigate to="/" replace /> : children;
}
