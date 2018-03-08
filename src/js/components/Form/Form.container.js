import { withFormik } from 'formik';
import Form from './Form';

export default withFormik({
    handleSubmit: (values, things) => {
        console.log(values, things);
    }
})(Form)