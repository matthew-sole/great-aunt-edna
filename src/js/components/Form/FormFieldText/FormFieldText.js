import React from 'react';
import classNames from 'classnames';

export default function(props) {
    const {
        labelName,
        placeholder,
        type,
        id,
        value,
        name,
        checked,
        onChange,
        errors,
        touched
    } = props;

    const classes = classNames('form__item form__item--text', {
        'form__item--active': checked,
    })
    return(
        <div className={classes}> 
            <label className="form__label" htmlFor={id}>{labelName}</label>
            <input className={`form__input`} 
                value={value || ''}
                placeholder={placeholder}
                type={type} 
                id={id} 
                name={name}
                checked={checked}
                onChange={onChange}
            />
            {(errors && touched && (<div className="form__error-message">{errors}</div>))}
        </div>
    )
}
