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
    } = props;
    return(
        <div className={`form__item ${checked}`}>
            <label className="form__label" htmlFor={id}>
                <input className={`form__input ${type}`} 
                    value={value || ''}
                    type={type} 
                    id={id}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                />
                {labelName}
            </label>
        </div>
    )
}

export default FormField;
