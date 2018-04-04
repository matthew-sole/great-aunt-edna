import React from 'react';
import classNames from 'classnames';

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

    const classes = classNames('form__item', {
        'form__item--active': checked,
    })
    return(
        <div className={classes}>
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
