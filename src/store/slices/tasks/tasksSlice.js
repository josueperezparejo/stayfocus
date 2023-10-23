import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSaving: false,
    loadingTasks: false,
    tasks: [],
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addNewTask: (state, action) => {
            state.tasks.push(action.payload)
            state.isSaving = false
        },
        setTasks: (state, action) => {
            state.tasks = action.payload;
            state.loadingTasks = false;
        },
        setSaving: (state, action) => {
            state.isSaving = true
        },
        setLoadingTasks: (state, action) => {
            state.loadingTasks = true
        },
        updateTask: (state, action) => {
            state.isSaving = false
        },
        deleteTaskById: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            state.isSaving = false;
        }
    }
});

export const { addNewTask, setActiveTask, setTasks, setSaving, setLoadingTasks, updateTask, deleteTaskById } = tasksSlice.actions;
export default tasksSlice.reducer