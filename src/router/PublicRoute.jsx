import { Navigate } from 'react-router-dom';
import { checkingAuth } from '../helpers/checkingAuth';

export const PublicRoute = ({ children }) => {

    const { status } = checkingAuth();

    return (
        (status === 'not-authenticated' || status === 'checking')
            ? children
            : <Navigate to={'/dashboard'} replace />
    )
}
