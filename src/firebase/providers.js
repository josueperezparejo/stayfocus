import { firebaseAuth } from "./config";
import {
    createUserWithEmailAndPassword,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const registerEmailAndPassword = async ({ email, password, displayName }) => {
    try {
        const photoURL = 'https://cdn-icons-png.flaticon.com/512/1053/1053244.png';
        const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid } = result.user;
        await updateProfile(firebaseAuth.currentUser, { displayName, photoURL })
        return {
            ok: true,
            uid,
            photoURL,
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.code
        }
    }
}

export const signInEmailAndPassword = async ({ email, password }) => {
    try {
        const result = await signInWithEmailAndPassword(firebaseAuth, email, password)
        const { uid, photoURL, displayName } = result.user
        return {
            ok: true,
            uid,
            photoURL,
            displayName
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.code
        }
    }
}

export const signOutUser = async () => {
    return await firebaseAuth.signOut();
}

export const singInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        const { displayName, uid, photoURL, email } = result.user
        return {
            ok: true,
            displayName,
            uid,
            photoURL,
            email
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.code
        }
    }
}

export const singInWithGithub = async () => {
    try {
        const result = await signInWithPopup(firebaseAuth, githubProvider);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            displayName,
            email,
            photoURL,
            uid,
            ok: true
        }
    }
    catch (error) {
        return {
            ok: false,
            errorMessage: error.code
        }
    }
}