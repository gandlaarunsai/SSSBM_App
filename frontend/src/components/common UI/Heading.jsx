import classes from './Heading.module.css';

export default function Heading({ title }) {
    return (
        <div className={classes.heading_container}>
            <h4>{title}</h4>
            <div className={classes.heading_underLine}></div>
        </div>
    );
}