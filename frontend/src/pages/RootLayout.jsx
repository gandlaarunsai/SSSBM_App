import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/footer UI/Footer";

export default function RootLayout() {
    return (
        <>
            <header>
                <Header />
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}