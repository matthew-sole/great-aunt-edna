import React from 'react';

export default function({values, labelName, value, checked, ...props}) {
    return(
        <div className={`form__item form__item--${props.type} ${checked}`}>
            <input className={`form__input ${props.type}`} 
                value={value || ''}
                {...props}
            />
            <label className="form__label" htmlFor={props.id}>{labelName}</label>
        </div>
    )
}