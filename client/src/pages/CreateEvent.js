import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  title: '',
  description: '',
  location: '',
  date: '',
  time: '',
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  location: Yup.string().required('Location is required'),
  DATE: Yup.string().required('Date is required'),
  TIME: Yup.string().required('Time is required'),
});

const CreateEvent = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    axios.post('http://localhost:3001/events', values)
      .then((response) => {
        console.log('Event Created:', response.data);
        navigate('/events'); // Redirect to events list page
      })
      .catch((error) => {
        console.error('Error creating event:', error);
      });
  };

  return (
    <div>
      <h1>Create New Event</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="title" placeholder="Event Title" />
            <ErrorMessage name="title" component="div" />

            <Field name="description" as="textarea" placeholder="Event Description" />
            <ErrorMessage name="description" component="div" />

            <Field name="location" placeholder="Event Location" />
            <ErrorMessage name="location" component="div" />

            <Field name="date"  placeholder="Event Date" />
            <ErrorMessage name="date" component="div" />

            <Field name="time" placeholder="Event Time" />
            <ErrorMessage name="time" component="div" />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create Event'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateEvent;