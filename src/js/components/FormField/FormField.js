import React from 'react';

export default function({labelName, value, ...props}) {
    return(
        <div className={`form__item form__item--${props.type}`}>
            <input className={`input ${props.type}`} 
                value={value || ''}
                {...props}
            />
            <label htmlFor={props.id}>{labelName}</label>
        </div>
    )
}