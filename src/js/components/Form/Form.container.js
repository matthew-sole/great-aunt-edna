import { withFormik } from 'formik';
import axios from 'axios';
import PropTypes from 'prop-types';

import FormContainer from './Form';

export default withFormik({
    mapPropsToValues: ({ data }) => ({
        rsvp: null,
        weddingMulti: data.members.map(item => item.rsvp),
        diet: null,
        dietMulti: data.members.map(item => item.diet),
        dietRequirement: data.members.map(item => item.dietRequirement),
        address: data.contactDetails.address,
        phone: data.contactDetails.phone,
        email: data.contactDetails.email,
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
            contactDetails: {
                address: values.address,
                email: values.email,
                phone: values.phone,
            },
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
    rsvp: PropTypes.string,
    weddingMulti: PropTypes.array,
    diet: PropTypes.string,
    dietMulti: PropTypes.array,
    dietRequirement: PropTypes.array,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
};
