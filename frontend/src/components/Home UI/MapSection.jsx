import classes from './MapSection.module.css';

export default function MapSection() {
    return (
        <div className={classes.mapSection}>
            <div className={classes.mapContainer}>
                <iframe
                    title='Sri Shridi Sai Baba Mandiram'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.202037077715!2d78.73766717381469!3d13.212628609550618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad7eaf619c72c1%3A0xcb3c9e71de841981!2sSri%20Shiridi%20Sai%20Baba%20Mandiram!5e0!3m2!1sen!2sin!4v1753011160015!5m2!1sen!2sin"
                    allowFullScreen=''
                    loading='lazy'
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
            <div className={classes.textContainer}>
                <h2>Visit Us to embrace the divine</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Neque odio elementum platea arcu.
                    Cursus ipsum morbi feugiat faucibus at purus leo vel mattis. Quam a blandit eget tempus sed tellus.
                    Pharetra volutpat fringilla et lacus. Quis in nibh neque aliquet elit sed egestas bibendum iaculis.
                    Nulla tristique tortor pulvinar netus eu curabitur tellus posuere.
                    Est id nunc eget elementum netus integer. Non tortor nunc turpis sed ut consectetur.
                    Potenti gravida pellentesque tincidunt vulputate scelerisque sodales.
                </p>
            </div>
        </div>
    );
}