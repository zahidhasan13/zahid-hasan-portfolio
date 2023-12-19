import { Link } from "react-router-dom";
import web from "../../assets/img/web.png";

const Home = () => {
  return (
    <div className="text-white md:flex md:justify-between md:items-center md:py-20 md:px-28 py-14 px-12 md:h-screen h-auto">
      <div className="">
        <h1 className="md:text-6xl text-4xl font-bold font-helvetica">
          Hi, <br /> I am Zahid, <br /> Web Developer.
        </h1>
        <p className="text-sm text-[#8d8d8d] tracking-[3px] mt-2">
          Frontend Developer | React JS | Freelancer
        </p>
        <Link to="/contact">
          <button className="px-6 py-2 text-md md:text-xl uppercase text-[#FFD700] border border-[#FFD700] tracking-[3px] hover:text-[#022C43] hover:bg-[#FFD700] mt-8">
            contact me
          </button>
        </Link>
      </div>
      <div className="-mb-10">
        <img src={web} alt="web" />
      </div>
    </div>
  );
};

export default Home;
