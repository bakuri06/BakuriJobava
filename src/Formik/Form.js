import React from 'react';
import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from './Input/Input';
import './Form.scss'
import Loader from './Components/Loader'

function Registration() {

  const Information = (formik) => {
    console.log(formik);
  }
  const { status, setStatus, resetForm, isSubmitting, setSubmitting, setErrors } = useFormik({});
  const validate = Yup.object({
    FirstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    LastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
    Email: Yup.string().email('Email is invalid').required('Email is required'),
    ConfirmEmail: Yup.string()
      .oneOf([Yup.ref('Email'), null], 'Email must match').required('Confirm email is required'),
    Password: Yup.string().min(8, 'Must be 8 characters or more').required('Password is required'),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref('Password'), null], 'Password must match').required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        FirstName: '',
        LastName: '',
        Email: '',
        ConfirmEmail: '',
        Password: '',
        ConfirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        fetch('https://reqres.in/api/users', {
          method: "POST",
          body: JSON.stringify(
            {
              FirstName: values.FirstName,
              LastName: values.LastName,
              Email: values.Email,
              ConfirmEmail: values.ConfirmEmail,
              Password: values.Password,
              ConfirmPassword: values.ConfirmPassword,
            }
          )
        })
          .then(res => res.json())
          .then(json => {
            console.log(json);
            setStatus(true);
            resetForm();
          }).catch((error) => {
            console.log(error)
            setErrors({ main: 'Error' })
          })
          .finally(() => {
            setSubmitting(true);
          })
      }
      }
    >
      {formik => (
        <div className='main'>
          {status ? (<div>Loading</div>) : (
            <Loader isLoading={isSubmitting}>
              <div>
                <h1 className="register">Register</h1>
                <Form>
                  <Input label="FirstName" name="FirstName" type="text" />
                  <Input label="LastName" name="LastName" type="text" />
                  <Input label="Email" name="Email" type="email" />
                  <Input label="ConfirmEmail" name="ConfirmEmail" type="email" />
                  <Input label="Password" name="Password" type="password" />
                  <Input label="ConfirmPassword" name="ConfirmPassword" type="password" />
                  <button onClick={() => Information(formik)} className="button registerButton" type="submit">Register</button>
                  <button className="button reset" type="reset">Reset</button>
                </Form>
              </div>
            </Loader>
          )}
        </div>
      )}
    </Formik>
  )
}

export default Registration;