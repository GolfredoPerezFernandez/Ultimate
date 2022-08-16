import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import {useNavigate } from "react-router";
import Grid from '@mui/material/Grid';

import ButtonsSocialMedia from '../components/ButtonsSocialMedia'    

 

let ethereum = require("../../assets/ethereum.png");
let avalanche = require("../../assets/avalanche.png");

let polygon = require("../../assets/polygon.png");
let binance = require("../../assets/binance.png");
let cronos = require("../../assets/chronos.svg");

export default function Footer({width,height}) {


  let navigate = useNavigate();

  function handleClickHome() { navigate("/") }
  function handleClickObras() { navigate("/NFTS") }
  function handleClickArtistas() {navigate("/users")}
  function handleClickColecciones() {navigate("/Collections")}

// Fonts import

  return (
<Stack style={{backgroundColor:'black',marginTop:100}}>
<Typography
              sx={{
                marginLeft: 5,
                marginRight: 5,
                marginTop: 10,
                marginBottom:5,
                fontFamily: "Orbitron_900Black",
                      color: "#FFF",
                alignSelf: "center",
                fontSize: 35,
              }}
            >
          UltimateNFT will be everywhere.. 
            </Typography>
    <Stack style={{flexDirection:'row',alignItems:'center', justifyContent:'center'}} sx={{mt:{xs:10, sm:2, md:1, lg:1, xl:1}, mx:{xs:3, sm:3, md:4, lg:10, xl:10,}}}>

            <CardMedia
            component="img"
            image={polygon}
            alt="Logo"
            sx={{width: {xs:40, sm:40, md:50, lg:80, xl:80}, objectFit:'cover',}}
            />          <CardMedia
            component="img"
            image={binance}
            alt="Logo"
            sx={{marginLeft:5,marginRight:5,width: {xs:80, sm:80, md:100, lg:200, xl:200}, objectFit:'cover',}}
            />       <CardMedia
            component="img"
            image={cronos}
            alt="Logo"
            sx={{width: {xs:80, sm:80, md:100, lg:200, xl:200}, objectFit:'cover',}}
            />    
                
    </Stack>

    <Stack style={{flexDirection:'row',alignItems:'center', justifyContent:'center'}} sx={{mt:{xs:10, sm:2, md:1, lg:1, xl:1}, mx:{xs:3, sm:3, md:4, lg:10, xl:10,}}}>

    <CardMedia
            component="img"
            image={avalanche}
            alt="Logo"
            sx={{marginLeft:5,marginRight:5,width: {xs:40, sm:40, md:40, lg:60, xl:60}, objectFit:'cover',}}
            />     
                <CardMedia
            component="img"
            image={ethereum}
            alt="Logo"
            sx={{marginLeft:5,marginRight:5,width: {xs:20, sm:20, md:30, lg:40, xl:40}, objectFit:'cover',}}
            />   
    
</Stack>
             
        <Grid 
        container 
        justifyContent="center"
        alignItems="center"
        mt={20}
        mb={3}>

 

        <Grid item  xs={12} sm={6} md={3}>
          
        <Grid  style={{alignSelf:'center',justifyContent:'center',alignItems:'center'}} item  >
               <ButtonsSocialMedia/>   
              </Grid>
        <Typography
        
                            sx={{marginTop:5,
                              fontFamily: "Orbitron_700Bold",
                                    color: "#FFF",
                                    textAlign:'center',
                              fontSize: 12,
                            }}
                          >    Copyright © 2022 UltimateNFT. All Rights Reserved.   
                <Typography
                            sx={{
                              fontFamily: "Orbitron_700Bold",
                                    color: "#FFF",
                                    textAlign:'center',
                              fontSize: 12,
                            }}
                          >
                  Privacy & terms
                  </Typography >
                </Typography >
              </Grid>
       
        </Grid>
</Stack>
  );
}
