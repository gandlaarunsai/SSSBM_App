
import classes from './Footer.module.css';

import copyRightIcon from '../../asserts/copyright_icon.png';
import FooterInfo from './FooterInfo';

export default function Footer() {
    return (
        <footer className={classes.footerLic}>
            <div className={classes.copyrightCont}>
                <img src={copyRightIcon} alt='Copy Right' />
                <h6>2025 @ Sri Shridi Sai Baktha Mandali</h6>
            </div>
            <FooterInfo />
        </footer>);
}