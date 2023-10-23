import { useNavigate, useParams } from "react-router-dom"
import { startUpdatingTask } from "../store/slices/tasks/thunks"
import { useDispatch, useSelector } from "react-redux"
import { Button, Select, SelectItem, Textarea } from "@nextui-org/react"
import { useForm } from "react-hook-form"
import { PrivateLayout } from "../layouts"
import { getTaskById, statusTask } from "../helpers"

export const EditTaskPage = () => {

    const dispatch = useDispatch();
    const { isSaving } = useSelector((state) => state.tasks);
    const { taskId } = useParams();
    const navigate = useNavigate();
    const { task } = getTaskById(taskId);
    const { title, description } = task;

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { title, description }
    })

    const onEditTask = (values) => {
        values.id = task.id
        dispatch(startUpdatingTask(values, { navigate }))
    }

    return (
        <PrivateLayout>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="relative w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                        <Button className="absolute mr-6 right-0" color="primary" onClick={() => navigate('../')}>Back</Button>
                        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Update your task
                        </h2>
                        <form onSubmit={handleSubmit(onEditTask)} className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input {...register('title', { required: true })} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" required="" />
                                {errors.title?.type === 'required' && <p style={{ color: 'red', marginTop: '10px' }} className='my-3 text-red-500'>The title field is required.</p>}
                            </div>
                            <div>
                                <Textarea
                                    {...register('description', { required: true, maxLength: 120 })}
                                    label="Description"
                                    labelPlacement="outside"
                                    placeholder="Enter your description"
                                    className="w=full"
                                    name="description"
                                />
                                {errors.description?.type === 'required' && <p style={{ color: 'red', marginTop: '10px' }} className='my-3 text-red-500'>The description field is required.</p>}
                                {errors.description?.type === 'maxLength' && <p style={{ color: 'red', marginTop: '10px' }} className='my-3 text-red-500'>The description must have a maximum length of 120 characters.</p>}
                            </div>

                            <div>
                                <Select
                                    {...register('status', { required: true })}
                                    label="status"
                                    className="w-full"
                                    name="status"
                                    defaultSelectedKeys={'completed'}
                                >
                                    {statusTask.map((state) => (
                                        <SelectItem key={state.value} value={state.value}>
                                            {state.label}
                                        </SelectItem>
                                    ))}
                                </Select>

                                {errors.status?.type === 'required' && <p style={{ color: 'red', marginTop: '10px' }} className='my-3 text-red-500'>The status field is required.</p>}
                            </div>

                            <Button isLoading={isSaving} type="submit" color="primary" className="w-full">Update</Button>
                        </form>
                    </div>
                </div>
            </section>
        </PrivateLayout>
    )
}
