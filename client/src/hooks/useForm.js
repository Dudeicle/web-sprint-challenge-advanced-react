// write your custom hook here to control your checkout form

import React, { useState } from "react";

// custom hook to control all forms in our app
// handleChanges
// clearForm

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const clearForm = e => {
    e.preventDefault();
    setValues(initialValues);
  };

  return [values, handleChanges, clearForm];
};
