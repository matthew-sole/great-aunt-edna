// @flow

import { withFormik } from 'formik';
import axios from 'axios';
import Yup from 'yup';

import FormContainer from './Form';

export default withFormik({
    mapPropsToValues: ({ data }) => {
        return {
            weddingRsvp: null,
            weddingMulti: data.members.map(item => item.weddingRsvp),
            bbqRsvp: null,
            bbqMulti: data.members.map(item => item.bbqRsvp),
            diet: data.members.some(
                member => member.diet === 'true' || member.diet === true,
            )
                ? 'true'
                : 'false',
            dietMulti: data.members.map(item => item.diet),
            dietRequirement: data.members.map(item => item.dietRequirement),
            address: data.contactDetails.address,
            phone: data.contactDetails.phone,
            email: data.contactDetails.email,
        };
    },

    validationSchema: Yup.object().shape({
        weddingRsvp: Yup.string()
            .nullable()
            .required('Required'),
        weddingMulti: Yup.array().required(
            'Please select at least one person attending',
        ),
        bbqRsvp: Yup.string()
            .nullable()
            .required('Required'),
        bbqMulti: Yup.array().required(
            'Please choose at least one person attending',
        ),
        diet: Yup.bool().required('Required'),
        dietMulti: Yup.string().required(
            'Please select each person with a dietery requirment',
        ),
        dietRequirement: Yup.string().when('diet', {
            is: true,
            then: Yup.string().required('Please enter a diet requirement'),
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
                bbqRsvp: values.bbqRsvp,
                weddingRsvp: values.weddingRsvp,
                diet: values.diet,
                dietRequirement: values.dietRequirement[index],
            }));
        }
        axios
            .patch(
                `https://great-aunt-edna.firebaseio.com/${props.name}.json`,
                result,
            )
            .then(() => {
                setStatus('success');
            });
    },
})(FormContainer);
