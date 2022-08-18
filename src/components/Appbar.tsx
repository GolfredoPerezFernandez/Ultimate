
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
  justifyContent={{xs:"center", sm:"space-between", md:"space-between", lg:"space-between", xl:"space-between"}}
  alignItems="center" 
  height={{xs: 70, sm: 70, md:70}}
  mt={1}
  mx={{xs:2, sm:5, md:5, lg:2, xl:2}}
  >

      <CardMedia
      onClick={() => navigate("/")}
      component="img"
      image={Logo}
      alt="Logo"
      sx={{
        width: '160px',
        height:'70px',
        objectFit:'contain',
        cursor: 'pointer',
      }}
      />

    <Stack direction='row' spacing={{xs:0,sm:1,md:2,lg:2, xl:2}} sx={{width:120,justifyContent:'center', alignItems:'center'}}>

    <Box sx={{ display:  {xs:'block', sm:'block', md:'block', lg:'block', xl:'block'}}}>

    {props.ethAddress!==""?   
            <Stack direction="row" spacing={1} sx={{justifyContent:'center', alignItems:'center'}}>
           
              <DropDownMenu 
              setEthAddress={props.setEthAddress } 
              userAddress={props.ethAddress } 
              />
              
            </Stack>   
              :
            <Stack direction="row" sx={{width:100,justifyContent:'center', marginRight:5,alignItems:'center'}}>
           
              <ButtonMetamask/>
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


