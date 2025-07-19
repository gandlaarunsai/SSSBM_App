import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';

import { ReactComponent as AdminIcon } from '../asserts/account_circle_24dp_fill.svg';

export default function Navbar() {

    const [isActive, setIsActive] = useState(false);

    function handleAdminClick() {
        setIsActive(prevState => !prevState);
    }

    return (
        <nav className={classes.navBar}>
            <div class={classes.navContent}>
                <div class={classes.navCenter}>
                    <NavLink to="/" className={({ isActive }) => isActive ? classes.NavActive : classes.navLink}>Home</NavLink>
                    <NavLink to="/edonation" className={({ isActive }) => isActive ? classes.NavActive : classes.navLink}>E-Donation</NavLink>
                    <NavLink to="/admin" className={({ isActive }) => isActive ? classes.NavActive : classes.navLink}>Admin</NavLink>
                </div>
                <div class={classes.navIcon} onClick={handleAdminClick}>
                    <AdminIcon className={isActive ? `${classes.customSvg} ${classes.active}` : classes.customSvg} />
                    {isActive && <p>User</p>}
                </div>
            </div>
        </nav >
    );
}