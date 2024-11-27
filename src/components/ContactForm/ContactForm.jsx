import { Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name can't exceed 50 characters"),
    number: Yup.string()
      .required("Number is required")
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "Invalid phone number format (e.g., 123-45-67)"
      ),
  });

  const initialValues = { name: "", number: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form className={css.form}>
          <label>
            Name:
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
          <label>
            Number:
            <Field name="number" type="text" />
            <ErrorMessage name="number" component="div" className={css.error} />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
