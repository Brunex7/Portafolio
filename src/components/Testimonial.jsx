
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";



const Testimonial = () => {
  return (
    <Box 
      sx={{ 
        maxWidth: '600px', 
        position: 'relative', 
        mx: 3,
      }}
    >
      <Typography variant="body1" sx={{ color: 'white', mb: 2}}>
        Hola, soy Bruno Romero.
        Realice mis estudios en el Bootcamp de soyHenry el cual finalice en Marzo 2023.
        Actualmente continuo mis estudios de forma autodidacta, incorporando nuevas tecnologías y generando nuevos proyectos. 
      </Typography>
      <Typography variant="body1" sx={{ color: 'white', mb: 2}}>
        Full Stack Developer con background en Diseño gráfico el cual estudie de forma autónoma que me
        ayudó a manejar mis tiempos y mejorar mis habilidades blandas ya que debía conseguir mis propios
        clientes, especializado en Front-end pero con conocimientos en Back-end.
        Conocimientos en metodologías ágiles, GIT, estructura de datos, algoritmos, frameworks CSS y
        herramientas de diseño como Illustrator y Photoshop.
        Tengo experiencia en desarrollo de Front End y Back End / arquitectura de datos u otro con
        JavaScript, React, Redux, Node, Express, SQL, HTML, CSS, Git. Con Resolución de problemas,
        Adaptación en el camino y Trabajo en equipo.
        Nivel de Inglés: A2.
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', mb: 2}}>
        Tengo muchas ganas de sumar nuevos desafíos y adquirir muchas experiencias para seguir creciendo como un buen profesional y seguir progresando en este hermoso mundo que es la programación.
        Me dedique al diseño durante todo un año de manera autónoma con clientes propios y también junto con una Community Mananger. 
        </Typography>

      <Typography variant="body2">
        <span style={{color: '#33C7FF', fontWeight: 'bold'}}> Full Stack Developer</span>
      </Typography>

     
    </ Box>
  )
};

export default Testimonial;
