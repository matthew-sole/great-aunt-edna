// @flow
import { withFormik } from 'formik';
// import Yup from 'yup';

import FormContainer from './Form';

export default withFormik({
    mapPropsToValues: ({ data }) => ({
        weddingRsvp: [],
        bbqRsvp: [],
        diet: null,
        dietMulti: '',
        dietRequirement: '',
        nominatedLeader: '',
        address: data.contactDetails.address,
        phone: '',
        email: '',
    }),

    // validationSchema: Yup.object().shape({
    //     weddingRsvp: Yup.bool()
    //         .nullable()
    //         .required('Required'),
    //     weddingRsvpMultiGuest: Yup.bool()
    //         .nullable()
    //         .required('Please select at least one person attending'),
    //     bbqRsvp: Yup.bool()
    //         .nullable()
    //         .required('Required'),
    //     bbqRsvpMultiGuest: Yup.array()
    //         .nullable()
    //         .required('Please choose at least one person attending'),
    //     diet: Yup.bool()
    //         .nullable()
    //         .required('Required'),
    //     dietMulti: Yup.string()
    //         .nullable()
    //         .required('Please select each person with a dietery requirment'),
    //     dietRequirement: Yup.string()
    //         .nullable()
    //         .required('Please enter a diet requirement'),
    //     nominatedLeader: Yup.string().required('Please nominate someone as a contact for your group'),
    //     address: Yup.string().required('Required'),
    //     phone: Yup.string().required('Required'),
    //     email: Yup.string()
    //         .email('Invalid email address')
    //         .required('Required'),
    // }),

    handleSubmit: (values, { props }) => {
        console.log('values', values);
        const result = {
            id: '',
            displayName: 'Missy & Dave Matthews',
            members: [
                ...props.data.members.map((item, index) => ({
                    ...item,
                    // bbqRsvp: values.bbqRsvp[index],
                    weddingRsvp: values.weddingRsvp[index],
                })),
            ],
            contactDetails: {
                address: '',
                email: '',
                phone: '',
            },
        };
        console.log('result', result);
    },
})(FormContainer);
