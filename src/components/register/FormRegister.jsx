import React, { useState } from 'react';
import { Paper, TextField, Button, Icon, Typography, Stack, Grid } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useRegister } from '../../hooks/useRegister';
import { createUser } from '../../services/userService';
import { useNavigate } from 'react-router-dom';

const FormRegister = () => {
  const navigate = useNavigate();

  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const { formData, errors, handleChange, validateForm } = useRegister();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm() && formData.password === confirmPassword) {
      createUser(formData).then((response) => {
        if (response) {
          navigate('/');
        }
      });
      console.log('El Usuario se creó correctamente');
    } else {
      setPasswordMatchError(true);
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMatchError(event.target.value !== formData.password);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '500px',
        margin: 'auto',
      }}
    >
      <Icon
        component={EditNoteIcon}
        sx={{
          fontSize: 60,
          color: 'black',
          marginBottom: '16px',
        }}
      />
      <h2>REGISTER</h2>
      <form onSubmit={handleSubmit}>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={1} ></Stack>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="fullname"
              label="Fullname"
              variant="outlined"
              value={formData.fullname}
              onChange={handleChange}
              sx={{
                marginBottom: '12px',
              }}
            />
            {errors.fullname && (
              <Typography variant="body2" color="error">
                {errors.fullname}
              </Typography>
            )}
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              sx={{
                marginBottom: '12px',
              }}
            />
            {errors.email && (
              <Typography variant="body2" color="error">
                {errors.email}
              </Typography>
            )}
            <TextField
              type="text"
              name="phone"
              label="Phone"
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
              sx={{
                marginBottom: '12px',
              }}
            />
            {errors.phone && (
              <Typography variant="body2" color="error">
                {errors.phone}
              </Typography>
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="username"
              label="Username"
              variant="outlined"
              value={formData.username}
              onChange={handleChange}
              sx={{
                marginBottom: '12px',
              }}
            />
            {errors.username && (
              <Typography variant="body2" color="error">
                {errors.username}
              </Typography>
            )}
            <TextField
              type="password"
              name="password"
              label="Password"
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              sx={{
                marginBottom: '16px',
              }}
            />
            {errors.password && (
              <Typography variant="body2" color="error">
                {errors.password}
              </Typography>
            )}
            <TextField
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              error={passwordMatchError}
              helperText={
                passwordMatchError ? (
                  <Typography variant="body2" color="error">
                    Las contraseñas no coinciden
                  </Typography>
                ) : (
                  ''
                )
              }
              sx={{
                marginBottom: '16px',
              }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: 'black',
            marginBottom: '16px',
            width: '75%',
            borderRadius: '20px',
            '&:hover': {
              backgroundColor: '#673FFF',
            },
          }}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default FormRegister;
