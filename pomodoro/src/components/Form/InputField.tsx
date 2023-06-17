import { InputFieldProp } from "./InputFieldProp";

import classes from './InputField.module.css'

const InputField = (props: InputFieldProp) => {
    return (
        <div className={classes['input-wrapper']}>
            <input
                type="number"
                min={1}
                max={59}
                placeholder={props.placeholder}
                name="text"
                className="input"
                onChange={props.onChange}>
            </input>
        </div>
    );
}

export default InputField;