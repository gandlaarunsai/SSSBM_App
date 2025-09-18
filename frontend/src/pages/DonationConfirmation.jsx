import { useLocation, useNavigate } from "react-router-dom"

import classes from "./DonationConfirmation.module.css"

import DonationForm from "../components/edonation UI/DonationForm";


export default function DonationConfirmation(){

    const location= useLocation();
    const formData= location.state;

    const navigate= useNavigate();
    
    return (
        <>
            <div className={classes.page_title}>
                <h2>Confirm Your Donation Details</h2>
                <p>Please review your donation details carefully before payment.</p>
            </div>
            <div className={classes.cnf_container}>
                <DonationForm data={formData} disable={true} />
                <div className={classes.Buttons}>
                    <button className={classes.NextBtn}>Proceed to Payment</button>
                    <button className={classes.cancelBtn} onClick={() => navigate(-1)}>cancel</button>
                </div>
            </div>
        </>
    );
}