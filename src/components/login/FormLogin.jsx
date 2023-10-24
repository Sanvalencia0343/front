import { React, useState } from 'react';
import { Paper, TextField, Button, Icon, Typography, Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLogin } from '../../hooks/useLogin';
import { auth } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
  const [userNotFound, setUserNotFound] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate();

  const { formData, errors, handleChange, validateForm } = useLogin();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      auth(formData)
        .then((response) => {
          const { token } = response.data;
          if (token) {
            sessionStorage.setItem('token', token);
            navigate('/home');
          } else {
            console.log("Usuario no existe");
            setUserNotFound(true);
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            setErrorMessage("Credenciales incorrectas.");
          } else {
            console.error(error);
            setErrorMessage("Ocurrió un error al iniciar sesión. Inténtalo de nuevo más tarde.");
          }
        });
    }
  }

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <Paper elevation={3}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '300px',
        margin: 'auto'
      }}>
      <Icon component={AccountCircleIcon}
        sx={{
          fontSize: 60,
          color: 'white',
          marginBottom: '16px',
        }}/>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={1} >

        <TextField type="text" name="username" label="Username" variant="outlined"
          value={formData.username} onChange={handleChange}
          sx={{ 
            marginBottom: '12px',
             }}/>
        {errors.username && <Typography variant="body2" color="red">{errors.username}</Typography>}

        <TextField type="password" name="password" label="Password" variant="outlined"
          value={formData.password} onChange={handleChange}
          sx={{
            marginBottom: '16px',
            }}/>
        {errors.password && <Typography variant="body2" color="red">{errors.password}</Typography>}

        <Button type="submit"  variant="contained"
          sx={{
            backgroundColor: 'black',
            marginBottom: '16px',
            width: '75%',
            borderRadius: '20px',
            '&:hover': {
                backgroundColor: '#673FFF',
                },
            }} >
          Sign in
        </Button>

        <Button variant="contained"
          sx={{
            backgroundColor: 'black',
            marginBottom: '16px',
            width: '75%',
            borderRadius: '20px',
            '&:hover': {
                backgroundColor: '#673FFF',
                },
            }} 
            onClick={handleRegisterClick}>
          Register
        </Button>
        </Stack>
      </form>
      {userNotFound && (
        <Typography variant="body2" color="red">El usuario no existe.</Typography>
      )}
      {errorMessage && (
        <Typography variant="body2" color="red">{errorMessage}</Typography>
      )}
    </Paper>
  );
}

export default FormLogin;
