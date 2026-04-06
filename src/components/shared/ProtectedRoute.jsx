import { Navigate } from 'react-router';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <p style={{ padding: '20px' }}>Loading session...</p>;
    }

    if (!user) {
        // No user logged in? Send them to the login page
        return <Navigate to="/login" replace />;
    }

    // User is logged in! Render the component they asked for
    return children;
}