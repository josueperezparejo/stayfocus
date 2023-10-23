import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Divider } from '@nextui-org/react';
import { startGithubSignIn, startGoogleSignIn } from '../store/slices/auth/thunks';
import { GithubIcon, GoogleIcon } from '../utilities';

export const ButtonsAuth = () => {

    const { status } = useSelector((state) => state.auth);
    const isAuthenticating = useMemo(() => status === 'checking', [status]);
    const dispatch = useDispatch();

    const loginGoogle = (event) => {
        event.preventDefault()
        dispatch(startGoogleSignIn())
    }

    const loginGithub = (event) => {
        event.preventDefault()
        dispatch(startGithubSignIn())
    }

    return (
        <>
            <Divider />
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3">
                <Button isLoading={isAuthenticating} variant='flat' onClick={loginGoogle} fullWidth startContent={<GoogleIcon />}>Log in with Google</Button>
                <Button isLoading={isAuthenticating} variant='flat' onClick={loginGithub} fullWidth startContent={<GithubIcon />}>Log in with Github</Button>
            </div>
        </>
    )
}
