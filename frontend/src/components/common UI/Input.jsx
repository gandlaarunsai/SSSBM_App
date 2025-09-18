import classes from './Input.module.css';

export default function Input({ label, type, name, disable, optional = false, ...props }) {

    return (
        <div className={classes.input_ctn}>
            <label for={label}>{label}{optional && <p className={classes.optional}>(Optional)</p>}</label>
            <input type={type} 
                id={label} 
                name={name}
                // onChange={label === 'Donating Amount' ? props.amountChange: undefined }
                {...props}
                />
        </div>);
}