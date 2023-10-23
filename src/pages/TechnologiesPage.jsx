import { PublicLayout } from "../layouts";
import { CardItem } from "./CardItem";

export const TechnologiesPage = () => {
  return (
    <PublicLayout>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Technologies</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">In the execution of <span className="text-blue-500 font-bold">this project</span>, various technologies have been used for its development, I hope this information is valuable for you.</p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <CardItem />
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
