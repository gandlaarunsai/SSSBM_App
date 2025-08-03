import { useRef } from "react";
import { Link } from "react-router-dom";

import classes from './FooterInfo.module.css';

import facebookIcon from "../../asserts/FaceBook.png";
import youtubeIcon from "../../asserts/YouTube.png";
import instagramIcon from "../../asserts/Instagram.png";
import FeedbackModal from "../Home UI/FeedbackModal";

export default function FooterInfo() {

    const feedbackModal = useRef();

    function handleFeedbackModal() {
        feedbackModal.current.showModal();
    }

    return (
        <>
            <FeedbackModal ref={feedbackModal} />
            <div className={classes.footerInfoCont}>
                <div className={classes.footerLinks}>
                    <Link to="/about">About</Link>
                    <Link to="/feedback" onClick={handleFeedbackModal}>Feedback</Link>
                </div>
                <div className={classes.socialMediaLinks}>
                    <Link to="">
                        <img src={facebookIcon} alt="Facebook" />
                    </Link>
                    <Link to="">
                        <img src={youtubeIcon} alt="Youtube" />
                    </Link>
                    <Link to="">
                        <img src={instagramIcon} alt="Instagram" />
                    </Link>
                </div>
            </div>
        </>
    );
}