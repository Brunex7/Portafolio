import { Box } from '@mui/material';
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from 'react'
import { Link } from '@material-ui/core';

function Pages() {
  return (
    <Box> 
        <Box sx={{display: 'flex', alignItems: 'center', mb:2 }}>
        <GitHubIcon sx={{mr: 2, color: 'white'}}/>
        <Link href="https://github.com/Brunex7" target="_blank">
          GitHub
        </Link>
      </Box>

      <Box sx={{display: 'flex', alignItems: 'center', }}>
        <EmailIcon sx={{mr: 2, color: 'white'}}/>
        <Link href="mailto:brunoromero200@gmail.com" target="_blank" >
          Email
        </Link>
      </Box>

      <Box sx={{display: 'flex', alignItems: 'center', mt: 2 }}>
        <LinkedInIcon sx={{mr: 2, color: 'white'}}/>
        <Link href="https://www.linkedin.com/in/bruno-romero-685188255/" target="_blank">
          LinkedIn
        </Link>
      </Box>
</Box>
  )
}

export default Pages