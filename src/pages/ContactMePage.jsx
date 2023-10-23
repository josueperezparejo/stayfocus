import { PublicLayout } from "../layouts";
import josuePhoto from '../utilities/image/josue.png';

import '../styles/slide.css';

export const ContactMePage = () => {
  return (
    <PublicLayout>
      <section className="bg-white dark:bg-gray-900 w-10/12 mx-auto">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img loading="lazy" className="u--slideLeft shadow-xl mx-auto rounded-full w-7/12 hidden dark:block" src={josuePhoto} alt="image profile" />
          <img loading="lazy" className="u--slideLeft shadow-xl mx-auto rounded-full w-7/12 dark:hidden" src={josuePhoto} alt="image profile" />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"><span className="text-6xl">Hello!</span> <br /> I'm Josue Perez a <span className="text-blue-500">Frontend Developer</span></h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">As a Multimedia Producer, I've focused on creating websites from scratch. I've done everything from thinking about how they should look and work to getting them up and running, and keeping everything organized. I've worked in different important roles, like Designer, Producer, and Front-end Developer. This means I can bring lots of different ideas and skills to the team</p>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">I'm available for working, feel free to reach out and let's create something amazing together!</p>
            <a target="_blank" href="https://www.linkedin.com/in/josue-david-p-769983161/" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              LinkedIn
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
