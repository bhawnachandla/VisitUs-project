import { Outlet } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import HeaderNew from "./Layout/HeaderNew";
import Header1 from "./Layout/Header1";

export default function Master(){
    return(
        <>
        {/* <HeaderNew/> */}
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}