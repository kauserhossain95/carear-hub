import { NavLink } from "react-router-dom"


export const Header = () => {

    
    const links = <>
        <li><NavLink className=''  to = "/statistics">Statistics</NavLink></li>
        <li><NavLink to = "/apply">Applied Jobs</NavLink></li>
        <li><NavLink to = "/blogs">Blogs</NavLink></li>
       
    </>
    return (
        <div className="navbar container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Career Hub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-r from-cyan-500 to-blue-500 capitalize text-white font-semibold text-[17px]">Apply now</a>
            </div>
        </div>
    )
}
