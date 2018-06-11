// @flow

import React, { Component } from 'react';
import classNames from 'classnames';
import { Form, type FormikProps } from 'formik';

import Section from '../Section/Section';
import FormField from './FormField/FormField';
import FormFieldText from './FormFieldText/FormFieldText';

import './form.css';

export type Values = {
    weddingRsvp: ?string,
    weddingMulti: Array<boolean>,
    bbqRsvp: ?string,
    bbqMulti: Array<string>,
    diet: ?string,
    dietMulti: Array<string>,
    dietRequirement: string,
    address: string,
    phone: string,
    email: string,
    status: ?'success',
};

type FormProps = FormikProps<Values> & {
    data: Object,
};

type FormState = {
    show: boolean,
};

class FormContainer extends Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props);
        this.state = {
            show: true,
        };
    }

    componentWillReceiveProps(nextProps: FormProps) {
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
            <Section>
                {this.state.show && (
                    <div>
                        <h2>RSVP</h2>
                        <p>
                            Please let us know if you will be able to celebrate
                            with us, and what requirements you may have.
                        </p>
                        <p>
                            If you would like to change some details once the
                            form has been submitted, please don`t hesitate to
                            get in touch! The email address you received your
                            invite from would be the best way for us to keep
                            everyone`s details in check.
                        </p>
                        <Form>
                            <div>
                                <h4 className="form__header">
                                    Will you be able to make it to the big day?
                                </h4>
                                <div className="form__group form__group--radio">
                                    <FormField
                                        labelName="Yes"
                                        type="radio"
                                        id="rsvp-yes"
                                        value="true"
                                        defaultChecked={
                                            values.weddingRsvp === 'true'
                                        }
                                        name="weddingRsvp"
                                        onChange={handleChange}
                                    />
                                    <FormField
                                        labelName="No"
                                        type="radio"
                                        id="rsvp-no"
                                        value="false"
                                        name="weddingRsvp"
                                        defaultChecked={
                                            values.weddingRsvp === 'false'
                                        }
                                        onChange={handleChange}
                                    />
                                    {errors.weddingRsvp &&
                                        touched.weddingRsvp && (
                                            <div className="form__error-message">
                                                {errors.weddingRsvp}
                                            </div>
                                        )}
                                </div>
                            </div>
                            {values.weddingRsvp === 'true' &&
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

                            <h4 className="form__header">
                                Will you be able to make it to the next day
                                event?
                            </h4>
                            <div
                                className={classNames(
                                    'form__group form__group--radio',
                                    {
                                        'form__group--error':
                                            errors.bbqRsvp && touched.bbqRsvp,
                                    },
                                )}
                            >
                                <FormField
                                    labelName="Yes"
                                    type="radio"
                                    id="bbqRsvp-yes"
                                    value="true"
                                    name="bbqRsvp"
                                    defaultChecked={values.bbqRsvp === 'true'}
                                    onChange={handleChange}
                                />
                                <FormField
                                    labelName="No"
                                    type="radio"
                                    id="bbqRsvp-no"
                                    value="false"
                                    name="bbqRsvp"
                                    defaultChecked={values.bbqRsvp === 'false'}
                                    onChange={handleChange}
                                />
                                {errors.bbqRsvp &&
                                    touched.bbqRsvp && (
                                        <div className="form__error-message">
                                            {errors.bbqRsvp}
                                        </div>
                                    )}
                            </div>

                            {data.members &&
                                data.members.length > 1 &&
                                values.bbqRsvp === 'true' && (
                                    <div>
                                        <h4 className="form__header">
                                            Who will be able to make it?
                                        </h4>
                                        <div
                                            className={classNames(
                                                'form__group form__group--checkbox',
                                                {
                                                    'form__group--error':
                                                        errors.bbqMulti &&
                                                        touched.bbqMulti,
                                                },
                                            )}
                                        >
                                            {data.members.map((item, index) => {
                                                const value = item.guestName
                                                    .replace(' ', '-')
                                                    .toLowerCase();
                                                return (
                                                    <FormField
                                                        id={`bbqMulti.${value}`}
                                                        key={`${value}`}
                                                        labelName={
                                                            item.guestName
                                                        }
                                                        type="checkbox"
                                                        value={value}
                                                        name={`bbqMulti.${index}`}
                                                        defaultChecked={
                                                            values.bbqMulti[
                                                                index
                                                            ]
                                                        }
                                                        onChange={handleChange}
                                                    />
                                                );
                                            })}
                                            {errors.bbqMulti &&
                                                touched.bbqMulti && (
                                                    <div className="form__error-message">
                                                        {errors.bbqMulti}
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                )}

                            {(values.weddingRsvp || values.bbqRsvp) && (
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
                                                    <div key={`${value}`}>
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
                                                                    labelName="Diet requirement"
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
                                                            {errors.dietRequirement &&
                                                                    touched.dietRequirement && (
                                                                        <div className="form__error-message">
                                                                            {errors.dietRequirement}
                                                                        </div>
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
                            <div className="form__group form__group-text">
                                <div tabIndex="-1" className="form__group-item">
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
                                <div tabIndex="-1" className="form__group-item">
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
                                <div tabIndex="-1" className="form__group-item">
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
