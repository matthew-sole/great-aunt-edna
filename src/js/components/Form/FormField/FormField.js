import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FormField = props => {
    const { type, id, labelcontent, defaultChecked } = props;
    return (
        <div
            className={classNames(`form__item form__item--${type}`, {
                'form__item--active': defaultChecked,
            })}
        >
            <label className="form__label" htmlFor={id}>
                <input
                    className={`form__input form__input--${type}`}
                    {...props}
                />
                {labelcontent}
            </label>
        </div>
    );
};

export default FormField;

FormField.propTypes = {
    labelcontent: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
