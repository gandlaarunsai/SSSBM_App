import Heading from "../components/common UI/Heading";
import Input from "../components/common UI/Input";

import classes from './Edonation.module.css';

export default function EdonationPage() {
    return (
        <form className={classes.form_container}>
            {/* Donation Details */}
            <section className={classes.donation_details}>
                <Heading title="Donation Details" />
                <Input label="Donating Amount" type="number" />
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
                    <Input label="Flat, House No, Building,  Apartment" type="text" longType={true} />
                    <Input label="Area, Street, Sector, Mandal, Dist" type="text" longType={true} />
                    <Input label="Landmark" type="text" longType={true} />
                    <Input label="Town/City" type="text" longType={true} />
                    <Input label="State" type="text" longType={true} />
                    <Input label="Country" type="text" longType={true} />
                    <Input label="Pincode" type="text" longType={true} Style={{ flex: 'initial' }} />
                </div>
            </section>
        </form>
    )
}