import React from 'react';
import { ErrorMessage, useField } from 'formik';
import './Input.scss'

export const Input = ({ label, ...props }) => {
  const [field, another] = useField(props);
  return (
    <div className="inputDiv">
        <label className="label" htmlFor={field.name}>{field.name}</label>
        <input
            className={`input ${another.touched && another.error && 'is-invalid'}`}
            {...field} {...props}
            autoComplete="off"
            placeholder={field.name}
        />
        <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}