import { withFormik } from 'formik';
import FormContainer from './Form';

export default withFormik({
    mapPropsToValues: () => ({
        weddingRsvp: '',
        weddingRsvpMultiGuest: [],
        bbqRsvp: '',
        bbqRsvpMultiGuest: '',
        diet: '',
        dietMulti: '',
        johnDoeDiet: '',
        nominatedLeader: '',
        address: '',
        phone: '',
        email: '',
        dietRequirement: [],
    }),

    // validate: values => {
    //     let errors = {};

    //     if (!values.weddingRsvp) {
    //         errors.weddingRsvp = 'Required';
    //     }
    //     if (!values.weddingRsvpMultiGuest) {
    //         errors.weddingRsvpMultiGuest = 'Please choose at least one person attending';
    //     }
    //     if (!values.bbqRsvp) {
    //         errors.bbqRsvp = 'Required';
    //     }
    //     if (!values.bbqRsvpMultiGuest) {
    //         errors.bbqRsvpMultiGuest = 'Please choose at least one person attending';
    //     }
    //     if (!values.diet) {
    //         errors.diet = 'Required';
    //     }
    //     if (!values.dietMulti) {
    //         errors.dietMulti = 'Please click on each person with a dietery requirment';
    //     }
    //     if (!values.johnDoeDiet) {
    //         errors.johnDoeDiet = 'Please enter dietery requirement';
    //     }
    //     if (!values.nominatedLeader) {
    //         errors.nominatedLeader = 'Please nominate someone as a contact for your group';
    //     }
    //     if (!values.address) {
    //         errors.address = 'Required';
    //     }
    //     if (!values.phone) {
    //         errors.phone = 'Required';
    //     }
    //     if (!values.email) {
    //         errors.email = 'Required';
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //         errors.email = 'Invalid email address';
    //     }
    //     return errors;
    // },

    handleSubmit: values => {
        console.log(values);
    },
})(FormContainer);
