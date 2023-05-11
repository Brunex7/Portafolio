import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Link } from "react-scroll";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';



const Navbar = () => {

  const CustomBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alingItem: 'center',
    justifyContent: 'center',
    gap:'1rem',
    [theme.breakpoints.down('sm')]:{
        marginTop:'2rem',
    },
}));
const CustomToolbar = styled(Box)(({theme}) =>({
    display: 'flex',
    alingItem: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]:{
        flexDirection: 'colum'
    },
}));

  return ( 
  <Box sx={{flexGrow: 1, px:5, py:2, maxWidth:'1200px', mx:'auto'}}>
    <AppBar position='static' style={{background:'transparent', boxShadow: 'none'}}>
        <CustomToolbar>
            <Box sx={{display:'flex', justifyContent: 'center', alignItems:'center', gap: '1rem'}}>
              <Box>
                  <Typography variant='h5' component='div' sx={{flexGrow: 1, fontWeight: 'bold', }}>
                      /BR/
                  </Typography>
              </Box>
            </Box>

                <CustomBox>
                  <Link to='home' className='link' smooth>
                    <HomeIcon />
                  </Link>
                  <Link to='about' className='link' smooth>
                      <PersonIcon />
                  </Link>
                  <Link to='experience' className='link' smooth>
                      <LibraryBooksIcon />
                  </Link>
                </CustomBox>
        </CustomToolbar>
    </AppBar>
  </Box>
)
};

export default Navbar;
