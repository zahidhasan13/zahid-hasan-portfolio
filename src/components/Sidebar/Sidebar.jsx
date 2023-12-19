import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaRegEye,
} from "react-icons/fa6";
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const path = useLocation();
  console.log(path);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    setOpenMenu(false);
  }, [path]);

  return (
    <div className="h-auto">
      <button
        onClick={toggleMenu}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 absolute"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-20 h-screen ${
          openMenu ? "block" : "hidden md:block"
        }`}
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex justify-center">
          <Link to="/">
            <h2 className="text-xl font-bold text-center">Z</h2>
            <p className="text-md tracking-wider">ZAHID</p>
          </Link>
          <div className="absolute top-1/3 space-y-6 text-3xl">
            <Link to="/" className="block hover:text-yellow-300">
              <HiOutlineHome></HiOutlineHome>
            </Link>
            <Link to="/about" className="block hover:text-yellow-300">
              <HiOutlineUser></HiOutlineUser>
            </Link>
            <Link to="/skills" className="block hover:text-yellow-300">
              <MdOutlineSettings></MdOutlineSettings>
            </Link>
            <Link to="/projects" className="block hover:text-yellow-300">
              <FaRegEye></FaRegEye>
            </Link>
          </div>
          <div className="absolute bottom-4 space-y-6">
            <Link to="/contact" className="block hover:text-yellow-300">
              <FaRegEnvelope></FaRegEnvelope>
            </Link>
            <Link
              to="https://www.linkedin.com/in/zahidhasanofficial/"
              className="block hover:text-yellow-300"
            >
              <FaLinkedin></FaLinkedin>
            </Link>
            <Link
              to="https://github.com/zahidhasan13"
              className="block hover:text-yellow-300"
            >
              <FaGithub></FaGithub>
            </Link>
            <Link
              to="https://www.facebook.com/zahid.13aug1999/"
              className="block hover:text-yellow-300"
            >
              <FaFacebook></FaFacebook>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
