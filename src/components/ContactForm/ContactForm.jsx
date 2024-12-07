import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long"),
  number: Yup.string()
    .required("Number is required")
    .matches(/^\d{3}-\d{3}-\d{4}$/, "Number must be in XXX-XXX-XXXX format"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.formWraper}>
          <label className={css.label}>
            Name
            <Field className={css.field} type="text" name="name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            Number
            <Field className={css.field} type="text" name="number" />
            <ErrorMessage name="number" component="div" className={css.error} />
          </label>
          <button type="submit" disabled={isSubmitting} className={css.button}>
            {isSubmitting ? "Adding..." : "Add Contact"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
