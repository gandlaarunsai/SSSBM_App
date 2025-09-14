import classes from './Input.module.css';

export default function Input({ label, type, longType = false, optional = false, ...props }) {

    const shortStyle = {
        'width': '40%'
    };

    return (
        <div className={classes.input_ctn} style={props.Style}>
            <label for={label}>{label}{optional && <p className={classes.optional}>(Optional)</p>}</label>
            {/* {optional && <p className={classes.optional}>(Optional)</p>} */}
            <input type={type} id={label} style={!longType ? shortStyle : {}} />
        </div>);
}