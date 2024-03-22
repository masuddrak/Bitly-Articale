import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    const [them, setThem] = useState("light")
    useEffect(() => {
        localStorage.setItem('localThem', them)
        const getThem = localStorage.getItem('localThem')

        document.querySelector("html").setAttribute("data-theme", getThem)

    }, [them])


    const handelThem = (e) => {
        if (e.target.checked) {
            setThem("dark")
        } else {
            setThem("light")
        }
    }
 

    return (
        <div className="navbar bg-base-100 shadow-lg px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to='/'><a>Home</a></NavLink>
                        <NavLink to='/blogs'><a>Blogs</a></NavLink>
                        <NavLink to='/bookmarks'><a>Bookmarks</a></NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost gap-0 text-2xl font-extrabold">Bitly<span className="text-green-600">Articale</span></a>

            </div>

            <div className="navbar-end gap-3">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 font-bold text-xl">
                        <NavLink to='/'><a>Home</a></NavLink>
                        <NavLink to='/blogs'><a>Blogs</a></NavLink>
                        <NavLink to='/bookmarks'><a>Bookmarks</a></NavLink>
                    </ul>
                </div>
                <label className="cursor-pointer grid place-items-center">
                    <input onChange={handelThem} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;