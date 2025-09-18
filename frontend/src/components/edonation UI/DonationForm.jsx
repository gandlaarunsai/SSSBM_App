import { useState } from 'react';

import classes from './DonationForm.module.css';

import Heading from '../common UI/Heading';
import Input from '../common UI/Input';

export default function DonationForm({data, disable=false}){

    const [amount, setAmount]= useState(0);

    function handleAmountChange(event){
        event.preventDefault();
        setAmount(event.target.value);
        // console.log(amount);
    }

    return (
        <div>
            {/* Donation Details */}
            <section className={classes.donation_details}>
                <Heading title="Donation Details" />
                <div className={`${classes.donation_inputs} ${classes.grid_template}`}>
                    <Input label="Donating Amount" 
                        name="amount_donated" 
                        type="number" 
                        onChange={handleAmountChange}
                        defaultValue={data?.amount_donated}
                        disabled={disable}
                    />
                    {amount > 100000 && <Input label="Pan Card Number" name="panCard_No" type="text" defaultValue={data?.panCard_No} disabled={disable}/>}{/* should render conditionally if amount > 1lakh */}
                </div>
            </section>
        
            {/* Devotee Details */}
            <section className={classes.devotee_details}>
                <Heading title="Your Details" />
                <div className={`${classes.devotee_details_inputs} ${classes.grid_template}`}>
                    <Input label="First Name" name="first_name" type="text" defaultValue={data?.first_name} disabled={disable}/>
                    <Input label="Last Name" name="last_name" type="text" defaultValue={data?.last_name} disabled={disable}/>
                    <Input label="Gothram" name="gothram" type="text" defaultValue={data?.gothram} optional={true} disabled={disable}/>
                </div>
            </section>
        
            {/* Contact Details */}
            <section className={classes.contact_details}>
                <Heading title="Contact Details" />
                <div className={classes.grid_template}>
                    <Input label="Phone Number" name="phone_number" type="tel" defaultValue={data?.phone_number} disabled={disable}/>
                    <Input label="Email Id" name="email_id" type="email" defaultValue={data?.email_id} disabled={disable}/>
                </div>
            </section>
        
            {/* Address Details */}
            <section className={classes.address_details}>
                <Heading title="Address Details" />
                <div className={classes.grid_template}>
                        <Input label="Area, Street, Sector, Mandal, Dist" name="address_line1" type="text" defaultValue={data?.address_line1} disabled={disable}/>
                        <Input label="Flat, House No, Building,  Apartment" name="address_line2" type="text" defaultValue={data?.address_line2} disabled={disable}/>
                        <Input label="Landmark" name="landmark" type="text" defaultValue={data?.landmark} disabled={disable}/>
                        <Input label="Town/City" name="town_city" type="text" defaultValue={data?.town_city} disabled={disable}/>
                        <Input label="State" name="state" type="text" defaultValue={data?.state} disabled={disable}/>
                        <Input label="Country" name="country" type="text" defaultValue={data?.country} disabled={disable}/>
                        <Input label="Pincode" name="pincode" type="text" defaultValue={data?.pincode} disabled={disable}/>
                </div>
            </section>
        
            {/* <div className={classes.checkbox}>
                <input type="checkbox" id="receiveUpdates" defaultChecked />
                <label for='receiveUpdates'>Like to receive updates & notification from us.</label>
            </div>
        
            <div className={classes.Buttons}>
                <button className={classes.NextBtn}>Proceed to Confirmation</button>
                <button className={classes.cancelBtn} onClick={() => navigate('/')}>cancel</button>
            </div> */}
        
        </div>
    );
}