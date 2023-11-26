import React from "react";
import "./RegistrationValide.css";
import Layout from "../Layout/Layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

export default function RegistrationValide() {
  return (
    <Layout>
      <div className="form_box">
        <div className="form_h1">Registration</div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert("Completed");
              setSubmitting(false);
            }, 600);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form_form">
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              {/* <Link to={"/"} className="form_link"> */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="form_button"
              >
                Submit
              </button>
              {/* </Link> */}
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
}
