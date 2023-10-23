import { firebaseDB } from "../../../firebase/config";
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { addNewTask, deleteTaskById, setLoadingTasks, setSaving, setTasks, updateTask } from "./tasksSlice";

export const startNewTask = (task, { navigate }) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setSaving())
            const uid = getState().auth.uid;
            const tasksRef = collection(firebaseDB, `${uid}/stayfocus/tasks`)
            const docRef = await addDoc(tasksRef, task)
            task.id = docRef.id;
            dispatch(addNewTask(task))
            navigate('/dashboard')
        }
        catch (error) {
        }
    }
}

export const startLoadingTasks = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setLoadingTasks())
            const uid = getState().auth.uid;
            const tasksRef = collection(firebaseDB, `${uid}/stayfocus/tasks`)
            const querySnapshot = await getDocs(tasksRef)

            const tasks = [];

            querySnapshot.forEach((doc) => {
                tasks.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            dispatch(setTasks(tasks));
        } catch (error) {
        }
    }
}

export const startDeleteTask = (id) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setSaving())
            const uid = getState().auth.uid;
            await deleteDoc(doc(firebaseDB, `${uid}/stayfocus/tasks/${id}`))
            dispatch(deleteTaskById(id))
        } catch (error) {
        }
    }
}

export const startUpdatingTask = (task, { navigate }) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setSaving())
            const uid = getState().auth.uid;
            const taskRef = doc(firebaseDB, `${uid}/stayfocus/tasks/${task.id}`)
            await setDoc(taskRef, task, { merge: true })
            dispatch(updateTask())
            navigate('../')
        } catch (error) {
        }
    }
}