import classes from './Info.module.css';
import TempleTimings from './TempleTimes';
import Updates from './Updates';

export default function InfoSection() {
    return (
        <div className={classes.info}>
            <TempleTimings />
            <Updates />
        </div>
    );
}