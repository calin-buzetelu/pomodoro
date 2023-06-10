import { InputFieldProp } from "./InputFieldProp";

import classes from './InputField.module.css'

const InputField = (props: InputFieldProp) => {
    return (
        <div className={classes['input-wrapper']}>
            <input
                type="number"
                placeholder={props.placeholder}
                name="text"
                className="input">
            </input>
        </div>
    );
}

export default InputField;