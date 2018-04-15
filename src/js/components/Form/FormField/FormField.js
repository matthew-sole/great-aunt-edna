import React from 'react';
import classNames from 'classnames';

export default function(props) {
    const { labelName, type, id, value, name, checked, onChange, errors, touched } = props;
    const classes = classNames(`form__item form__item--${type}`, {
        'form__item--active': checked,
        'form__group--error': errors && touched,
    });
    return (
        <div className={classes}>
            <label className="form__label" htmlFor={id}>
                <input
                    className={`form__input`}
                    value={value || ''}
                    type={type}
                    id={id}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                />
                {labelName}
            </label>
            {errors && touched && <div className="form__error-message">{errors}</div>}
        </div>
    );
}
