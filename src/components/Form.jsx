import React, { useState } from 'react';
import { Container,Box, Button, styled, TextField } from '@mui/material';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Envía el correo electrónico utilizando la API de envío de correo electrónico de tu elección.
    // Puedes usar servicios como SendGrid, Mailchimp o AWS SES.
    // Aquí se muestra un ejemplo utilizando el servicio de correo electrónico de Google.
    fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email: process.env.REACT_APP_CONTACT_EMAIL,
              },
            ],
            subject: 'Nuevo mensaje de contacto',
          },
        ],
        from: {
          email: email,
        },
        content: [
          {
            type: 'text/plain',
            value: message,
          },
        ],
      }),
    })
      .then(() => {
        // Muestra un mensaje de éxito en la página cuando el correo electrónico se haya enviado correctamente.
        alert('¡Gracias por contactarnos! Te responderemos pronto.');
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
        alert('Ocurrió un error al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.');
      });
  };

  const CustomBox = styled(Box)(({ theme }) =>({
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]:{
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
    },
  }))

  const CustomButton = styled(Button)(({ theme }) =>({
    border: '1px solid white',
    backgroundColor: '#00C7FF',
    color: 'white',
    width: '20%',
    borderRadius: '15px',
    '&:hover':{
      border: '1px solid white',
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('md')]:{
      width: '35%',
    },
    [theme.breakpoints.down('sm')]:{
      width: '50%',
    },
  }))

  return (
    <Container
    sx={{
      mx: 'auto',
      mb: 10,
    }}>
    <CustomBox sx={{mt: 10, mb: 6}} >
    <form onSubmit={handleSubmit}>
      <Box sx={{ mb: 2}}>
        <TextField
        label="Nombre"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        fullWidth
        />
      </Box>

      <Box sx={{ mb: 2}}>
        <TextField
        label="Correo electrónico"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        required
        fullWidth
        />
      </Box>

      <Box sx={{ mb: 2}}> 
        <TextField
        label="Mensaje"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        multiline
        rows={4}
        required
        fullWidth
        />
      </Box>
    </form>
    </CustomBox>
    <Box 
      sx={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          gap:'1rem',
          mt: 12,
        }}>
    <CustomButton type="submit" variant="contained" color="primary">
        Enviar
      </CustomButton>
    </Box>
    </Container>
  );
}

export default Form;


//   const onSubmit = async (data) => {
//     const { name, email, message } = data;
  
//     const emailContent = `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`;
  
//     try {
//       await fetch('/send-email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           to: 'tu-correo@gmail.com',
//           subject: 'Nuevo mensaje de contacto',
//           text: emailContent,
//         }),
//       });
  
//       alert('¡Correo electrónico enviado con éxito!');
//     } catch (error) {
//       console.error(error);
//       alert('Ha ocurrido un error al enviar el correo electrónico. Por favor, inténtalo de nuevo.');
//     }
//   };  

 
