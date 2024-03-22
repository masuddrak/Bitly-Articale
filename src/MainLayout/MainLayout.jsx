import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <main>
            <div className="h-16">
                <Header></Header>
            </div>
            <div  className="min-h-[calc(100vh-116px)]">

            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </main>
    );
};

export default MainLayout;