import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from "axios";

function AlumniRegistration() {
  const navigate = useNavigate();
  
  const initialValues = {
    ERP: "",
    FirstName: "",
    LastName: "",
    Password: "",
    ProgramId: "",
    Batch: "",
    Phone: "",
    LinkedIn: "",
    Email: "", 
    City: "",
    Country:"",
    Region:"",
    Mentor:"",
    Companyid:"",

  };

  const validationSchema = Yup.object().shape({
    ERP: Yup.string().required("You must input a ERP!"),
    FirstName: Yup.string().required("You must input firstname!"),
    LastName: Yup.string().required("You must input lastname!"),
    Password: Yup.string().min(5).max(20).required("Enter Password!"),
    ProgramId: Yup.string().required("Enter ProgramID"),
    Batch: Yup.string().required("Enter graduation year!"),
    Phone: Yup.string(),
    LinkedIn: Yup.string(),
    Email: Yup.string(),
    City: Yup.string().required("Enter City"),
    Country: Yup.string().required("Enter Country"),
    Region: Yup.string().required("Enter Region"),
    Mentor: Yup.string().required("Are you a mentor?"),
    Companyid: Yup.string().required("Enter Companyid"),

  });

    const onSubmit = (data) => {
      axios.post("http://localhost:3001/alumniauth", data)
        .then((response) => {
          console.log(response);
          // Redirect to alumnilogin screen
          navigate('/alumnilogin');
        })
        .catch((error) => {
          console.error(error);
        });
    };
  return (
  <div className="registrationContainer">
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form className="formContainer">
        <label>ERP</label>
        <ErrorMessage name="ERP" component="span" className="errorMessage" />
        <Field className="formField" name="ERP" placeholder="Enter ERP" />

        <label>FirstName</label>
        <ErrorMessage name="FirstName" component="span" className="errorMessage" />
        <Field className="formField" name="FirstName" placeholder="Enter FirstName" />

        <label>LastName</label>
        <ErrorMessage name="LastName" component="span" className="errorMessage" />
        <Field className="formField" name="LastName" placeholder="Enter LastName" />

        <label>UserType</label>
        <ErrorMessage name="UserType" component="span" className="errorMessage" />
        <Field className="formField" name="UserType" placeholder="Alumni or Student" />

        <label>Password</label>
        <ErrorMessage name="Password" component="span" className="errorMessage" />
        <Field className="formField" type="password" name="Password" placeholder="Enter Password" />

        <label>ProgramID</label>
        <ErrorMessage name="ProgramId" component="span" className="errorMessage" />
        <Field className="formField" name="ProgramId" placeholder="Enter ProgramID" />

        <label>Batch</label>
        <ErrorMessage name="Batch" component="span" className="errorMessage" />
        <Field className="formField" name="Batch" placeholder="Enter Graduation Year" />

        <label>Phone</label>
        <ErrorMessage name="Phone" component="span" className="errorMessage" />
        <Field className="formField" name="Phone" placeholder="Enter Phone" />

        <label>LinkedIn</label>
        <ErrorMessage name="LinkedIn" component="span" className="errorMessage" />
        <Field className="formField" name="LinkedIn" placeholder="Enter LinkedIn" />

        <label>Email</label>
        <ErrorMessage name="Email" component="span" className="errorMessage" />
        <Field className="formField" name="Email" placeholder="Enter Your Email" />

        <label>City</label>
        <ErrorMessage name="City" component="span" className="errorMessage" />
        <Field className="formField" name="City" placeholder="Enter City" />

        <label>Country</label>
        <ErrorMessage name="Country" component="span" className="errorMessage" />
        <Field className="formField" name="Country" placeholder="Enter Country" />

        <label>Region</label>
        <ErrorMessage name="Region" component="span" className="errorMessage" />
        <Field className="formField" name="Region" placeholder="Enter Region" />

        <label>Mentor</label>
        <ErrorMessage name="Mentor" component="span" className="errorMessage" />
        <Field className="formField" name="Mentor" placeholder="Are You a Mentor?" />

        <label>Companyid</label>
        <ErrorMessage name="Companyid" component="span" className="errorMessage" />
        <Field className="formField" name="Companyid" placeholder="Enter Companyid" />

        <button type="submit" className="formButton">Register!</button>
      </Form>
    </Formik>
  </div>
);
}
export default AlumniRegistration