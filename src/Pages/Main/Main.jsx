import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Main = () => {
    return (
        <div>
          
            <Header></Header>
            <div className="min-h-[calc(100vh - 200px)]">

            <Outlet></Outlet>
            <Footer></Footer>
            </div>

        </div>
    );
};

export default Main;