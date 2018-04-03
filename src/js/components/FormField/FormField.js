import React from 'react';

const FormField = props => {
    const {
        labelName,
        type,
        id,
        value,
        name,
        checked,
        onChange,
        errors           
    } = props;
    console.log(errors)
    return(
        <div className={`form__item form__item--${type} ${checked}`}>
            <label className="form__label" htmlFor={id}>
                <input className={`form__input ${type} ${errors}`} 
                    value={value || ''}
                    type={type} 
                    id={id}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                />
                {labelName}
            </label>
            {errors && (
                <div className="input-feedback">{errors}</div>
            )}
        </div>
    )
}

export default FormField;
