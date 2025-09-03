import { useLocation, useRoutes } from "react-router-dom"
import { routes } from "./App";
import FeedbackModal from "./components/Home UI/FeedbackModal";

const modalRoute=[
    {path: '/feedback', element:<FeedbackModal/>}
];

export default function AppRoutes(){

    const location= useLocation();
    const background= location.state?.backgroundLocation;

    const element= useRoutes(routes, background || location);

    const modal= useRoutes(modalRoute, location);

    return (
        <>
            {element}
            {background && modal}
        </>
    )
}