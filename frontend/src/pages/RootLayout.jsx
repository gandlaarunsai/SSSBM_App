import { Outlet } from "react-router-dom";

import classes from './RootLayout.module.css';

import Header from "../components/Header UI/Header";
import Navbar from "../components/Header UI/Navbar";
import Footer from "../components/footer UI/Footer";

export default function RootLayout() {

    // const mainStyle = {
    //     padding: "4rem",
    //     // "max-width": "94.4rem",
    //     "align-self": "center"
    // };

    return (
        <>
            <header>
                <Header />
                <Navbar />
            </header>
            <main className={classes.rootLayout_main}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}