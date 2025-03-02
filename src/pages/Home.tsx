import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Navbar/>
           <div className="px-2 max-w-7xl mx-auto">
           <Outlet/>
           </div>
        </div>
    );
};

export default Home;