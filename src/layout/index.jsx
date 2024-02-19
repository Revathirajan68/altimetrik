// packages
import { Outlet } from "react-router-dom";
// components
import Header from "../components/derived/header";

// style
import './style.scss';

const Layout = () => {
    return (
        <>
            <div className="layout-container">
                <div className="layout-content">
                    <Header/>
                    <div className="layout-body">
                    <Outlet></Outlet>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Layout