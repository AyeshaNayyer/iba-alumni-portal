import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();
  const initialValues = {
    ERP: "",
    FirstName: "",
    LastName: "",
    UserType: "",
    Password: "",
    ProgramId: "",
    Batch: "",
    Phone: "",
    LinkedIn: "",
    Email: "", 
  };

  const validationSchema = Yup.object().shape({
    ERP: Yup.string().required("You must input a ERP!"),
    FirstName: Yup.string().required("You must input firstname!"),
    LastName: Yup.string().required("You must input lastname!"),
    UserType: Yup.string().required("Specify whether you are alumni or student!"),
    Password: Yup.string().min(5).max(20).required("Enter Password!"),
    ProgramId: Yup.string().required("Enter ProgramID"),
    Batch: Yup.string().required("Enter graduation year!"),
    Phone: Yup.string(),
    LinkedIn: Yup.string(),
    Email: Yup.string(),

  });

    
    const onSubmit = (data) => {
      axios.post("http://localhost:3001/auth", data)
        .then((response) => {
          console.log(response);
          // Redirect to alumnilogin screen
          navigate('/login');
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    return (
      <div className="full-page-container">
        <div className="registration-layout">
          <div className="registration-heading">
            <p className="marquee-content">Student Registration</p>
          </div>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="registrationContainer"> {/* Ensure this matches the AlumniRegistration */}
             
              <div className="inputGroup">
                <label>ERP</label>
                <ErrorMessage name="ERP" component="span" className="errorMessage" />
                <Field className="formField" name="ERP" placeholder="Enter ERP" />
              </div>
    
              <div className="inputGroup">
                <label>FirstName</label>
                <ErrorMessage name="FirstName" component="span" className="errorMessage" />
                <Field className="formField" name="FirstName" placeholder="Enter FirstName" />
              </div>
    
              <div className="inputGroup">
                <label>LastName</label>
                <ErrorMessage name="LastName" component="span" className="errorMessage" />
                <Field className="formField" name="LastName" placeholder="Enter LastName" />
              </div>
    
              <div className="inputGroup">
                <label>UserType</label>
                <ErrorMessage name="UserType" component="span" className="errorMessage" />
                <Field className="formField" name="UserType" placeholder="Alumni or Student" />
              </div>
    
              <div className="inputGroup">
                <label>Password</label>
                <ErrorMessage name="Password" component="span" className="errorMessage" />
                <Field className="formField" type="password" name="Password" placeholder="Enter Password" />
              </div>
    
              <div className="inputGroup">
                <label>ProgramID</label>
                <ErrorMessage name="ProgramId" component="span" className="errorMessage" />
                <Field className="formField" name="ProgramId" placeholder="Enter ProgramID" />
              </div>
    
              <div className="inputGroup">
                <label>Batch</label>
                <ErrorMessage name="Batch" component="span" className="errorMessage" />
                <Field className="formField" name="Batch" placeholder="Enter Graduation Year" />
              </div>
    
              <div className="inputGroup">
                <label>Phone</label>
                <ErrorMessage name="Phone" component="span" className="errorMessage" />
                <Field className="formField" name="Phone" placeholder="Enter Phone" />
              </div>
    
              <div className="inputGroup">
                <label>LinkedIn</label>
                <ErrorMessage name="LinkedIn" component="span" className="errorMessage" />
                <Field className="formField" name="LinkedIn" placeholder="Enter LinkedIn" />
              </div>
    
              <div className="inputGroup">
                <label>Email</label>
                <ErrorMessage name="Email" component="span" className="errorMessage" />
                <Field className="formField" name="Email" placeholder="Enter Your Email" />
              </div>
    
              <button type="submit" className="formButton">Register!</button>
            </Form>
          </Formik>
        </div>
      </div>
    );
}
export default Registration


