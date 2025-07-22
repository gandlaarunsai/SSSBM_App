import HeaderBar from "./HeaderBar";

import classes from './TempleTimes.module.css';

import { templeTimes } from "../../fakeData";

export default function TempleTimings() {
    return (
        <div className={classes.templeTimesContainer}>
            <HeaderBar title="Temple Timings" />
            <div className={classes.timesContent}>
                <div className={classes.timingTable}>
                    {
                        templeTimes.map(actionTime => {
                            return (
                                <div className={classes.row}>
                                    <div className={classes.actions}>{actionTime.action}</div>
                                    <div className={classes.separator}><hr /></div>
                                    <div className={classes.time}>{actionTime.time}</div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}