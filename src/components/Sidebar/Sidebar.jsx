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
        <Link to="/" className="block">
          <HiOutlineHome></HiOutlineHome>
        </Link>
        <Link to="/about" className="block">
          <HiOutlineUser></HiOutlineUser>
        </Link>
        <Link to="/skills" className="block">
          <MdOutlineSettings></MdOutlineSettings>
        </Link>
        <Link to="/projects" className="block">
          <FaRegEye></FaRegEye>
        </Link>
      </div>
      <div className="absolute bottom-4 space-y-6">
        <Link to="/contact" className="block">
          <FaRegEnvelope></FaRegEnvelope>
        </Link>
        <Link to="" className="block">
          <FaLinkedin></FaLinkedin>
        </Link>
        <Link to="" className="block">
          <FaGithub></FaGithub>
        </Link>
        <Link to="" className="block">
          <FaFacebook></FaFacebook>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
