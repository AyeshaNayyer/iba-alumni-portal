import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Createfyp() {
  const initialValues = {
    fypid: '',
    title: '',
    description: '',
    ERP: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('You must input a Title!'),
    description: Yup.string().required('You must input a description!'),
    ERP: Yup.string().min(5).max(5).required('You must input your ERP only!'),
  });

  const navigate = useNavigate(); // hook to get the navigation function

  const onSubmit = (data) => {
    delete data.fypid;
    axios.post('http://localhost:3001/fyp', data).then((response) => {
      console.log(response);
      // Redirect to the /fyp page after successfully posting
      navigate('/fyp');
    });
  };

  return (
    <div className="full-page-container">
      <div className="registration-layout">
        <div className="registration-heading">
          <p className="marquee-content">Create FYP</p>
        </div>

        <div className="createPostPage">
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="formContainer">
              <div className="inputGroup">
                <label>Title</label>
                <ErrorMessage name="title" component="span" />
                <Field id="inputCreatePost" name="title" placeholder="Enter FYP title" />
              </div>

              <div className="inputGroup">
                <label>Description</label>
                <ErrorMessage name="description" component="span" />
                <Field id="inputCreatePost" name="description" placeholder="Enter description" />
              </div>

              <div className="inputGroup">
                <label>ERP</label>
                <ErrorMessage name="ERP" component="span" />
                <Field id="inputCreatePost" name="ERP" placeholder="Enter your ERP only" />
              </div>
              
              <button type="submit" className="formButton">Post FYP!</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Createfyp;
