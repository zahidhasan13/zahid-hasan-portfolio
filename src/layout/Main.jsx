import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="flex">
      <div className="bg-[#181818]">
        <Sidebar></Sidebar>
      </div>
      <div className="bg-[#022C43] w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
