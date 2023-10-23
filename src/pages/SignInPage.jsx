import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@nextui-org/react';
import { ButtonsAuth } from '../components';
import { PublicLayout } from '../layouts';
import { startSignInUserWithEmailPassword } from '../store/slices/auth/thunks';

export const SignInPage = () => {

    const dispatch = useDispatch();
    const { errorMessage, status } = useSelector((state) => state.auth);
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSignIn = (valuesForm) => {
        const { email, password } = valuesForm
        dispatch(startSignInUserWithEmailPassword({ email, password, reset }))
    }

    return (
        <>
            <PublicLayout>
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>
                                <form onSubmit={handleSubmit(onSignIn)} className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input {...register('email', { required: true })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                        {errors.email?.type === 'pattern' && <p style={{ color: 'red', marginTop: '10px' }} className='my-3 text-red-500'>The email is not valid.</p>}
                                        {errors.email?.type === 'required' && <p style={{ color: 'red', marginTop: '10px' }} className='my-3 text-red-500'>The email field is required.</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input {...register('password', { required: true })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        {errors.password?.type == 'required' && <p style={{ color: 'red', marginTop: '10px' }} className='my-3 text-red-500'>The password field is required.</p>}
                                    </div>
                                    <Button isLoading={isAuthenticating} type='submit' fullWidth color='primary'>Sign in</Button>

                                    {errorMessage === 'auth/wrong-password' && <p className='w-full text-center border' style={{ borderColor: 'red', borderRadius: '20px', color: 'red' }}>The password is incorrect.</p>}
                                    {errorMessage === 'auth/user-not-found' && <p className='w-full text-center border' style={{ borderColor: 'red', borderRadius: '20px', color: 'red' }}>The email is not valid.</p>}
                                    <ButtonsAuth />
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet? <Link to={'/signUp'} className="font-medium text-primary-600 dark:text-primary-500">Sign up</Link>
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
