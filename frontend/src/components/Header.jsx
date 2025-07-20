import Logo from "../asserts/final_logo_v1.png";
import rail_right from "../asserts/Railing_right.png";
import rail_left from "../asserts/Railing_left.png";
import arch_right from "../asserts/archIcons_right.png";
import arch_left from "../asserts/archIcons_left.png";

import classes from './Header.module.css';

export default function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.titleContainer}>
                <img src={arch_left} alt="arch left" className={classes.arches} />
                <div id={classes.title}>
                    <img src={Logo} alt="Temple Logo" />
                    <h1>Sri Shridi Sai Baktha Mandali</h1>
                </div>
                <img src={arch_right} alt="arch right" className={classes.arches} />
            </div>
            <div className={classes.railings}>
                <img src={rail_left} alt="left railing" />
                <img src={rail_right} alt="right railing" />
            </div>
        </div>
    );
}