import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import { Avatar } from '@material-ui/core';

let Logo = require("../../assets/logo.png");


let polygon = require("../../assets/polygon.png");


const AboutUS = () => {


     return (

        <Stack sx={{width:'100%', my: 1 }}>
  
          <Stack
            sx={{
            alignItems: 'center', 
            justifyContent: 'center', 
            mb: 5,
            mx: {xs:3, sm:2 , md:5, lg:5 , xl:5}}}
          >

            <Stack sx={{alignSelf:'center'}}>
                
                <Typography 
                    sx={{ 
                        fontFamily:"Orbitron_900Black",color:"#FFFFFF",
                        alignSelf:'center',
                        fontSize:{xs:22, sm:26, md:40, lg:50, xl:44},   
                    }}
                >
                    Road Map
                </Typography >

            </Stack>

    
            <Grid
                container
                justifyContent="space-between"
                alignItems="flex-start"
            >    
                <Grid 
                    sx={{alignItems:'center'}}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >

                    {/* <Stack
                    direction={{xs:'column', sm:'column' , md:'row', lg:'row' , xl:'row'}}
                    spacing={4}
                    sx={{mt: 1, justifyContent:'center'}}>

                        <Stack 
                        spacing={1}
                        sx={{mr: {xs:1, sm:2 , md:5, lg:5 , xl:5}, alignSelf:'center'}}>
                            <Typography sx={{mt:1, fontFamily:"Orbitron_900Black",color:"#fff" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18},   }}>
                            Services
                            </Typography >
                            <Typography sx={{ fontFamily:"Orbitron_900Black",color:"#78777a" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18},   }}>
                            • List your event<br/>
                            • List your event, configure your information, and get verified.<br/>
                            • Promote<br/>
                            • Partnership Opportunities<br/>
                            • Actual Partnerships<br/>
                            
                            </Typography >

                        </Stack>

                        <Stack 
                        spacing={1}
                        sx={{mr: {xs:0, sm:2 , md:5, lg:5 , xl:5}}}>
                            <Typography sx={{mt:1, fontFamily:"Orbitron_900Black",color:"#fff" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18},   }}>
                             Get in Touch    
                            </Typography >
                            <Typography sx={{  fontFamily:"Orbitron_900Black",color:"#78777a" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18},   }}>
                            • Support<br/>
                            • Careers<br/>

                            </Typography >

                        </Stack>

                    </Stack>     */}
                </Grid>

            </Grid>
          </Stack>
    
        </Stack>
    );
}
export default AboutUS