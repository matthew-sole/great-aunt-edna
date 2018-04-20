import React from 'react';
import classNames from 'classnames';
import { Form } from 'formik';

import Section from '../Section/Section';
import FormField from './FormField/FormField';
import FormFieldText from './FormFieldText/FormFieldText';

import './form.css';

const FormContainer = props => {
    const { values, handleChange, errors, touched, data } = props;

    return (
        <Section>
            <p>
                Please let us know if you are able to make it by filling out the
                below form
            </p>
            <Form>
                <h4 className="form__header">
                    Will you be able to make it to the big day?
                </h4>
                {data.members && data.members.length === 1 ? (
                    <div className="form__group form__group--radio">
                        <FormField
                            labelName="Yes"
                            type="radio"
                            id="rsvp-yes"
                            value
                            defaultChecked={values.weddingRsvp}
                            name="weddingRsvp.0"
                            onChange={handleChange}
                        />
                        <FormField
                            labelName="No"
                            type="radio"
                            id="rsvp-no"
                            value={false}
                            name="weddingRsvp.0"
                            defaultChecked={values.weddingRsvp}
                            onChange={handleChange}
                        />
                        {errors.weddingRsvp &&
                            touched.weddingRsvp && (
                                <div className="form__error-message">
                                    {errors.weddingRsvp}
                                </div>
                            )}
                    </div>
                ) : (
                    <div>
                        <h4 className="form__header">
                            Who will be able to make it?
                        </h4>
                        <div
                            className={classNames(
                                'form__group form__group--checkbox',
                                {
                                    'form__group--error':
                                        errors.weddingRsvp &&
                                        touched.weddingRsvp,
                                },
                            )}
                        >
                            {data.members.map((item, index) => {
                                const value = item.guestName
                                    .replace(' ', '-')
                                    .toLowerCase();
                                return (
                                    <FormField
                                        id={`weddingRsvp.${value}`}
                                        key={`${value}`}
                                        labelName={item.guestName}
                                        type="checkbox"
                                        value={value}
                                        name={`weddingRsvp.${index}`}
                                        defaultChecked={values.weddingRsvp}
                                        onChange={handleChange}
                                    />
                                );
                            })}

                            {errors.weddingRsvp &&
                                touched.weddingRsvp && (
                                    <div className="form__error-message">
                                        {errors.weddingRsvp}
                                    </div>
                                )}
                        </div>
                    </div>
                )}

                <h4 className="form__header">
                    Will you be able to make it to the next day event?
                </h4>
                <div
                    className={classNames('form__group form__group--radio', {
                        'form__group--error': errors.bbqRsvp && touched.bbqRsvp,
                    })}
                >
                    <FormField
                        labelName="Yes"
                        type="radio"
                        id="bbqRsvp-yes"
                        value
                        name="bbqRsvp.0"
                        defaultChecked={values.bbqRsvp}
                        onChange={handleChange}
                    />
                    <FormField
                        labelName="No"
                        type="radio"
                        id="bbqRsvp-no"
                        value={false}
                        name="bbqRsvp.0"
                        defaultChecked={values.bbqRsvp}
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
                    values.bbqRsvp && (
                        <div>
                            <h4 className="form__header">
                                Who will be able to make it?
                            </h4>
                            <div
                                className={classNames(
                                    'form__group form__group--checkbox',
                                    {
                                        'form__group--error':
                                            errors.bbqRsvp && touched.bbqRsvp,
                                    },
                                )}
                            >
                                {data.members.map((item, index) => {
                                    const value = item.guestName
                                        .replace(' ', '-')
                                        .toLowerCase();
                                    return (
                                        <FormField
                                            id={`bbqRsvp.${value}`}
                                            key={`${value}`}
                                            labelName={item.guestName}
                                            type="checkbox"
                                            value={value}
                                            name={`bbqRsvp.${index}`}
                                            defaultChecked={values.bbqRsvp}
                                            onChange={handleChange}
                                        />
                                    );
                                })}
                                {errors.bbqRsvp &&
                                    touched.bbqRsvp && (
                                        <div className="form__error-message">
                                            {errors.bbqRsvp}
                                        </div>
                                    )}
                            </div>
                        </div>
                    )}

                {(values.weddingRsvp || values.bbqRsvp) && (
                    <div>
                        <h4 className="form__header">
                            Does anyone have any dietry requirements
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
                                value
                                name="diet"
                                defaultChecked={values.diet}
                                onChange={handleChange}
                            />
                            <FormField
                                labelName="No"
                                type="radio"
                                id="diet-no"
                                value={false}
                                name="diet"
                                defaultChecked={values.diet}
                                onChange={handleChange}
                            />
                            {errors.diet &&
                                touched.diet && (
                                    <div className="form__error-message">
                                        {errors.diet}
                                    </div>
                                )}
                        </div>
                    </div>
                )}
                {data.members &&
                    data.members.length > 1 &&
                    (values.weddingRsvp || values.bbqRsvp) &&
                    values.diet && (
                        <div>
                            <h4 className="form__header">
                                Who has dietry requirements
                            </h4>
                            <div
                                className={classNames('form__group-stacked', {
                                    'form__group--error':
                                        errors.diet && touched.diet,
                                })}
                            >
                                {data.members.map((item, index) => {
                                    const value = item.guestName
                                        .replace(' ', '-')
                                        .toLowerCase();
                                    return (
                                        <div key={`${value}`}>
                                            <FormField
                                                id={`dietMulti.${value}`}
                                                labelName={item.guestName}
                                                type="checkbox"
                                                value={value}
                                                name={`dietMulti.${index}`}
                                                defaultChecked={
                                                    values.dietMulti
                                                }
                                                onChange={handleChange}
                                            />
                                            {values.dietMulti &&
                                                values.dietMulti[index] && (
                                                    <FormFieldText
                                                        placeholder="Please enter requirement"
                                                        key={`dietRequirement.${value}`}
                                                        type="text"
                                                        id={`dietRequirement.${value}`}
                                                        onChange={handleChange}
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
                {data.members &&
                    data.members.length > 1 && (
                        <div
                            className={classNames(
                                'form__group form__group--checkbox',
                                {
                                    'form__group--error':
                                        errors.nominatedLeader &&
                                        touched.nominatedLeader,
                                },
                            )}
                        >
                            <h4 className="form__header">
                                Please choose a group leader we can contact if
                                we need to
                            </h4>
                            {data.members.map((item, index) => {
                                const value = item.guestName
                                    .replace(' ', '-')
                                    .toLowerCase();
                                return (
                                    <FormField
                                        id={`nominatedLeader.${value}`}
                                        key={`${value}`}
                                        labelName={item.guestName}
                                        type="radio"
                                        value={value}
                                        name="nominatedLeader"
                                        defaultChecked={
                                            values.nominatedLeader === value
                                        }
                                        onChange={handleChange}
                                    />
                                );
                            })}
                            {errors.nominatedLeader &&
                                touched.nominatedLeader && (
                                    <div className="form__error-message">
                                        {errors.nominatedLeader}
                                    </div>
                                )}
                        </div>
                    )}
                <h4 className="form__header">
                    Please provide contact details for that person
                </h4>
                <div className="form__group form__group-text">
                    <div className="form__group-item">
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
                    <div className="form__group-item">
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
                    <div className="form__group-item">
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
        </Section>
    );
};

export default FormContainer;
