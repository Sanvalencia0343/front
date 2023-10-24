import { useState } from 'react';

export const useUpdate = () => {
    const [formData, setFormData] = useState({
        id:'',
        fullname: '',
        email: '',
        phone: '',
        username: '',
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


    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return { formData, setFormData, errors, handleChange, validateForm };
}
