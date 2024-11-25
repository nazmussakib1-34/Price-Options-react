import { useState } from "react";
import Link from "../Link/Link";
import {RiMenuFill } from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";
const NavBer = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Profile', path: '/profile/:id' }, // Dynamic path for user profiles
      ];
      
    return (
        <nav className="bg-pink-900 ">
            <div className="md:hidden text-2xl ml-8 " onClick={() =>setOpen(!open) }>
            {
                open===true ?
                <FaWindowClose></FaWindowClose>:<RiMenuFill></RiMenuFill>
            }

            </div>

            <ul className={`md:flex bg-yellow-200 duration-1000 ${open? 'top-6':'-top-40'} absolute md:static px-6`}>
            {
                routes.map(route => <Link key={route.id} route = {route}></Link>)

            }
            </ul>
        </nav>
    );
};

export default NavBer;