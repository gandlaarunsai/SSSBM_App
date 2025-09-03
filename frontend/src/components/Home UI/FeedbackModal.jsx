import { createPortal } from 'react-dom';

import classes from './FeedbackModal.module.css';

import star from '../../asserts/star.svg';
import { useNavigate } from 'react-router-dom';

export default function FeedbackModal({ ref }) {

    const navigate= useNavigate();

    return createPortal(
        <dialog ref={ref} className={classes.FeedbackModal}>
            <div className={classes.Feedback_header}>
                <h2>Help Us ! By giving you Feedback</h2>
            </div>
            <div className={classes.FeedbackModal_container}>
                <div className={classes.Feedback_rating}>
                    <p>How well is the website helping you?</p>
                    <img src={star} alt='star' />
                </div>
                <div className={classes.feedback_input}>
                    <label for='feedback' className={classes.inputLabel}>Tell us about your feedback</label>
                    <textarea id='feedback' name='feedback' className={classes.feedback} />
                </div>
                <form method='dialog' className={classes.feedbackForm}>
                    <button onClick={()=>navigate(-1)} className={classes.cancelBtn}>cancel</button>
                    <button className={classes.submitBtn}>Submit Feedback</button>
                </form>
            </div>
        </dialog>, document.getElementById('modal')
    );
}