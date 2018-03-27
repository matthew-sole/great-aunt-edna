import React from 'react';
import FormField from '../FormField/FormField';


const Form = (props) => {
    const {
        values,
        handleSubmit,
        handleChange
    } = props;
    return(
        <div>
            <h2>RSVP</h2>
            <p>Please let us know if you are able to make it by filling out the below form</p>
            <form onSubmit={handleSubmit}>
                <div className="form__group">
                    <p className="form__content">Will you be able to make it to the big day?</p>
                    <FormField 
                        labelName="Yes" 
                        type="radio" 
                        id="rsvp-yes" 
                        value="yes"
                        checked={values["wedding-rsvp"] === "yes"}
                        name="wedding-rsvp"
                        onChange={handleChange}
                    />
                    <FormField 
                        labelName="No" 
                        type="radio" 
                        id="rsvp-no" 
                        value="no" 
                        name="wedding-rsvp"
                        checked={values["wedding-rsvp"] === "no"}
                        onChange={handleChange}
                    />
                </div>

                { values["wedding-rsvp"] === "yes" &&
                    <div className="form__group">
                        <p className="form__content">Who will be able to make it? (2 people)</p>
                        <FormField 
                            labelName="John Doe" 
                            type="checkbox" 
                            id="wedding-guest-1" 
                            value="john-doe"
                            name="wedding-rsvp-multi-guest.0"
                            checked={values["wedding-rsvp-multi-guest"] && values["wedding-rsvp-multi-guest"][0]}
                            onChange={handleChange}
                        />
                        <FormField 
                            labelName="Jane Doe" 
                            type="checkbox" 
                            id="wedding-guest-2" 
                            value="jane-doe" 
                            name="wedding-rsvp-multi-guest.1"
                            checked={values["wedding-rsvp-multi-guest"] && values["wedding-rsvp-multi-guest"][1]}
                            onChange={handleChange}
                        />
                        <FormField 
                            labelName="Jack Doe" 
                            type="checkbox" 
                            id="wedding-guest-3" 
                            value="jack-doe"
                            name="wedding-rsvp-multi-guest.2"
                            checked={values["wedding-rsvp-multi-guest"] && values["wedding-rsvp-multi-guest"][2]}
                            onChange={handleChange}
                        />
                        <FormField 
                            labelName="Janie Doe" 
                            type="checkbox" 
                            id="wedding-guest-4" 
                            value="janie-doe" 
                            name="wedding-rsvp-multi-guest.3"
                            checked={values["wedding-rsvp-multi-guest"] && values["wedding-rsvp-multi-guest"][3]}
                            onChange={handleChange}
                        />
                    </div>
                }

                <div className="form__group">
                    <p className="form__content">Will you be able to make it to the next day event?</p>
                    <FormField 
                        labelName="Yes" 
                        type="radio" 
                        id="bbq-rsvp-yes" 
                        value="yes" 
                        name="bbq-rsvp"
                        checked={values["bbq-rsvp"] === "yes"}
                        onChange={handleChange}
                    />
                    <FormField 
                        labelName="No" 
                        type="radio" 
                        id="bbq-rsvp-no" 
                        value="no" 
                        name="bbq-rsvp"
                        checked={values["bbq-rsvp"] === "no"}
                        onChange={handleChange}
                    />
                </div>

                { values["bbq-rsvp"] === "yes" &&
                    <div className="form__group">
                        <p className="form__content">Who will be able to make it? (2+ people)</p>
                        <FormField 
                            labelName="John Doe" 
                            type="checkbox" 
                            id="bbq-guest-1" 
                            value="john-doe"
                            name="bbq-rsvp-multi-guest.0"
                            checked={values["bbq-rsvp-multi-guest"] && values["bbq-rsvp-multi-guest"][0]}
                            onChange={handleChange}
                        />
                        <FormField 
                            labelName="Jane Doe" 
                            type="checkbox" 
                            id="bbq-guest-2" 
                            value="jane-doe" 
                            name="bbq-rsvp-multi-guest.1"
                            checked={values["bbq-rsvp-multi-guest"] && values["bbq-rsvp-multi-guest"][1]}
                            onChange={handleChange}
                        />
                        <FormField 
                            labelName="Jack Doe" 
                            type="checkbox" 
                            id="bbq-guest-3" 
                            value="jack-doe"
                            name="bbq-rsvp-multi-guest.2"
                            checked={values["bbq-rsvp-multi-guest"] && values["bbq-rsvp-multi-guest"][2]}
                            onChange={handleChange}
                        />
                        <FormField 
                            labelName="Janie Doe" 
                            type="checkbox" 
                            id="bbq-guest-4" 
                            value="janie-doe" 
                            name="bbq-rsvp-multi-guest.3"
                            checked={values["bbq-rsvp-multi-guest"] && values["bbq-rsvp-multi-guest"][3]}
                            onChange={handleChange}
                        />
                    </div>
                }
                { (values["wedding-rsvp"] === "yes" || values["bbq-rsvp"] === "yes") &&
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
                    </div>
                }
                { (values["wedding-rsvp"] === "yes" || values["bbq-rsvp"] === "yes") && (values["diet"] === "yes") &&
                    <div className="form__group form__group--stacked">
                        <p className="form__content">Who has dietry requirements</p>
                        <FormField 
                            labelName="John Doe" 
                            type="checkbox" 
                            id="diet-multi-guest-1" 
                            value="john-doe"
                            name="diet-multi.0"
                            checked={values["diet-multi"] && values["diet-multi"][0]}
                            onChange={handleChange}
                        />
                        { values["diet-multi"] && values["diet-multi"][0] &&
                            <FormField 
                                labelName="Please enter requirement" 
                                type="text" 
                                id="johnDoeDiet" 
                                onChange={handleChange}
                                value={values.johnDoeDiet} 
                                name="johnDoeDiet"
                            />
                        }
                        <FormField 
                            labelName="Jane Doe" 
                            type="checkbox" 
                            id="diet-multi-guest-2" 
                            value="jane-doe" 
                            name="diet-multi.1"
                            checked={values["diet-multi"] && values["diet-multi"][1]}
                            onChange={handleChange}
                        />
                        { values["diet-multi"] && values["diet-multi"][1] &&
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
                            id="diet-multi-guest-3" 
                            value="jack-doe"
                            name="diet-multi.2"
                            checked={values["diet-multi"] && values["diet-multi"][2]}
                            onChange={handleChange}
                        />
                        { values["diet-multi"] && values["diet-multi"][2] &&
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
                            id="diet-multi-guest-4" 
                            value="janie-doe" 
                            name="diet-multi.3"
                            checked={values["diet-multi"] && values["diet-multi"][3]}
                            onChange={handleChange}
                        />
                        { values["diet-multi"] && values["diet-multi"][3] &&
                            <FormField 
                                labelName="Please enter requirement" 
                                type="text" 
                                id="janieDoeDiet" 
                                onChange={handleChange}
                                value={values.janieDoeDiet} 
                                name="janieDoeDiet"
                            />
                        }
                    </div>
                }

                <div className="form__group">
                    <p className="form__content">Please choose a group leader we can contact if we need to</p>
                    <FormField 
                        labelName="John Doe" 
                        type="radio" 
                        id="leader-guest-1" 
                        value="leader-john"
                        name="nominated-leader"
                        checked={values["nominated-leader"] === "leader-john"}
                        onChange={handleChange}
                    />
                    <FormField 
                        labelName="Jane Doe" 
                        type="radio" 
                        id="leader-guest-2" 
                        value="leader-jane" 
                        name="nominated-leader"
                        checked={values["nominated-leader"] === "leader-jane"}
                        onChange={handleChange}
                    />
                    <FormField 
                        labelName="Jack Doe" 
                        type="radio" 
                        id="leader-guest-3" 
                        value="leader-jack"
                        name="nominated-leader"
                        checked={values["nominated-leader"] === "leader-jack"}
                        onChange={handleChange}
                    />
                    <FormField 
                        labelName="Janie Doe" 
                        type="radio" 
                        id="leader-guest-4" 
                        value="leader-janie" 
                        name="nominated-leader"
                        checked={values["nominated-leader"] === "leader-janie"}
                        onChange={handleChange}
                    />
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
                    />
                    <FormField 
                        labelName="Contact number" 
                        type="text" 
                        id="phone" 
                        onChange={handleChange}
                        value={values.phone} 
                        name="phone"
                    />
                    <FormField 
                        labelName="Email" 
                        type="text" 
                        id="email" 
                        onChange={handleChange}
                        value={values.email} 
                        name="email"
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