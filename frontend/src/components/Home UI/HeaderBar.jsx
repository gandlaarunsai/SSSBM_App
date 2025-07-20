import classes from './HeaderBar.module.css';

export default function HeaderBar({ title }) {
    return (
        <div className={classes.headerBar}>
            <p>{title}</p>
        </div>
    );
}