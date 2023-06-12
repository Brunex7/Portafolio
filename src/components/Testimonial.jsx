
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
      Hola, mi nombre es Bruno Romero. 
      Completé mis estudios en el Bootcamp de SoyHenry en marzo de 2023. Actualmente, continúo mi aprendizaje de manera autodidacta, explorando nuevas tecnologías y llevando a cabo nuevos proyectos.
      </Typography>
      
      <Typography variant="body1" sx={{ color: 'white', mb: 2}}>
      Soy un desarrollador Full Stack con experiencia en Diseño Gráfico, el cual he estudiado de manera autónoma. Esta combinación me ha permitido gestionar mi tiempo de manera efectiva y mejorar mis habilidades blandas, ya que he tenido que buscar y trabajar con mis propios clientes. Aunque me especializo en Front-end, también cuento con conocimientos en Back-end.

      Mis habilidades incluyen el dominio de metodologías ágiles, el uso de GIT, la estructura de datos, los algoritmos, los frameworks CSS y las herramientas de diseño como Illustrator y Photoshop. Poseo experiencia en el desarrollo de Front-end y Back-end, así como en la arquitectura de datos, utilizando tecnologías como JavaScript, React, Redux, Node, Express, SQL, HTML, CSS y Git. Soy hábil para resolver problemas, me adapto rápidamente a nuevos desafíos y disfruto trabajar en equipo.

      Además, tengo un nivel de inglés A2.
      </Typography>
      
      <Typography variant="body1" sx={{ color: 'white', mb: 2}}>
      Estoy entusiasmado por asumir nuevos desafíos y adquirir más experiencia para seguir creciendo como profesional en el apasionante mundo de la programación. Durante un año, me dediqué al diseño de manera autónoma, colaborando tanto con clientes propios como con una Community Manager.

      Espero poder contribuir con mis habilidades y conocimientos en futuros proyectos y seguir progresando en este fascinante campo.
      </Typography>
      
      <Typography variant="body2">
        <span style={{color: '#33C7FF', fontWeight: 'bold'}}> Full Stack Developer</span>
      </Typography>

     
    </ Box>
  )
};

export default Testimonial;
