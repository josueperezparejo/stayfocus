import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@nextui-org/react';
import { startCreatingUserWithEmailPassword } from '../store/slices/auth/thunks';
import { PublicLayout } from '../layouts';
import { ButtonsAuth } from '../components';

export const SignUpPage = () => {

    const { errorMessage, status } = useSelector((state) => state.auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const dispatch = useDispatch();
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSignUp = (valuesForm) => {
        const { email, password, displayName } = valuesForm
        dispatch(startCreatingUserWithEmailPassword({ email, password, displayName, reset }))
    }

    return (
        <>
            <PublicLayout>
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Create and account
                                </h1>
                                <form onSubmit={handleSubmit(onSignUp)} className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                        {errors.email?.type === 'pattern' && <p style={{ color: 'red', marginTop: '10px' }} className='my-3 text-red-500'>The email is not valid.</p>}
                                        {errors.email?.type === 'required' && <p style={{ color: 'red', marginTop: '10px' }} className='my-3 text-red-500'>The email field is required.</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                        <input {...register('displayName', { required: true })} type="text" name="displayName" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" />
                                        {errors.displayName?.type === 'required' && <p style={{ color: 'red', marginTop: '10px' }} className='my-3 text-red-500'>The name field is required.</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input {...register('password', { required: true, minLength: 10 })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        {errors.password?.type == 'minLength' && <p style={{ color: 'red', marginTop: '10px' }} className='my-3 text-red-500'>The password must be at least 10 characters long.</p>}
                                        {errors.password?.type == 'required' && <p style={{ color: 'red', marginTop: '10px' }} className='my-3 text-red-500'>The password field is required.</p>}
                                    </div>
                                    {errorMessage === 'auth/email-already-in-use' && <p className='w-full text-center border' style={{ borderColor: 'red', borderRadius: '20px', color: 'red' }}>The email already in use.</p>}
                                    <Button isLoading={isAuthenticating} type='submit' fullWidth color='primary'>Sign up</Button>
                                    <ButtonsAuth />
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? <Link to={'/signIn'} className="font-medium text-primary-600 dark:text-primary-500">Login here</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </PublicLayout>
        </>
    )
}
