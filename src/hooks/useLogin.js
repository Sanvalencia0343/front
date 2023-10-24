import { useState } from 'react';

export const useLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const errors = {};

    if (!formData.username) {
      errors.username = 'El usuario es obligatorio.';
    }

    if (!formData.password) {
      errors.password = 'La contraseña es obligatoria.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return { formData, errors, handleChange, validateForm };
}
