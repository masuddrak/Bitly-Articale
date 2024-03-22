import { Link } from "react-router-dom";


const Blog = ({blog}) => {
    const {id,title,description,cover_image,readable_publish_date}=blog
    console.log(blog)
    return (
        <div className="border-[2px] border-green-500 hover:border-black p-3 hover:scale-105 duration-500 ">
            <Link rel="noopener noreferrer"  className=" max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-400">{readable_publish_date}</span>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Blog;