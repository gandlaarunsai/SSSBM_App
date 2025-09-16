import { useNavigate } from "react-router-dom";
import Heading from "../components/common UI/Heading";
import Input from "../components/common UI/Input";

import classes from './Edonation.module.css';

export default function EdonationPage() {

    const navigate = useNavigate();

    function handleFormSubmit(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleFormSubmit} className={classes.form_container}>
            {/* Donation Details */}
            <section className={classes.donation_details}>
                <Heading title="Donation Details" />
                <div className={classes.donation_inputs}>
                    <Input label="Donating Amount" type="number" longType={true} />
                    <Input label="Pan Card Number" type="text" longType={true} /> {/* should render conditionally if amount > 1lakh */}
                </div>
            </section>

            {/* Devotee Details */}
            <section className={classes.devotee_details}>
                <Heading title="Your Details" />
                <div className={classes.name}>
                    <Input label="First Name" type="text" longType={true} />
                    <Input label="Last Name" type="text" longType={true} />
                </div>
                <Input label="Gothram" type="text" optional={true} />
            </section>

            {/* Contact Details */}
            <section className={classes.contact_details}>
                <Heading title="Contact Details" />
                <div className={classes.name}>
                    <Input label="Phone Number" type="tel" longType={true} />
                    <Input label="Email Id" type="email" longType={true} />
                </div>
            </section>

            {/* Address Details */}
            <section className={classes.address_details}>
                <Heading title="Address Details" />
                <div className={classes.addr_inputs}>
                    <div className={classes.Line1}>
                        <Input label="Flat, House No, Building,  Apartment" type="text" longType={true} />
                        <Input label="Area, Street, Sector, Mandal, Dist" type="text" longType={true} />
                    </div>
                    <div className={classes.Line2}>
                        <Input label="Landmark" type="text" longType={true} />
                        <Input label="Town/City" type="text" longType={true} />
                    </div>
                    <div className={classes.Line3}>
                        <Input label="State" type="text" longType={true} />
                        <Input label="Country" type="text" longType={true} />
                    </div>
                    <div className={classes.odd}>
                        <Input label="Pincode" type="text" longType={true} />
                    </div>
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