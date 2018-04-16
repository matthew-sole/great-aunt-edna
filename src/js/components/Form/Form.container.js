import { withFormik } from 'formik';
import FormContainer from './Form';
import Yup from 'yup'

export default withFormik({
    mapPropsToValues: () => ({
        weddingRsvp: '',
        weddingRsvpMultiGuest: false,
        bbqRsvp: '',
        bbqRsvpMultiGuest: false,
        diet: '',
        dietMulti: false,
        nominatedLeader: '',
        address: '',
        phone: '',
        email: '',
        dietRequirement: [],
    }),

    validationSchema: Yup.object().shape({
        weddingRsvp: Yup.bool().required('Required'),
        weddingRsvpMultiGuest:  Yup.bool().required('Please select at least one person attending'),
        bbqRsvp:  Yup.bool().required('Required'),
        bbqRsvpMultiGuest:  Yup.bool().required('Please choose at least one person attending'),
        diet:  Yup.bool().required('Required'),
        dietMulti:  Yup.bool().required('Please select each person with a dietery requirment'),
        nominatedLeader:  Yup.bool().required('Please nominate someone as a contact for your group'),
        address: Yup.string().required('Required'),
        phone: Yup.number().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        dietRequirement: Yup.bool().required('Please enter a diet requirement'),
    }),

    handleSubmit: values => {
        console.log(values);
    },
})(FormContainer);
