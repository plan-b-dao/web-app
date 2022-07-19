import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Logo } from "../components/primitives/Logo";
import { Header } from "./Header";

interface ILayoutProps {}

export const Layout: React.FC<ILayoutProps> = () => {

    return (
        <div className="flex">
            <aside className=" w-[240px] bg-cultured-light h-screen shadow-lg">
                <Logo />
                <Navigation />
            </aside>
            <div className="flex-1 h-screen overflow-y-auto">
                <Header />
                <div className="mx-auto w-4/12">
                    <Outlet />  
                </div>
            </div>
        </div>
    );
}