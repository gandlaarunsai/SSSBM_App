import HeaderBar from "./HeaderBar";
import classes from './Updates.module.css';

import { updates } from "../../fakeData";

export default function Updates() {
    return (
        <div className={classes.updateSection}>
            <HeaderBar title="Important Updates" />
            <div className={classes.updatesCont}>
                <ul className={classes.Ulist}>
                    {
                        updates.map(update => <li key={update.id}>
                            {update.desc}
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
}