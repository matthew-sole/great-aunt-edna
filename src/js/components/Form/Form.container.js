import { withFormik } from 'formik';
import FormContainer from './Form';
import Yup from 'yup';

export default withFormik({
    mapPropsToValues: () => ({
        weddingRsvp: '',
        weddingRsvpMultiGuest: '',
        bbqRsvp: '',
        bbqRsvpMultiGuest: '',
        diet: '',
        dietMulti: '',
        dietRequirement: '',
        nominatedLeader: '',
        address: '',
        phone: '',
        email: '',
    }),

    validationSchema: Yup.object().shape({
        weddingRsvp: Yup.bool()
            .nullable()
            .required('Required'),
        weddingRsvpMultiGuest: Yup.bool()
            .nullable()
            .required('Please select at least one person attending'),
        bbqRsvp: Yup.bool()
            .nullable()
            .required('Required'),
        bbqRsvpMultiGuest: Yup.bool()
            .nullable()
            .required('Please choose at least one person attending'),
        diet: Yup.bool()
            .nullable()
            .required('Required'),
        dietMulti: Yup.string()
            .nullable()
            .required('Please select each person with a dietery requirment'),
        dietRequirement: Yup.string()
            .nullable()
            .required('Please enter a diet requirement'),
        nominatedLeader: Yup.string().required('Please nominate someone as a contact for your group'),
        address: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
    }),

    handleSubmit: values => {
        console.log('values', values);
    },
})(FormContainer);
