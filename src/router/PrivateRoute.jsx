import { checkingAuth } from '../helpers/checkingAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

    const { status } = checkingAuth();

    return (
    (status === 'authenticated' || status === 'checking')
    ? children
    : <Navigate to={'/home'} replace />
  )
}
