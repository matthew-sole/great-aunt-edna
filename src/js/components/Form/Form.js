import React from 'react';
import FormField from '../FormField/FormField';


export default function(props) {
    
    return(
        <form onSubmit={props.handleSubmit}>
            <div className="form__group">
                <p>Will you be able to make it to the big day?</p>
                <FormField 
                    labelName="Yes" 
                    type="radio" 
                    id="rsvp-yes" 
                    value="yes"
                    checked={props.values["wedding-rsvp"] === "yes"}
                    name="wedding-rsvp"
                    onChange={props.handleChange}

                />
                <FormField 
                    labelName="No" 
                    type="radio" 
                    id="rsvp-no" 
                    value="no" 
                    name="wedding-rsvp"
                    checked={props.values["wedding-rsvp"] === "no"}
                    onChange={props.handleChange}
                />
            </div>

            { props.values["wedding-rsvp"] === "yes" &&
                <div className="form__group">
                    <p>Who will be able to make it? (2 people)</p>
                    <FormField 
                        labelName="John Doe" 
                        type="checkbox" 
                        id="wedding-guest-1" 
                        value="john-doe"
                        name="wedding-rsvp-multi-guest.0"
                        checked={props.values["wedding-rsvp-multi-guest"] && props.values["wedding-rsvp-multi-guest"][0]}
                        onChange={props.handleChange}
                    />
                    <FormField 
                        labelName="Jane Doe" 
                        type="checkbox" 
                        id="wedding-guest-2" 
                        value="jane-doe" 
                        name="wedding-rsvp-multi-guest.1"
                        checked={props.values["wedding-rsvp-multi-guest"] && props.values["wedding-rsvp-multi-guest"][1]}
                        onChange={props.handleChange}
                    />
                    <FormField 
                        labelName="Jack Doe" 
                        type="checkbox" 
                        id="wedding-guest-3" 
                        value="jack-doe"
                        name="wedding-rsvp-multi-guest.2"
                        checked={props.values["wedding-rsvp-multi-guest"] && props.values["wedding-rsvp-multi-guest"][2]}
                        onChange={props.handleChange}
                    />
                    <FormField 
                        labelName="Janie Doe" 
                        type="checkbox" 
                        id="wedding-guest-4" 
                        value="janie-doe" 
                        name="wedding-rsvp-multi-guest.3"
                        checked={props.values["wedding-rsvp-multi-guest"] && props.values["wedding-rsvp-multi-guest"][3]}
                        onChange={props.handleChange}
                    />
                </div>
            }

            <div className="form__group">
                <p>Will you be able to make it to the next day event?</p>
                <FormField 
                    labelName="Yes" 
                    type="radio" 
                    id="bbq-rsvp-yes" 
                    value="yes" 
                    name="bbq-rsvp"
                    checked={props.values["bbq-rsvp"] === "yes"}
                    onChange={props.handleChange}
                />
                <FormField 
                    labelName="No" 
                    type="radio" 
                    id="bbq-rsvp-no" 
                    value="no" 
                    name="bbq-rsvp"
                    checked={props.values["bbq-rsvp"] === "no"}
                    onChange={props.handleChange}
                />
            </div>

            { props.values["bbq-rsvp"] === "yes" &&
                <div className="form__group">
                    <p>Who will be able to make it? (2 people)</p>
                    <FormField 
                        labelName="John Doe" 
                        type="checkbox" 
                        id="bbq-guest-1" 
                        value="john-doe"
                        name="bbq-rsvp-multi-guest.0"
                        checked={props.values["bbq-rsvp-multi-guest"] && props.values["bbq-rsvp-multi-guest"][0]}
                        onChange={props.handleChange}
                    />
                    <FormField 
                        labelName="Jane Doe" 
                        type="checkbox" 
                        id="bbq-guest-2" 
                        value="jane-doe" 
                        name="bbq-rsvp-multi-guest.1"
                        checked={props.values["bbq-rsvp-multi-guest"] && props.values["bbq-rsvp-multi-guest"][1]}
                        onChange={props.handleChange}
                    />
                    <FormField 
                        labelName="Jack Doe" 
                        type="checkbox" 
                        id="bbq-guest-3" 
                        value="jack-doe"
                        name="bbq-rsvp-multi-guest.2"
                        checked={props.values["bbq-rsvp-multi-guest"] && props.values["bbq-rsvp-multi-guest"][2]}
                        onChange={props.handleChange}
                    />
                    <FormField 
                        labelName="Janie Doe" 
                        type="checkbox" 
                        id="bbq-guest-4" 
                        value="janie-doe" 
                        name="bbq-rsvp-multi-guest.3"
                        checked={props.values["bbq-rsvp-multi-guest"] && props.values["bbq-rsvp-multi-guest"][3]}
                        onChange={props.handleChange}
                    />
                </div>
            }
            
            <div className="form__group">
                <p>Does anyone have any dietry requirements</p>
                <FormField 
                    labelName="Yes" 
                    type="radio" 
                    id="diet-yes" 
                    value="yes" 
                    name="diet"
                    checked={props.values["diet"] === "yes"}
                    onChange={props.handleChange}
                />
                <FormField 
                    labelName="No" 
                    type="radio" 
                    id="diet-no" 
                    value="no" 
                    name="diet"
                    checked={props.values["diet"] === "no"}
                    onChange={props.handleChange}
                />
            </div>

            <div className="form__group">
                <p>Who is the best contact for your group if we need to update you with any information?</p>
                <FormField 
                    labelName="Address" 
                    type="text" 
                    id="address" 
                    onChange={props.handleChange}
                    value={props.values.address} 
                    name="address"
                />
                <FormField 
                    labelName="Contact number" 
                    type="text" 
                    id="phone" 
                    onChange={props.handleChange}
                    value={props.values.phone} 
                    name="phone"
                />
                <FormField 
                    labelName="Email" 
                    type="text" 
                    id="email" 
                    onChange={props.handleChange}
                    value={props.values.email} 
                    name="email"
                />
                <ul>
                    <li></li>
                    <li className="class"></li>
                </ul>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}