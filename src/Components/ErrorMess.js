import React from 'react';
import {  ErrorMessage } from 'formik';

function ErrorMess({name}) {
  return <div className='text-red-500'>
<ErrorMessage name={name} />
  </div>;
}

export default ErrorMess;
