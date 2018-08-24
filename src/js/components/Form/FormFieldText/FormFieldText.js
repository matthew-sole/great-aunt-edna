import React from 'react';
import PropTypes from 'prop-types';

const FormFieldText = props => {
    const { labelcontent, type, id, value, name, onChange } = props;
    return (
        <div className="form__input--text">
            <label className="form__label" htmlFor={id}>
                {labelcontent}
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
};

export default FormFieldText;

FormFieldText.propTypes = {
    labelcontent: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
