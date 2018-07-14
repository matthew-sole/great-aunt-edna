import React, { Component } from 'react';
import classNames from 'classnames';
import { Form } from 'formik';
import PropTypes from 'prop-types';

import Section from '../Section/Section';
import FormField from './FormField/FormField';
import FormFieldText from './FormFieldText/FormFieldText';

import './form.css';

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.status !== this.props.status) {
            this.toggleForm();
        }
    }

    toggleForm() {
        this.setState({ show: !this.state.show });
    }

    render() {
        const { values, handleChange, errors, touched, data } = this.props;
        return (
            <Section textLength>
                {this.state.show && (
                    <div>
                        <h2>RSVP</h2>
                        <p>
                            Please let us know if you will be able to celebrate
                            with us, and what requirements you may have.
                        </p>
                        <p>
                            If you would like to make changes once the form has
                            been submitted, please contact us so we can update
                            your details.
                        </p>
                        <Form>
                            <div>
                                <h4 className="form__header">
                                    Will you be able to make the wedding?
                                </h4>
                                <div className="form__group form__group--radio">
                                    <FormField
                                        labelName="Yes"
                                        type="radio"
                                        id="rsvp-yes"
                                        value="true"
                                        defaultChecked={values.rsvp === 'true'}
                                        name="rsvp"
                                        onChange={handleChange}
                                    />
                                    <FormField
                                        labelName="No"
                                        type="radio"
                                        id="rsvp-no"
                                        value="false"
                                        name="rsvp"
                                        defaultChecked={values.rsvp === 'false'}
                                        onChange={handleChange}
                                    />
                                    {errors.rsvp &&
                                        touched.rsvp && (
                                            <div className="form__error-message">
                                                {errors.rsvp}
                                            </div>
                                        )}
                                </div>
                            </div>
                            {values.rsvp === 'true' &&
                                data.members &&
                                data.members.length > 1 && (
                                    <div>
                                        <h4 className="form__header">
                                            Who will be able to make it?
                                        </h4>
                                        <div
                                            className={classNames(
                                                'form__group form__group--checkbox',
                                                {
                                                    'form__group--error':
                                                        errors.weddingMulti &&
                                                        touched.weddingMulti,
                                                },
                                            )}
                                        >
                                            {data.members.map((item, index) => {
                                                const value = item.guestName
                                                    .replace(' ', '-')
                                                    .toLowerCase();
                                                return (
                                                    <FormField
                                                        id={`weddingMulti.${value}`}
                                                        key={`${value}`}
                                                        labelName={
                                                            item.guestName
                                                        }
                                                        type="checkbox"
                                                        value={value}
                                                        name={`weddingMulti.${index}`}
                                                        defaultChecked={
                                                            values.weddingMulti[
                                                                index
                                                            ]
                                                        }
                                                        onChange={handleChange}
                                                    />
                                                );
                                            })}

                                            {errors.weddingMulti &&
                                                touched.weddingMulti && (
                                                    <div className="form__error-message">
                                                        {errors.weddingMulti}
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                )}
                            {values.rsvp && (
                                <div>
                                    <h4 className="form__header">
                                        {data.members &&
                                        data.members.length === 1
                                            ? 'Do you '
                                            : 'Does anyone '}
                                        have any dietary requirements?
                                    </h4>
                                    <div
                                        className={classNames(
                                            'form__group form__group--radio',
                                            {
                                                'form__group--error':
                                                    errors.diet && touched.diet,
                                            },
                                        )}
                                    >
                                        <FormField
                                            labelName="Yes"
                                            type="radio"
                                            id="diet-yes"
                                            value="true"
                                            name="diet"
                                            defaultChecked={
                                                values.diet === 'true'
                                            }
                                            onChange={handleChange}
                                        />
                                        <FormField
                                            labelName="No"
                                            type="radio"
                                            id="diet-no"
                                            value="false"
                                            name="diet"
                                            defaultChecked={
                                                values.diet === 'false'
                                            }
                                            onChange={handleChange}
                                        />
                                        {errors.diet &&
                                            touched.diet && (
                                                <div className="form__error-message">
                                                    {errors.diet}
                                                </div>
                                            )}
                                        {data.members &&
                                            data.members.length <= 1 &&
                                            values.diet === 'true' && (
                                                <FormFieldText
                                                    labelName="Diet requirement"
                                                    type="text"
                                                    id="dietRequirement.0"
                                                    onChange={handleChange}
                                                    value={
                                                        values
                                                            .dietRequirement[0]
                                                    }
                                                    name="dietRequirement.0"
                                                    errors={
                                                        errors.dietRequirement
                                                    }
                                                    touched={
                                                        touched.dietRequirement
                                                    }
                                                />
                                            )}
                                    </div>
                                </div>
                            )}
                            {data.members &&
                                data.members.length > 1 &&
                                values.diet === 'true' && (
                                    <div>
                                        <h4 className="form__header">
                                            Who has dietry requirements
                                        </h4>
                                        <div
                                            className={classNames(
                                                'form__group-stacked',
                                                {
                                                    'form__group--error':
                                                        errors.diet &&
                                                        touched.diet,
                                                },
                                            )}
                                        >
                                            {data.members.map((item, index) => {
                                                const value = item.guestName
                                                    .replace(' ', '-')
                                                    .toLowerCase();
                                                return (
                                                    <div
                                                        className="form__group-stacked-item"
                                                        key={`${value}`}
                                                    >
                                                        <FormField
                                                            id={`dietMulti.${value}`}
                                                            labelName={
                                                                item.guestName
                                                            }
                                                            type="checkbox"
                                                            value={value}
                                                            name={`dietMulti.${index}`}
                                                            defaultChecked={
                                                                values
                                                                    .dietMulti[
                                                                    index
                                                                ]
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        {values.dietMulti &&
                                                            values.dietMulti[
                                                                index
                                                            ] && (
                                                                <FormFieldText
                                                                    labelName="Requirement:"
                                                                    key={`dietRequirement.${value}`}
                                                                    type="text"
                                                                    id={`dietRequirement.${value}`}
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                    value={
                                                                        values
                                                                            .dietRequirement[
                                                                            index
                                                                        ]
                                                                    }
                                                                    name={`dietRequirement.${index}`}
                                                                    errors={
                                                                        errors.dietRequirement
                                                                    }
                                                                    touched={
                                                                        touched.dietRequirement
                                                                    }
                                                                />
                                                            )}
                                                    </div>
                                                );
                                            })}

                                            {errors.dietMulti &&
                                                touched.dietMulti && (
                                                    <div className="form__error-message">
                                                        {errors.dietMulti}
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                )}
                            <h4 className="form__header">
                                Please provide contact details if we need to get
                                in touch.
                            </h4>
                            <div className="form__group">
                                <div tabIndex="-1" className="">
                                    <FormFieldText
                                        labelName="Address"
                                        type="text"
                                        id="address"
                                        onChange={handleChange}
                                        value={values.address}
                                        name="address"
                                        errors={errors.address}
                                    />
                                    {errors.address &&
                                        touched.address && (
                                            <div className="form__error-message">
                                                {errors.address}
                                            </div>
                                        )}
                                </div>
                                <div tabIndex="-1" className="">
                                    <FormFieldText
                                        labelName="Contact number"
                                        type="tel"
                                        id="phone"
                                        onChange={handleChange}
                                        value={values.phone}
                                        name="phone"
                                        errors={errors.phone}
                                    />
                                    {errors.phone &&
                                        touched.phone && (
                                            <div className="form__error-message">
                                                {errors.phone}
                                            </div>
                                        )}
                                </div>
                                <div tabIndex="-1" className="">
                                    <FormFieldText
                                        labelName="Email"
                                        type="text"
                                        id="email"
                                        onChange={handleChange}
                                        value={values.email}
                                        name="email"
                                        errors={errors.email}
                                    />
                                    {errors.email &&
                                        touched.email && (
                                            <div className="form__error-message">
                                                {errors.email}
                                            </div>
                                        )}
                                </div>
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Section>
        );
    }
}

export default FormContainer;

FormContainer.propTpes = {
    rsvp: PropTypes.string,
    weddingMulti: PropTypes.array.isRequired,
    diet: PropTypes.string,
    dietMulti: PropTypes.isRequired,
    dietRequirement: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};
