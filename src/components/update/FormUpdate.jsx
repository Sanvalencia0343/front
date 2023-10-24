import React, { useEffect } from 'react';
import { Box, Paper, TextField, Button, Icon, Stack, Grid, Typography } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { getUserById, updateUser } from '../../services/userService';
import { useParams, useNavigate } from 'react-router-dom';
import {useUpdate} from '../../hooks/useUpdate'

const FormUpdate = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const { formData, setFormData, errors, handleChange, validateForm } = useUpdate();


  useEffect(() => {
    getUserById(userId)
      .then((response) => {
        const {id,fullname, email, phone, username} = response;
        setFormData({id,fullname, email, phone, username});
      })
      .catch((error) => {
        console.error('Error al obtener datos del usuario:', error);
      });
  }, [userId]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      updateUser(formData).then((response) => {
        if (response) {
          navigate('/home');
        }
      });
      console.log('El Usuario se actualizó correctamente');
    } 
  };

  return (
    <Box sx={{ paddingTop: '50px' }}>
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
          component={AutorenewIcon}
          sx={{
            fontSize: 60,
            color: 'black',
            marginBottom: '16px',
          }}
        />
        <h2>UPDATE</h2>
        <form onSubmit={handleSubmit}>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                {/* Primeros dos campos */}
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
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Otros dos campos */}
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
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default FormUpdate;
