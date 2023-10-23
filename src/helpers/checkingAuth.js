import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../firebase/config";
import { login, logout } from "../store/slices/auth/authSlice";
import { startLoadingTasks } from "../store/slices/tasks/thunks";

export const checkingAuth = () => {

    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, async (user) => {
            if (!user) return dispatch(logout({ errorMessage: 'there is no user' }))
            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }));
            dispatch(startLoadingTasks());
        })
    }, [])

    return { status }
}