import { Link } from "react-router-dom";
import  webimg from "../assets/wave.svg";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-116px)] flex justify-center items-center relative">
            <div className="text-center space-y-3">
                <h2 className="text-3xl font-bold">Welcome to ByteBlaze</h2>
                <p>ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
              
                <div className="flex gap-6 justify-center">
                    <Link to='/bolgs' className="relative inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-green-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Read Blogs</span>
                    </Link>
                    <Link to='bookmarks' className="relative inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-green-600 group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Bookmarks</span>
                    </Link>
                </div>
            </div>
            <div className="absolute bottom-0 w-full ">
                <img className="w-full" src={webimg} alt="" />
            </div>
        </div>
    );
};

export default Home;