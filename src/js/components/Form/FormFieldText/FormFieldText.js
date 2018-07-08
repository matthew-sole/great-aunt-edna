// @flow

import React from 'react';

type FormFieldTextProps = {
    labelName: string,
    type: string,
    id: string,
    value: string,
    name: string,
    onChange: Function,
};

export default function(props: FormFieldTextProps) {
    const { labelName, type, id, value, name, onChange } = props;
    return (
        <div className="form__input--text">
            <label className="form__label" htmlFor={id}>
                {labelName}
                <input
                    className="form__input"
                    value={value || ''}
                    type={type}
                    id={id}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}
