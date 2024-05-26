import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define the validation schema using Yup
const FundraiserSchema = Yup.object().shape({
  ERP: Yup.number().required('ERP is required'),
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  target: Yup.number().required('Target amount is required'),
  current_amount: Yup.number().required('Current amount is required'),
});

function CreateFundraiser() {
  const navigate = useNavigate();

  // Initial values for our form
  const initialValues = {
    ERP: '',
    title: '',
    description: '',
    target: '',
    current_amount: '',
  };

  // Function to handle form submission
  const onSubmit = (values) => {
    axios.post('http://localhost:3001/fundraising', values)
      .then((response) => {
        console.log(response.data);
        navigate('/fundraising'); // Navigate to fundraising page after creation
      }).catch((error) => {
        console.error('There was an error creating the fundraiser:', error);
      });
  };
  return (
    <div className="full-page-container">
      <div className="registration-layout">
        <div className="registration-heading">
          <h1 className="marquee-content">Create New Fundraiser</h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={FundraiserSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="formContainer">
              <div className="inputGroup">
                <Field name="ERP" placeholder="ERP" />
                <ErrorMessage name="ERP" component="div" />
              </div>
              
              <div className="inputGroup">
                <Field name="title" placeholder="Fundraiser Title" />
                <ErrorMessage name="title" component="div" />
              </div>

              <div className="inputGroup">
                <Field as="textarea" name="description" placeholder="Description" />
                <ErrorMessage name="description" component="div" />
              </div>

              <div className="inputGroup">
                <Field name="target" placeholder="Target Amount" />
                <ErrorMessage name="target" component="div" />
              </div>

              <div className="inputGroup">
                <Field name="current_amount" placeholder="Current Amount" />
                <ErrorMessage name="current_amount" component="div" />
              </div>

              <button type="submit" className="formButton">Create Fundraiser</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CreateFundraiser;