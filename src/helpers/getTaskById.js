import { useSelector } from "react-redux"

export const getTaskById = (id) => {

    const { tasks } = useSelector((state) => state.tasks);
    const task = tasks.find((task) => task.id == id);

    return {
        task
    }
}
