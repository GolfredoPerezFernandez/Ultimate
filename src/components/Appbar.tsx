
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import React from "react";

import ButtonMetamask from './ButtonMetamask';
import DrawerMenu from './Buttons/DrawerMenu';

import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import DropDownMenu from './DropDownMenu';


let Logo = require("../../assets/logo.png");


let polygon = require("../../assets/polygon.png");



export default function AppBarr(props : any )  {
  
  let navigate = useNavigate();


return ( 
    
<AppBar 
position="sticky" 
sx={{
  // background:'#16151A',
  background: 'black',
  backdropFilter: 'blur( 4px )'
}} 
>
  <Stack 
  direction="row"
  justifyContent="space-between" 
  alignItems="center" 
  height={{xs: 70, sm: 70, md:70}}
  mt={1}
  mx={{xs:2, sm:5, md:5, lg:2, xl:2}}
  >

    <Box 
      onClick={() => navigate("/")}
      sx={{
        width: 200,
        height: 70,
      }}
    >
      <CardMedia
      component="img"
      image={Logo}
      alt="Logo"
      sx={{
        width: '100%',
        height:'100%',
        objectFit:'contain',
        cursor: 'pointer',
      }}
      />
    </Box>

    <Stack direction='row' spacing={2} sx={{justifyContent:'center', alignItems:'center'}}>

    <Box sx={{ display:  {xs:'block', sm:'block', md:'block', lg:'block', xl:'block'}}}>

    {props.ethAddress!==""?   
            <Stack direction="row" spacing={1} sx={{justifyContent:'center', alignItems:'center'}}>
           
              <DropDownMenu 
              setEthAddress={props.setEthAddress } 
              userAddress={props.ethAddress } 
              />
              
              <CardMedia
            component="img"
            image={polygon}
            alt="Logo"
            sx={{width: {xs:40, sm:'none', md:50, lg:50, xl:50}, objectFit:'cover',}}
            />  
            </Stack>   
              :
            <Stack direction="row" spacing={1} sx={{justifyContent:'center', alignItems:'center'}}>
              <Box sx={{ display: {xs:'none', sm:'block', md:'block', lg:'block', xl:'block'} }}> 
           
              <ButtonMetamask/>
              </Box> 
              <CardMedia
            component="img"
            image={polygon}
            alt="Logo"
            sx={{width: {xs:40, sm:'none', md:50, lg:50, xl:50}, objectFit:'cover',}}
            />  
            </Stack>}

      
    </Box>
{/* 
      <Box sx={{ display:  {xs:'block', sm:'block', md:'block', lg:'block', xl:'block'}}}>
        <DrawerMenu/>
      </Box>
 */}
    </Stack>

  </Stack>
</AppBar>

  );
}


