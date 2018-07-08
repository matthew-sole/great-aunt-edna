import { withFormik } from 'formik';
import axios from 'axios';
import Yup from 'yup';
import PropTypes from 'prop-types';

import FormContainer from './Form';

export default withFormik({
    mapPropsToValues: ({ data }) => ({
        weddingRsvp: null,
        weddingMulti: data.members.map(item => item.weddingRsvp),
        bbqRsvp: null,
        bbqMulti: data.members.map(item => item.bbqRsvp),
        diet: null,
        dietMulti: data.members.map(item => item.diet),
        dietRequirement: data.members.map(item => item.dietRequirement),
        address: data.contactDetails.address,
        phone: data.contactDetails.phone,
        email: data.contactDetails.email,
    }),

    validationSchema: Yup.object().shape({
        weddingRsvp: Yup.string()
            .nullable()
            .required('Required'),
        weddingMulti: Yup.array().when('weddingRsvp', {
            is: 'true',
            then: Yup.array()
                .compact()
                .required('Please select at least one guest that will attend'),
        }),
        bbqRsvp: Yup.string()
            .nullable()
            .required('Required'),
        bbqMulti: Yup.array().when('bbqRsvp', {
            is: 'true',
            then: Yup.array()
                .compact()
                .required('Please select at least one guest that will attend'),
        }),
        diet: Yup.string()
            .nullable()
            .required('Required'),
        dietMulti: Yup.array().when('diet', {
            is: 'true',
            then: Yup.array()
                .compact()
                .required(
                    'Please select at least one guest with a dietary requirement',
                ),
        }),
        dietRequirement: Yup.array().when('diet', {
            is: 'true',
            then: Yup.array()
                .compact()
                .required('Please enter a diet requirement'),
        }),
        address: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
    }),

    handleSubmit: (values, { props, setStatus }) => {
        const result = {
            submitted: true,
            displayName: props.data.displayName,
            members: [
                ...props.data.members.map((item, index) => ({
                    ...item,
                    bbqRsvp: values.bbqMulti[index],
                    weddingRsvp: values.weddingMulti[index],
                    diet: values.dietMulti[index],
                    dietRequirement: values.dietRequirement[index],
                })),
            ],
            contactDetails: {
                address: values.address,
                email: values.email,
                phone: values.phone,
            },
        };
        if (props.data.members.length <= 1) {
            result.members = props.data.members.map((item, index) => ({
                ...item,
                bbqRsvp: values.bbqRsvp === 'false' ? false : values.bbqRsvp,
                weddingRsvp:
                    values.weddingRsvp === 'false' ? false : values.weddingRsvp,
                diet:
                    values.weddingRsvp === 'false' ? false : values.weddingRsvp,
                dietRequirement: values.dietRequirement[index],
            }));
        }
        axios
            .patch(
                `https://great-aunt-edna-2.firebaseio.com/guests/${
                    props.name
                }.json`,
                result,
            )
            .then(() => {
                props.submitSuccess(result);
                setStatus('success');
            });
    },
})(FormContainer);

FormContainer.propTypes = {
    weddingRsvp: PropTypes.string,
    weddingMulti: PropTypes.array,
    bbqRsvp: PropTypes.string,
    bbqMulti: PropTypes.array,
    diet: PropTypes.string,
    dietMulti: PropTypes.array,
    dietRequirement: PropTypes.array,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
};
