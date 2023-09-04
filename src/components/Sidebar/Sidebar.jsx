import { FaFacebook, FaGithub, FaLinkedin, FaRegEnvelope, FaRegEye } from "react-icons/fa6";
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="text-white min-h-screen flex lg:flex-col items-center">
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
        <Link to="https://www.linkedin.com/in/zahidhasanofficial/" className="block hover:text-yellow-300">
          <FaLinkedin></FaLinkedin>
        </Link>
        <Link to="https://github.com/zahidhasan13" className="block hover:text-yellow-300">
          <FaGithub></FaGithub>
        </Link>
        <Link to="https://www.facebook.com/zahid.13aug1999/" className="block hover:text-yellow-300">
          <FaFacebook></FaFacebook>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
