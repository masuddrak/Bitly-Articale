import { useLoaderData } from "react-router-dom";
import Blog from "../components/Blog";


const Blogs = () => {
    const blogs = useLoaderData()

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
                        <span className="text-xs dark:text-gray-400">February 19, 2021</span>
                        <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                    </div>
                </a>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                   {
                    blogs.slice(1,10).map(blog=><Blog key={blog.id} blog={blog}></Blog>)
                   }
                </div>
            </div>
        </section>
    );
};

export default Blogs;