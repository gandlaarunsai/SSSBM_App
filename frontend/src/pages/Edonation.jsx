import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Heading from "../components/common UI/Heading";
import Input from "../components/common UI/Input";

import classes from './Edonation.module.css';

export default function EdonationPage() {

    const [amount, setAmount]= useState(0);

    const navigate = useNavigate();

    function handleFormSubmit(event) {
        event.preventDefault();

        const formData= new FormData(event.target);

        const data= Object.fromEntries(formData.entries());

        console.log(data);
    }

    function handleAmountChange(event){
        event.preventDefault();
        setAmount(event.target.value);
        console.log(amount);
    }

    return (
        <form onSubmit={handleFormSubmit} className={classes.form_container}>
            {/* Donation Details */}
            <section className={classes.donation_details}>
                <Heading title="Donation Details" />
                <div className={`${classes.donation_inputs} ${classes.grid_template}`}>
                    <Input label="Donating Amount" name="Amount_donated" type="number" longType={true} amountChange={handleAmountChange}/>
                    {amount > 100000 && <Input label="Pan Card Number" name="panCard_No" type="text" longType={true} />}{/* should render conditionally if amount > 1lakh */}
                </div>
            </section>

            {/* Devotee Details */}
            <section className={classes.devotee_details}>
                <Heading title="Your Details" />
                <div className={`${classes.devotee_details_inputs} ${classes.grid_template}`}>
                    <Input label="First Name" name="first_name" type="text" longType={true} />
                    <Input label="Last Name" name="last_name" type="text" longType={true} />
                    <Input label="Gothram" name="gothram" type="text" longType={true} optional={true}/>
                </div>
            </section>

            {/* Contact Details */}
            <section className={classes.contact_details}>
                <Heading title="Contact Details" />
                <div className={classes.grid_template}>
                    <Input label="Phone Number" name="phone_number" type="tel" longType={true} />
                    <Input label="Email Id" name="email_id" type="email" longType={true} />
                </div>
            </section>

            {/* Address Details */}
            <section className={classes.address_details}>
                <Heading title="Address Details" />
                <div className={classes.grid_template}>
                        <Input label="Area, Street, Sector, Mandal, Dist" name="address_line1" type="text" longType={true} />
                        <Input label="Flat, House No, Building,  Apartment" name="address_line2" type="text" longType={true} />
                        <Input label="Landmark" name="landmark" type="text" longType={true} />
                        <Input label="Town/City" name="town_city" type="text" longType={true} />
                        <Input label="State" name="state" type="text" longType={true} />
                        <Input label="Country" name="country" type="text" longType={true} />
                        <Input label="Pincode" name="pincode" type="text" longType={true} />
                </div>
            </section>

            <div className={classes.checkbox}>
                <input type="checkbox" id="receiveUpdates" defaultChecked />
                <label for='receiveUpdates'>Like to receive updates & notification from us.</label>
            </div>

            <div className={classes.Buttons}>
                <button className={classes.NextBtn}>Proceed to Confirmation</button>
                <button className={classes.cancelBtn} onClick={() => navigate('/')}>cancel</button>
            </div>

        </form>
    )
}