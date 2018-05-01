// @flow

import React from 'react';
import classNames from 'classnames';

type FormFieldProps = {
    labelName: string,
    type: string,
    id: string,
    value: string,
    name: string,
    defaultChecked: Array<string>,
    onChange: Function,
};

export default function(props: FormFieldProps) {
    const {
        labelName,
        type,
        id,
        value,
        name,
        defaultChecked,
        onChange,
    } = props;
    const classes = classNames(`form__item form__item--${type}`, {
        'form__item--active': defaultChecked,
    });
    return (
        <div className={classes}>
            <label className="form__label" htmlFor={id}>
                <input
                    className="form__input"
                    value={value || ''}
                    type={type}
                    id={id}
                    name={name}
                    defaultChecked={defaultChecked}
                    onChange={onChange}
                />
                {labelName}
            </label>
        </div>
    );
}
