import { checkingCredentials, login, logout } from "./authSlice";
import {
    registerEmailAndPassword,
    signInEmailAndPassword,
    signOutUser,
    singInWithGithub,
    singInWithGoogle
} from "../../../firebase/providers";

export const startCreatingUserWithEmailPassword = ({ email, password, displayName, reset }) => {
    return async (dispatch, getState) => {
        dispatch(checkingCredentials())
        const result = await registerEmailAndPassword({ email, password, displayName })
        const { uid, photoURL, ok, errorMessage } = result
        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login({ uid, email, displayName, photoURL }))
        reset()
    }
}

export const startSignInUserWithEmailPassword = ({ email, password, reset }) => {
    return async (dispatch, getState) => {
        dispatch(checkingCredentials())
        const result = await signInEmailAndPassword({ email, password })
        const { uid, photoURL, displayName, ok, errorMessage } = result
        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login({ uid, email, displayName, photoURL }))
        reset()
    }
}

export const startSignOutUser = () => {
    return async (dispatch, getState) => {
        await signOutUser();
        dispatch(logout({ errorMessage: 'Try sign in again' }));
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch, getState) => {
        dispatch(checkingCredentials())
        const { uid, email, displayName, photoURL, ok, errorMessage } = await singInWithGoogle()
        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login({ uid, email, displayName, photoURL }))
    }
}

export const startGithubSignIn = () => {
    return async (dispatch, getState) => {
        dispatch(checkingCredentials())
        const { uid, email, displayName, photoURL, ok, errorMessage } = await singInWithGithub()
        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login({ uid, email, displayName, photoURL }))
    }
}