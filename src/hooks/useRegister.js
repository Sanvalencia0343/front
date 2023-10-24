import { useState } from 'react';

export const useRegister = () => {
  const [formData, setFormData] = useState({
    fullname:'',
    email: '',
    phone:'',
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const errors = {};

    if (!formData.fullname) {
      errors.fullname = 'El nombre es obligatorio.';
    }

    if (!formData.email) {
      errors.email = 'El email es obligatorio.';
    }

    if (!formData.phone) {
      errors.phone = 'El telefono es obligatorio.';
    }

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
