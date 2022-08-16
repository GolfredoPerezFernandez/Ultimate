import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import ButtonPrimary from '@components/buttons/button-primary';


export default function Home() {

  return (
    <Box sx={{mt:12, ml:5}}>
        <Box sx={{width:'100%', }}>

<Grid
  container
  my={8}
  justifyContent="center"
  alignItems="center"
>

    <Grid  item xs={12} sm={12} md={7} lg={7} sx={{alignSelf:'flex-start', }}>
        
        <Stack sx={{  width:'100%', borderRadius:2, border:'0.5px solid rgba(255, 255, 255, 0.16)', backgroundColor:'#181a21' }}> 
       
            <Stack
            sx={{ alignSelf: 'center', mt:2, mb:4}}
            >
                <Typography sx={{  fontFamily: "Orbitron_900Black", color: "#FFFFFF", alignSelf: 'center', fontSize: 45, }}>
                    hola
                </Typography >

            </Stack>

            <Stack>
                <Stack
                sx={{
                    width:522,
                    height:522,
                    alignSelf: 'center',
                    borderRadius: '5px', 
                    border: '0.2px solid rgba(255, 255, 255, 0.16)',
                    backgroundColor: '#14151A',
                }}
                >
                    <CardMedia
                        width='100%'
                        height='100%'
                        component="img"
                        image={ 'https://cdn.domestika.org/c_fit,dpr_1.0,f_auto,t_base_params,w_610/v1618566365/content-items/007/687/736/oscarllorens-original.jpeg?1618566365'}
                        alt="Paella dish"
                        sx={{
                            borderRadius: '5px',
                            objectFit: 'cover',
                        }}
                    />

                </Stack>
            </Stack>

            <Stack my={5} direction='row' sx={{alignSelf:'center',  width:'522px', height:'131px', borderRadius:'5px', border:'0.5px solid rgba(255, 255, 255, 0.16)', backgroundColor:'rgba(255, 255, 255, 0.07)' }}> 
                <Stack
                    sx={{
                        width:107,
                        height:107,
                        alignSelf: 'center',
                        my: 2,
                        mx:2,
                        borderRadius: '5px', 
                        border: '0.2px solid rgba(255, 255, 255, 0.16)',
                        backgroundColor: '#14151A',
                    }}
                >
                    <CardMedia
                    component="img"
                    width='100%'
                    height='100%'
                    image={'https://cdn.domestika.org/c_fit,dpr_1.0,f_auto,t_base_params,w_610/v1618566365/content-items/007/687/736/oscarllorens-original.jpeg?1618566365'}
                    alt="Paella dish"
                    sx={{
                        borderRadius: '5px',
                        objectFit:'cover',
                    }}
                    />
                        
                </Stack>
                
                <Stack sx={{maxWidth: 380, justifyContent:'space-between', my: 1 , mr: 2 ,}}>

                    <Typography 
                    sx={{
                        fontFamily:"Orbitron_900Black",
                        color:"#fff",
                        fontSize:20,
                    }}>
                        hola

                    </Typography>

                    <Typography 
                    sx={{
                        fontFamily:"Orbitron_600SemiBold",
                        color:"#dbdbdb",
                        fontSize:15,
                        letterSpacing: 1,
                        overflowWrap:'break-word',
                        hyphens: 'auto',
                        textJustify: 'inter-character',
                        // maxWidth: '195ch',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis'
                    }}>
                       hola
                    </Typography>

                </Stack>

            </Stack>

            <Stack
            sx={{ alignSelf: 'center', mt:2, mb:4}}
            >
                <Typography sx={{  fontFamily: "Orbitron_900Black", color: "#FFFFFF", alignSelf: 'center', fontSize: 45, }}>
                        Event Info
                </Typography >

            </Stack>

            <Stack
            sx={{width:522, alignSelf: 'center',}}
            >
                <Grid 
                    container 
                    my={2}
                    spacing={{ xs: 2, md: 3 }} 
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    justifyContent="center"
                    alignItems="center"
                    >
                        
                    <Grid  item xs={4} sm={4} md={4} lg={4} sx={{alignSelf:'flex-start', }}>

                    <ButtonPrimary
                        height='44px'
                        width='153px'
                        onClick={() => window.open(`https://${event.eventInstagram}`, "_blank") }
                        nameButton='Instagram'
                    
                    />

                    </Grid>

                    <Grid  item xs={4} sm={4} md={4} lg={4} sx={{alignSelf:'flex-start', }}>

                    <ButtonPrimary
                        height='44px'
                        width='153px'
                        onClick={() => window.open(`https://${event.evenTwitter}`, "_blank") }
                        nameButton='Twitter'
                    
                    />

                    </Grid>
                    
                    <Grid  item xs={4} sm={4} md={4} lg={4} sx={{alignSelf:'flex-start', }}>

                    <ButtonPrimary
                        target="_blank"
                        minHeight='44px'
                        minWidth='153px'
                        onClick={() => window.open(`https://${event.eventDiscord}`, "_blank") }
                        nameButton='Discord'
                    
                    />

                    </Grid>

                </Grid>

                <Grid 
                    container 
                    my={2}
                    spacing={{ xs: 1, md: 1 }} 
                    justifyContent="center"
                    alignItems="center"
                    >

                    
                    <Grid ml={2} item xs={6} sm={6} md={6} lg={4} sx={{alignSelf:'flex-start', }}>
                       
                        <ButtonPrimary
                            minHeight='44px'
                            minWidth='153px'
                            onClick={() => window.open(`https://${event.eventMarketUrl}`, "_blank") }
                            nameButton='Marketplace'
                        
                        />


                    </Grid>

                    
                    <Grid mr={2} item xs={6} sm={6} md={6} lg={4} sx={{alignSelf:'flex-start', }}>

                    <ButtonPrimary
                        minHeight='44px'
                        minWidth='153px'
                        onClick={() => window.open(`https://${event.eventWebSite}`, "_blank") }
                        nameButton='Website'
                    />

                    </Grid>

                </Grid>

            </Stack>

            <Stack
            sx={{width:522, alignSelf: 'center', my:4}}
            >
                <Grid 
                    container 
                    spacing={{ xs: 2, md: 1 }} 
                    justifyContent="center"
                    alignItems="center"
                    >
                        
                    <Grid  item xs={4} sm={4} md={4} lg={6} sx={{alignSelf:'flex-start', }}>

                        
                        <Typography sx={{  fontFamily: "Orbitron_400Regular", color: "#FFFFFF", alignSelf: 'center', fontSize: 20, }}>
                            Date: 2 / 5 / 1990
                        </Typography >


                    </Grid>

                    <Grid  item xs={4} sm={4} md={4} lg={6} sx={{alignSelf:'flex-start', }}>

                        <Typography sx={{  fontFamily: "Orbitron_400Regular", color: "#FFFFFF", alignSelf: 'center', fontSize: 20, }}>
                            Blockchain: polygon
                        </Typography >

                    </Grid>

                </Grid>

            </Stack>

            <Stack
            sx={{width:522, alignSelf: 'center', my:4}}
            >

                <Box>
                    <Typography   sx={{  fontFamily: "Orbitron_400Regular", color: "#FFFFFF", fontSize: 20, }}>
                        hola hola hola
                    </Typography >
                </Box>
          

            </Stack>


        </Stack>

    </Grid>
    


</Grid>



</Box>
    </Box>
  );
};