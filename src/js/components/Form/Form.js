import React from 'react';
import FormField from '../FormField/FormField';
import './form.css';

const Form = (props) => {
    const {
        values,
        handleSubmit,
        handleChange,
        errors
    } = props;
    return(
        <div>
            <h2>RSVP</h2>
            <p>Please let us know if you are able to make it by filling out the below form</p>
            <form onSubmit={handleSubmit}>
                {/* TODO - check if that way of doing the classes are right */}
                {/* TODO - can this be refactored */}
                <div className={"form__group" + (errors.weddingRsvp ? ' form__group--error' : '')}>
                    <p className="form__content">Will you be able to make it to the big day?</p>
                    <FormField 
                        labelName="Yes" 
                        type="radio" 
                        id="rsvp-yes" 
                        value="yes"
                        checked={values["weddingRsvp"] === "yes"}
                        name="weddingRsvp"
                        onChange={handleChange}
                    />
                    <FormField 
                        labelName="No" 
                        type="radio" 
                        id="rsvp-no" 
                        value="no" 
                        name="weddingRsvp"
                        checked={values["weddingRsvp"] === "no"}
                        onChange={handleChange}
                    />
                    {errors.weddingRsvp && (
                        <div className="input-feedback">{errors.weddingRsvp}</div>
                    )}
                </div>

                { values["weddingRsvp"] === "yes" &&
                    <div className={"form__group" + (errors.weddingRsvpMultiGuest ? ' form__group--error' : '')}>
                        <p className="form__content">Who will be able to make it? (2 people)</p>
                        <FormField 
                            labelName="John Doe" 
                            type="checkbox" 
                            id="wedding-guest-1" 
                            value="john-doe"
                            name="weddingRsvpMultiGuest.0"
                            checked={values["weddingRsvpMultiGuest"] && values["weddingRsvpMultiGuest"][0]}
                            onChange={handleChange}
                        />
                        <FormField 
                            labelName="Jane Doe" 
                            type="checkbox" 
                            id="wedding-guest-2" 
                            value="jane-doe" 
                            name="weddingRsvpMultiGuest.1"
                            checked={values["weddingRsvpMultiGuest"] && values["weddingRsvpMultiGuest"][1]}
                            onChange={handleChange}
                        />
                        <FormField 
                            labelName="Jack Doe" 
                            type="checkbox" 
                            id="wedding-guest-3" 
                            value="jack-doe"
                            name="weddingRsvpMultiGuest.2"
                            checked={values["weddingRsvpMultiGuest"] && values["weddingRsvpMultiGuest"][2]}
                            onChange={handleChange}
                        />
                        <FormField 
                            labelName="Janie Doe" 
                            type="checkbox" 
                            id="wedding-guest-4" 
                            value="janie-doe" 
                            name="weddingRsvpMultiGuest.3"
                            checked={values["weddingRsvpMultiGuest"] && values["weddingRsvpMultiGuest"][3]}
                            onChange={handleChange}
                        />
                        {errors.weddingRsvpMultiGuest &&(
                            <div className="input-feedback">{errors.weddingRsvpMultiGuest}</div>
                        )}
                    </div>
                }

                <div className="form__group">
                    <p className="form__content">Will you be able to make it to the next day event?</p>
                    <FormField 
                        labelName="Yes" 
                        type="radio" 
                        id="bbqRsvp-yes" 
                        value="yes" 
                        name="bbqRsvp"
                        checked={values["bbqRsvp"] === "yes"}
                        onChange={handleChange}
                    />
                    <FormField 
                        labelName="No" 
                        type="radio" 
                        id="bbqRsvp-no" 
                        value="no" 
                        name="bbqRsvp"
                        checked={values["bbqRsvp"] === "no"}
                        onChange={handleChange}
                    />
                    {errors.bbqRsvp && (
                        <div className="input-feedback">{errors.bbqRsvp}</div>
                    )}
                </div>

                { values["bbqRsvp"] === "yes" &&
                    <div className="form__group">
                        <p className="form__content">Who will be able to make it? (2+ people)</p>
                        <FormField 
                            labelName="John Doe" 
                            type="checkbox" 
                            id="bbq-guest-1" 
                            value="john-doe"
                            name="bbqRsvpMultiGuest.0"
                            checked={values["bbqRsvpMultiGuest"] && values["bbqRsvpMultiGuest"][0]}
                            onChange={handleChange}
                        />
                        <FormField 
                            labelName="Jane Doe" 
                            type="checkbox" 
                            id="bbq-guest-2" 
                            value="jane-doe" 
                            name="bbqRsvpMultiGuest.1"
                            checked={values["bbqRsvpMultiGuest"] && values["bbqRsvpMultiGuest"][1]}
                            onChange={handleChange}
                        />
                        <FormField 
                            labelName="Jack Doe" 
                            type="checkbox" 
                            id="bbq-guest-3" 
                            value="jack-doe"
                            name="bbqRsvpMultiGuest.2"
                            checked={values["bbqRsvpMultiGuest"] && values["bbqRsvpMultiGuest"][2]}
                            onChange={handleChange}
                        />
                        <FormField 
                            labelName="Janie Doe" 
                            type="checkbox" 
                            id="bbq-guest-4" 
                            value="janie-doe" 
                            name="bbqRsvpMultiGuest.3"
                            checked={values["bbqRsvpMultiGuest"] && values["bbqRsvpMultiGuest"][3]}
                            onChange={handleChange}
                        />
                        {errors.bbqRsvpMultiGuest && (
                            <div className="input-feedback">{errors.bbqRsvpMultiGuest}</div>
                        )}
                    </div>
                }
                { (values["weddingRsvp"] === "yes" || values["bbqRsvp"] === "yes") &&
                    <div className="form__group">
                        <p className="form__content">Does anyone have any dietry requirements</p>
                        <FormField 
                            labelName="Yes" 
                            type="radio" 
                            id="diet-yes" 
                            value="yes" 
                            name="diet"
                            checked={values["diet"] === "yes"}
                            onChange={handleChange}
                        />
                        <FormField 
                            labelName="No" 
                            type="radio" 
                            id="diet-no" 
                            value="no" 
                            name="diet"
                            checked={values["diet"] === "no"}
                            onChange={handleChange}
                        />
                        {errors.diet && (
                            <div className="input-feedback">{errors.diet}</div>
                        )}
                    </div>
                }
                { (values["weddingRsvp"] === "yes" || values["bbqRsvp"] === "yes") && (values["diet"] === "yes") &&
                    <div className="form__group form__group--stacked">
                        <p className="form__content">Who has dietry requirements</p>
                        <FormField 
                            labelName="John Doe" 
                            type="checkbox" 
                            id="dietMultiguest-1" 
                            value="john-doe"
                            name="dietMulti.0"
                            checked={values["dietMulti"] && values["dietMulti"][0]}
                            onChange={handleChange}
                        />
                        { values["dietMulti"] && values["dietMulti"][0] &&
                            <FormField 
                                labelName="Please enter requirement" 
                                type="text" 
                                id="johnDoeDiet" 
                                onChange={handleChange}
                                value={values.johnDoeDiet} 
                                name="johnDoeDiet"
                            />
                        }
                        {errors.johnDoeDiet && (
                            <div className="input-feedback">{errors.johnDoeDiet}</div>
                        )}
                        <FormField 
                            labelName="Jane Doe" 
                            type="checkbox" 
                            id="dietMultiguest-2" 
                            value="jane-doe" 
                            name="dietMulti.1"
                            checked={values["dietMulti"] && values["dietMulti"][1]}
                            onChange={handleChange}
                        />
                        { values["dietMulti"] && values["dietMulti"][1] &&
                            <FormField 
                                labelName="Please enter requirement" 
                                type="text" 
                                id="janeDoeDiet" 
                                onChange={handleChange}
                                value={values.janeDoeDiet} 
                                name="janeDoeDiet"
                            />
                        }
                        <FormField 
                            labelName="Jack Doe" 
                            type="checkbox" 
                            id="dietMultiguest-3" 
                            value="jack-doe"
                            name="dietMulti.2"
                            checked={values["dietMulti"] && values["dietMulti"][2]}
                            onChange={handleChange}
                        />
                        { values["dietMulti"] && values["dietMulti"][2] &&
                            <FormField 
                                labelName="Please enter requirement" 
                                type="text" 
                                id="jackDoeDiet" 
                                onChange={handleChange}
                                value={values.jackDoeDiet} 
                                name="jackDoeDiet"
                            />
                        }
                        <FormField 
                            labelName="Janie Doe" 
                            type="checkbox" 
                            id="dietMultiguest-4" 
                            value="janie-doe" 
                            name="dietMulti.3"
                            checked={values["dietMulti"] && values["dietMulti"][3]}
                            onChange={handleChange}
                        />
                        { values["dietMulti"] && values["dietMulti"][3] &&
                            <FormField 
                                labelName="Please enter requirement" 
                                type="text" 
                                id="janieDoeDiet" 
                                onChange={handleChange}
                                value={values.janieDoeDiet} 
                                name="janieDoeDiet"
                            />
                        }
                        {errors.dietMulti && (
                            <div className="input-feedback">{errors.dietMulti}</div>
                        )}
                    </div>
                }

                <div className="form__group">
                    <p className="form__content">Please choose a group leader we can contact if we need to</p>
                    <FormField 
                        labelName="John Doe" 
                        type="radio" 
                        id="leader-guest-1" 
                        value="leader-john"
                        name="nominatedLeader"
                        checked={values["nominatedLeader"] === "leader-john"}
                        onChange={handleChange}
                    />
                    <FormField 
                        labelName="Jane Doe" 
                        type="radio" 
                        id="leader-guest-2" 
                        value="leader-jane" 
                        name="nominatedLeader"
                        checked={values["nominatedLeader"] === "leader-jane"}
                        onChange={handleChange}
                    />
                    <FormField 
                        labelName="Jack Doe" 
                        type="radio" 
                        id="leader-guest-3" 
                        value="leader-jack"
                        name="nominatedLeader"
                        checked={values["nominatedLeader"] === "leader-jack"}
                        onChange={handleChange}
                    />
                    <FormField 
                        labelName="Janie Doe" 
                        type="radio" 
                        id="leader-guest-4" 
                        value="leader-janie" 
                        name="nominatedLeader"
                        checked={values["nominatedLeader"] === "leader-janie"}
                        onChange={handleChange}
                    />
                    {errors.nominatedLeader && (
                            <div className="input-feedback">{errors.nominatedLeader}</div>
                        )}
                </div>
                <div className="form__group">
                    <p className="form__content">Please provide contact details for that person</p>
                    <FormField 
                        labelName="Address" 
                        type="text" 
                        id="address" 
                        onChange={handleChange}
                        value={values.address} 
                        name="address"
                        errors={errors.address}
                    />
                    <FormField 
                        labelName="Contact number" 
                        type="text" 
                        id="phone" 
                        onChange={handleChange}
                        value={values.phone} 
                        name="phone"
                        errors={errors.phone}
                    />
                    <FormField 
                        labelName="Email" 
                        type="text" 
                        id="email" 
                        onChange={handleChange}
                        value={values.email} 
                        name="email"
                        errors={errors.email}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;