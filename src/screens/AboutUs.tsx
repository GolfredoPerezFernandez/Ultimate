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
                    About Us
                </Typography >

            </Stack>

            <Grid
                direction={{xs:'column', sm:'column' , md:'row', lg:'row' , xl:'row'}}
                container
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Grid
                    sx={{
                        mt: 2,
                    }}
                    item
                    xs={10}
                    sm={12}
                    md={6}
                    lg={6}
                >

                    <Stack sx={{width:'100%', mx: {xs:1, sm:2 , md:5, lg:5 , xl:5}, alignSelf:'center'}}>
        
                        <Typography 
                           sx={{  fontFamily:"Orbitron_900Black",color:"#78777a" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18},   }}
                        >
                            Welcome to Ultimate NFT home. The future of digital creators.
                        </Typography >
        
                    </Stack>
                </Grid>
            </Grid>

            <Grid
                container
                justifyContent="space-between"
                alignItems="flex-start"
            >    
                <Grid
                    sx={{
                    mt: 2,
                    }}
                    item
                    xs={10}
                    sm={12}
                    md={6}
                    lg={6}
                >
                    <Stack sx={{width:'100%', mx: {xs:1, sm:2 , md:5, lg:5 , xl:5}, alignSelf:'center'}}>
        
                        <Typography sx={{  fontFamily:"Orbitron_900Black",color:"#78777a" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18},   }}>
                            We are a WEB 3 first tool webpage. Ultimate NFT works hard to provide a service responsibly with
                            our creators to prove our commitment, a DAO will be carried out where users will be included to
                            be part of the platform to be considered in future decision making.
                        </Typography >

                    </Stack>

                    <Stack sx={{width:'100%',mx: {xs:1, sm:2 , md:5, lg:5 , xl:5}, alignSelf:'center'}}>
            
                        <Typography sx={{mt:1, fontFamily:"Orbitron_900Black",color:"#fff" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18},   }}>
                            Quantities
                        </Typography >
                        <Typography sx={{mt:1, fontFamily:"Orbitron_900Black",color:"#78777a" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18},   }}>
                            • Number of visits per month <br/>
                            • Collections (artistic) <br/>
                            • Number of wallet collections <br/>
                        </Typography >

                    </Stack>

                    <Stack sx={{mt: 1, mx: {xs:1, sm:2 , md:5, lg:5 , xl:5}, alignSelf:'center'}}>
            
                        <Typography sx={{mt:1,fontFamily:"Orbitron_900Black",color:"#fff" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18} }}>
                            Ultimate's Story
                        </Typography >
                        <Typography sx={{  fontFamily:"Orbitron_900Black",color:"#78777a" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18} }}>
                            Two friends were talking about the common problems of the NFT collections and the artists. We
                            concluded that the problem was not the copy collections, but rather that the true creator of the
                            NFT was not recognized.
                        </Typography >

                    </Stack>
                </Grid>

                <Grid
                    item
                    xs={10}
                    sm={12}
                    md={6}
                    lg={6}
                >
                    <Box
                        sx={{                  
                            maxWidth: "500px",
                            maxHeight: "500px",
                            mx:4,
                            mt:{xs:2, sm:2, md:2, lg:0, xl:0}
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={polygon}
                            alt="Logo"
                            sx={{
                            width: "100%",
                            height: "100%",
                            alignSelf: "center",
                            objectFit: "contain",
                            cursor: "pointer",
                            mx:{xs:1, sm:2 , md:5, lg:5 , xl:5}
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>

            <Grid
                container
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Grid
                    item
                    xs={10}
                    sm={12}
                    md={6}
                    lg={6}
                    justifyContent='center'
                    alignItems='center'
                >
                    <Box
                        sx={{                  
                            maxWidth: "500px",
                            maxHeight: "300px",
                            mt:{xs:2, sm:2, md:8, lg:20, xl:20},
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={Logo}
                            alt="Logo"
                            sx={{
                            width: "100%",
                            height: "100%",
                            alignSelf: "center",
                            objectFit: "contain",
                            cursor: "pointer",
                            mx:{xs:1, sm:2 , md:5, lg:5 , xl:5}
                            }}
                        />
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={10}
                    sm={12}
                    md={6}
                    lg={6}
                >

                    <Stack sx={{mr: 1, alignSelf:'center'}}>
            
                        <Typography sx={{mt:3, fontFamily:"Orbitron_900Black",color:"#fff" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18},   }}>
                            The Leadership Team
                        </Typography >
                        <Typography sx={{mt:1, fontFamily:"Orbitron_900Black",color:"#78777a" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18},   }}>
                            • Number of visits per month <br/>
                            • Name<br/>
                            • Role in the Project<br/>
                            • Social Network (Twitter)<br/>
                            • Photo.<br/>
                            • Work Experience<br/>
                            
                        </Typography >

                    </Stack>
                        
                    <Stack sx={{mb:2, mr: {xs:1, sm:2 , md:3, lg:5 , xl:5}, alignSelf:'center'}}>
            
                        <Typography sx={{mt:5, fontFamily:"Orbitron_900Black",color:"#78777a" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18},   }}>
                        • Nombre: Sergio Girard<br/>
                        • Función en el proyecto (ocupación): Co Founder.<br/>
                        • Red social (Twitter): @Sergio_G_M<br/>
                        • Foto:<br/>
                        • Experiencia Laboral (Background): Empresario.<br/>
                        </Typography >

                    </Stack>
                </Grid>

            </Grid>

            <Grid
                container
                justifyContent="space-between"
                alignItems="flex-start"
            >    
                <Grid 
                    sx={{alignItems:'center', mx:{xs:1, sm:2 , md:5, lg:5 , xl:5}}}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >

                    <Stack
                    direction={{xs:'column', sm:'column' , md:'row', lg:'row' , xl:'row'}}
                    spacing={4}
                    sx={{justifyContent:'center'}}>

                        <Stack 
                        direction='row'
                        spacing={1}
                        sx={{mr: {xs:1, sm:2 , md:5, lg:5 , xl:5}, alignSelf:'center'}}>

                            <Typography sx={{ fontFamily:"Orbitron_900Black",color:"#78777a" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18},   }}>
                            • Nombre: FELIX SANCHEZ QUIRARTE<br/>
                            • Función en el proyecto (ocupación): INVERSIONISTA<br/>
                            • Red social (Twitter): El wero (FSANCHEZQUIRARTE)<br/>
                            • Foto:<br/>
                            • Experiencia Laboral (Background): EMPRESARIO.<br/>
                            
                            </Typography >

                        </Stack>

                        <Stack 
                        direction='row'
                        spacing={1}
                        sx={{mr: {xs:1, sm:2 , md:5, lg:5 , xl:5}, alignSelf:'center'}}>
                
                            <Typography sx={{ fontFamily:"Orbitron_900Black",color:"#78777a" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18},   }}>
                            • Nombre: German Palma<br/>
                            • Función en el proyecto (ocupación):<br/>
                            • Red social (Twitter): <a target="_blank" href="https://twitter.com/Web3German">Web3German</a><br/>
                            • Foto:<br/>
                            • Experiencia Laboral (Background):<br/>
                            - Experience in sales with digital marketing<br/>
                            - Ex-educator on "Revolucion Latina" Investment Academy<br/>
                            - Moderator in some previous projects<br/>
                            - Current Head Mod of "Visionaires<br/>
                            </Typography >

                        </Stack>

                    </Stack>    
                </Grid>

            </Grid>
            
            <Stack sx={{alignSelf: 'center'}}>
                <Grid
                    container
                >    
                    <Grid 
                        sx={{alignItems:'center',mt:1, mx:{xs:0, sm:2 , md:5, lg:5 , xl:5}}}
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                    >

                        <Typography sx={{ fontFamily:"Orbitron_900Black",color:"#78777a" , fontSize:{xs:16, sm:26, md:32, lg:16, xl:18},   }}>
                        • Luis Gatica.<br/>
                        • Legal advisor web3<br/>
                        • Su twitter: @LuisKikeGatica<br/>
                        • abg. y notario especializado en temas de Web3<br/>
                        
                        </Typography >

                    </Grid>

                </Grid>
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

                    <Stack
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

                    </Stack>    
                </Grid>

            </Grid>
          </Stack>
    
        </Stack>
    );
}
export default AboutUS