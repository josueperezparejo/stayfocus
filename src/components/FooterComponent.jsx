import { Link, NavLink } from "react-router-dom";

const year = new Date();

export const FooterComponent = () => {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/home" className="flex items-center mb-4 sm:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">⌛ StayFocus</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <NavLink to="/home" className={({ isActive }) => `${isActive ? 'text-blue-500' : ''} mr-4 hover:underline md:mr-6`}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/technologies" className={({ isActive }) => `${isActive ? 'text-blue-500' : ''} mr-4 hover:underline md:mr-6`}>Technologies</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactMe" className={({ isActive }) => `${isActive ? 'text-blue-500' : ''} mr-4 hover:underline md:mr-6`}>Contact me</NavLink>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year.getFullYear()} <a href="https://flowbite.com/" className="hover:underline">StayFocus</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
