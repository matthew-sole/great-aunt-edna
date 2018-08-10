import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FormField = props => {
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
                    className={`form__input form__input--${type}`}
                    value={value}
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
};

export default FormField;

FormField.propTypes = {
    labelName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    defaultChecked: PropTypes.boolean,
    onChange: PropTypes.func.isRequired,
};
