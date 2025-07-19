import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function RootLayout() {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
        </>
    );
}