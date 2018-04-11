import React from 'react';
import Section from '../Section/Section';
import FormField from './FormField/FormField';
import FormFieldText from './FormFieldText/FormFieldText';
import classNames from 'classnames';
import './form.css';

const Form = props => {
    const { values, handleSubmit, handleChange, errors, touched, data } = props;
    return (
        <Section>
            <p>Please let us know if you are able to make it by filling out the below form</p>
            <form onSubmit={handleSubmit}>
                <h4 className="form__header">Will you be able to make it to the big day?</h4>
                <div className="form__group form__group--radio">
                    <FormField
                        labelName="Yes"
                        type="radio"
                        id="rsvp-yes"
                        value="yes"
                        checked={values['weddingRsvp'] === 'yes'}
                        name="weddingRsvp"
                        onChange={handleChange}
                    />
                    <FormField
                        labelName="No"
                        type="radio"
                        id="rsvp-no"
                        value="no"
                        name="weddingRsvp"
                        checked={values['weddingRsvp'] === 'no'}
                        onChange={handleChange}
                    />
                </div>
                {errors.weddingRsvp &&
                    touched.weddingRsvp && <div className="form__error-message">{errors.weddingRsvp}</div>}

                {data.members &&
                    data.members.length > 1 &&
                    values['weddingRsvp'] === 'yes' && (
                        <div>
                            <h4 className="form__header">Who will be able to make it?</h4>
                            <div
                                className={classNames('form__group form__group--checkbox', {
                                    'form__group--error': errors.weddingRsvpMultiGuest && touched.weddingRsvpMultiGuest,
                                })}
                            >
                                {data.members.map((item, index) => {
                                    const value = item.guestName.replace(' ', '-').toLowerCase();
                                    return (
                                        <FormField
                                            id={`weddingRsvpMultiGuest.${value}`}
                                            key={`${value}.${index}`}
                                            labelName={item.guestName}
                                            type="checkbox"
                                            value={value}
                                            name={`weddingRsvpMultiGuest.${index}`}
                                            defaultChecked={
                                                values['weddingRsvpMultiGuest'] &&
                                                values['weddingRsvpMultiGuest'][index]
                                            }
                                            onChange={handleChange}
                                        />
                                    );
                                })}

                                {errors.weddingRsvpMultiGuest &&
                                    touched.weddingRsvpMultiGuest && (
                                        <div className="form__error-message">{errors.weddingRsvpMultiGuest}</div>
                                    )}
                            </div>
                        </div>
                    )}

                <h4 className="form__header">Will you be able to make it to the next day event?</h4>
                <div
                    className={classNames('form__group form__group--radio', {
                        'form__group--error': errors.bbqRsvp && touched.bbqRsvp,
                    })}
                >
                    <FormField
                        labelName="Yes"
                        type="radio"
                        id="bbqRsvp-yes"
                        value="yes"
                        name="bbqRsvp"
                        checked={values['bbqRsvp'] === 'yes'}
                        onChange={handleChange}
                    />
                    <FormField
                        labelName="No"
                        type="radio"
                        id="bbqRsvp-no"
                        value="no"
                        name="bbqRsvp"
                        checked={values['bbqRsvp'] === 'no'}
                        onChange={handleChange}
                    />
                    {errors.bbqRsvp && touched.bbqRsvp && <div className="form__error-message">{errors.bbqRsvp}</div>}
                </div>

                {data.members &&
                    data.members.length > 1 &&
                    values['bbqRsvp'] === 'yes' && (
                        <div>
                            <h4 className="form__header">Who will be able to make it?</h4>
                            <div
                                className={classNames('form__group form__group--checkbox', {
                                    'form__group--error': errors.bbqRsvpMultiGuest && touched.bbqRsvpMultiGuest,
                                })}
                            >
                                {data.members.map((item, index) => {
                                    const value = item.guestName.replace(' ', '-').toLowerCase();
                                    return (
                                        <FormField
                                            id={`bbqRsvpMultiGuest.${value}`}
                                            key={`${value}.${index}`}
                                            labelName={item.guestName}
                                            type="checkbox"
                                            value={value}
                                            name={`bbqRsvpMultiGuest.${index}`}
                                            defaultChecked={
                                                values['bbqRsvpMultiGuest'] && values['bbqRsvpMultiGuest'][index]
                                            }
                                            onChange={handleChange}
                                        />
                                    );
                                })}
                                {errors.bbqRsvpMultiGuest &&
                                    touched.bbqRsvpMultiGuest && (
                                        <div className="form__error-message">{errors.bbqRsvpMultiGuest}</div>
                                    )}
                            </div>
                        </div>
                    )}

                {(values['weddingRsvp'] === 'yes' || values['bbqRsvp'] === 'yes') && (
                    <div>
                        <h4 className="form__header">Does anyone have any dietry requirements</h4>
                        <div
                            className={classNames('form__group form__group--radio', {
                                'form__group--error': errors.diet && touched.diet,
                            })}
                        >
                            <FormField
                                labelName="Yes"
                                type="radio"
                                id="diet-yes"
                                value="yes"
                                name="diet"
                                checked={values['diet'] === 'yes'}
                                onChange={handleChange}
                            />
                            <FormField
                                labelName="No"
                                type="radio"
                                id="diet-no"
                                value="no"
                                name="diet"
                                checked={values['diet'] === 'no'}
                                onChange={handleChange}
                            />
                            {errors.diet && touched.diet && <div className="form__error-message">{errors.diet}</div>}
                        </div>
                    </div>
                )}
                {data.members &&
                    data.members.length > 1 &&
                    (values['weddingRsvp'] === 'yes' || values['bbqRsvp'] === 'yes') &&
                    values['diet'] === 'yes' && (
                        <div>
                            <h4 className="form__header">Who has dietry requirements</h4>
                            <div
                                className={classNames('form__group-stacked', {
                                    'form__group--error': errors.diet && touched.diet,
                                })}
                            >
                                <div className="form__group-stacked-item">
                                    <FormField
                                        labelName="John Doe"
                                        type="checkbox"
                                        id="dietMultiguest-1"
                                        value="john-doe"
                                        name="dietMulti.0"
                                        checked={values['dietMulti'] && values['dietMulti'][0]}
                                        onChange={handleChange}
                                    />
                                    {values['dietMulti'] &&
                                        values['dietMulti'][0] && (
                                            <FormFieldText
                                                placeholder="Please enter requirement"
                                                type="text"
                                                id="johnDoeDiet"
                                                onChange={handleChange}
                                                value={values.johnDoeDiet}
                                                name="johnDoeDiet"
                                                errors={errors.johnDoeDiet}
                                                touched={touched.johnDoeDiet}
                                            />
                                        )}
                                </div>
                                <div className="form__group-stacked-item">
                                    <FormField
                                        labelName="Jane Doe"
                                        type="checkbox"
                                        id="dietMultiguest-2"
                                        value="jane-doe"
                                        name="dietMulti.1"
                                        checked={values['dietMulti'] && values['dietMulti'][1]}
                                        onChange={handleChange}
                                    />
                                    {values['dietMulti'] &&
                                        values['dietMulti'][1] && (
                                            <FormFieldText
                                                placeholder="Please enter requirement"
                                                type="text"
                                                id="janeDoeDiet"
                                                onChange={handleChange}
                                                value={values.janeDoeDiet}
                                                name="janeDoeDiet"
                                            />
                                        )}
                                </div>
                                <div className="form__group-stacked-item">
                                    <FormField
                                        labelName="Jack Doe"
                                        type="checkbox"
                                        id="dietMultiguest-3"
                                        value="jack-doe"
                                        name="dietMulti.2"
                                        checked={values['dietMulti'] && values['dietMulti'][2]}
                                        onChange={handleChange}
                                    />
                                    {values['dietMulti'] &&
                                        values['dietMulti'][2] && (
                                            <FormFieldText
                                                placeholder="Please enter requirement"
                                                type="text"
                                                id="jackDoeDiet"
                                                onChange={handleChange}
                                                value={values.jackDoeDiet}
                                                name="jackDoeDiet"
                                            />
                                        )}
                                </div>
                                <div className="form__group-stacked-item">
                                    <FormField
                                        labelName="Janie Doe"
                                        type="checkbox"
                                        id="dietMultiguest-4"
                                        value="janie-doe"
                                        name="dietMulti.3"
                                        checked={values['dietMulti'] && values['dietMulti'][3]}
                                        onChange={handleChange}
                                    />
                                    {values['dietMulti'] &&
                                        values['dietMulti'][3] && (
                                            <FormFieldText
                                                placeholder="Please enter requirement"
                                                type="text"
                                                id="janieDoeDiet"
                                                onChange={handleChange}
                                                value={values.janieDoeDiet}
                                                name="janieDoeDiet"
                                            />
                                        )}
                                    {errors.dietMulti &&
                                        touched.dietMulti && (
                                            <div className="form__error-message">{errors.dietMulti}</div>
                                        )}
                                </div>
                            </div>
                        </div>
                    )}
                {data.members &&
                    data.members.length > 1 && (
                        <div
                            className={classNames('form__group form__group--checkbox', {
                                'form__group--error': errors.nominatedLeader && touched.nominatedLeader,
                            })}
                        >
                            <h4 className="form__header">Please choose a group leader we can contact if we need to</h4>
                            <FormField
                                labelName="John Doe"
                                type="radio"
                                id="leader-guest-1"
                                value="leader-john"
                                name="nominatedLeader"
                                checked={values['nominatedLeader'] === 'leader-john'}
                                onChange={handleChange}
                            />
                            <FormField
                                labelName="Jane Doe"
                                type="radio"
                                id="leader-guest-2"
                                value="leader-jane"
                                name="nominatedLeader"
                                checked={values['nominatedLeader'] === 'leader-jane'}
                                onChange={handleChange}
                            />
                            <FormField
                                labelName="Jack Doe"
                                type="radio"
                                id="leader-guest-3"
                                value="leader-jack"
                                name="nominatedLeader"
                                checked={values['nominatedLeader'] === 'leader-jack'}
                                onChange={handleChange}
                            />
                            <FormField
                                labelName="Janie Doe"
                                type="radio"
                                id="leader-guest-4"
                                value="leader-janie"
                                name="nominatedLeader"
                                checked={values['nominatedLeader'] === 'leader-janie'}
                                onChange={handleChange}
                            />
                            {errors.nominatedLeader &&
                                touched.nominatedLeader && (
                                    <div className="form__error-message">{errors.nominatedLeader}</div>
                                )}
                        </div>
                    )}
                <h4 className="form__header">Please provide contact details for that person</h4>
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
                            touched.address && <div className="form__error-message">{errors.address}</div>}
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
                        {errors.phone && touched.phone && <div className="form__error-message">{errors.phone}</div>}
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
                        {errors.email && touched.email && <div className="form__error-message">{errors.email}</div>}
                    </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </Section>
    );
};

export default Form;
