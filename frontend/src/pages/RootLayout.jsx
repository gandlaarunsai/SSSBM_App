import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/footer UI/Footer";

export default function RootLayout() {

    const mainStyle = {
        padding: "4rem",
        "max-width": "94.4rem",
        "align-self": "center"
    };

    return (
        <>
            <header>
                <Header />
                <Navbar />
            </header>
            <main style={mainStyle}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}