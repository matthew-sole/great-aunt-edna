import { withFormik } from 'formik';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import FormContainer from './Form';

export default withFormik({
    mapPropsToValues: ({ data }) => ({
        rsvp: null,
        weddingMulti: data.members.map(item => item.rsvp),
        diet: null,
        dietMulti: data.members.map(item => item.diet),
        dietRequirement: data.members.map(item => item.dietRequirement),
        email: data.contactEmail.email,
        songRequest: data.songRequest,
    }),

    validationSchema: Yup.object().shape({
        rsvp: Yup.string()
            .nullable()
            .required('Required'),
        weddingMulti: Yup.array().when('rsvp', {
            is: 'true',
            then: Yup.array()
                .oneOf([true])
                .required(),
        }),
        diet: Yup.string()
            .nullable()
            .required('Required'),
        dietMulti: Yup.string().required(
            'Please select each person with a dietery requirment',
        ),
        dietRequirement: Yup.string().when('diet', {
            is: 'true',
            then: Yup.string().required('Please enter a diet requirement'),
        }),
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
                    rsvp: values.weddingMulti[index],
                    diet: values.dietMulti[index],
                    dietRequirement: values.dietRequirement[index],
                })),
            ],
            contactEmail: values.email,
        };
        if (props.data.members.length <= 1) {
            result.members = props.data.members.map((item, index) => ({
                ...item,
                rsvp: values.rsvp === 'false' ? false : values.rsvp,
                diet: values.rsvp === 'false' ? false : values.rsvp,
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
    rsvp: PropTypes.string.isRequired,
    weddingMulti: PropTypes.array.isRequired,
    diet: PropTypes.string.isRequired,
    dietMulti: PropTypes.array.isRequired,
    dietRequirement: PropTypes.array.isRequired,
    email: PropTypes.string.isRequired,
    songRequest: PropTypes.string.isRequired,
};
