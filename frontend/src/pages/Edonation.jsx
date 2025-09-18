// import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import Heading from "../components/common UI/Heading";
// import Input from "../components/common UI/Input";

import classes from './Edonation.module.css';
import DonationForm from "../components/edonation UI/DonationForm";

export default function EdonationPage() {

    const navigate = useNavigate();

    function handleFormSubmit(event) {
        event.preventDefault();

        const formData= new FormData(event.target);

        const data= Object.fromEntries(formData.entries());

        navigate('/edonation/confirmation',{state:{...data}});
        console.log(data);
    }

    return (
        <>
        <div className={classes.page_title}>
            <h2>Enter Your Donation Details</h2>
            <p>Please fill in the details below to make your donation.</p>
        </div>
        <form onSubmit={handleFormSubmit} className={classes.form_container}>
            <DonationForm />
            <div className={classes.checkbox}>
                <input type="checkbox" id="receiveUpdates" defaultChecked />
                <label for='receiveUpdates'>Like to receive updates & notification from us.</label>
            </div>
            <div className={classes.Buttons}>
                <button className={classes.NextBtn}>Proceed to Confirmation</button>
                <button className={classes.cancelBtn} onClick={() => navigate('/')}>cancel</button>
            </div>
        </form>
        </>
    )
}