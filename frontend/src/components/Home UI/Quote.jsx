import classes from './Quote.module.css';

export default function Quote() {
    return (
        <div className={classes.quote}>
            <span className={classes.Qheading}>Om Sai Ram</span>
            <p>No Matter how far you are, I will draw you to me
                just as I pull a bird with a string tied to its foot.</p>
        </div>
    );
}