import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import { Avatar } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

let Logo = require("../../assets/logo.png");

import {BgRoadMap} from '../Img/exports-images'

let polygon = require("../../assets/polygon.png");

function MediaControlCardRightImg(props: any) {
    const theme = useTheme();
  
    return (
      <Card sx={{maxWidth: 500, display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5" sx={{ fontFamily:"Orbitron_900Black"}}>
                {props.title}
            </Typography>
            {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                {props.subTitle}
            </Typography> */}
          </CardContent>

          <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            {props.titleDescription}
          </Typography> */}
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily:"Orbitron_700Bold"}}>
            {props.description}
          </Typography>
        </CardContent>
          {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box> */}
        </Box>
        <CardMedia
          component="img"
          sx={{ maxWidth: 151 }}
          image={props.link}
          alt="Live from space album cover"
        />
      </Card>
    );
}

function MediaControlCardLeftImg(props: any) {
    const theme = useTheme();
  
    return (
      <Card sx={{maxWidth: 500, display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ maxWidth: 151 }}
          image="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/01/nft-2576437.jpg"
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5"sx={{ fontFamily:"Orbitron_900Black"}}>
                {props.title}
            </Typography>
            {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                {props.subTitle}
            </Typography> */}
          </CardContent>

          <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            {props.titleDescription}
          </Typography> */}
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily:"Orbitron_700Bold"}}>
            {props.description}
          </Typography>
        </CardContent>
          {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box> */}
        </Box>
      </Card>
    );
}

const RoadMap = () => {

     return (

        <Stack 
        sx={{
            width:'100%',
            height: '100%', 
            mt: 2,
        }}
        >
  
          <Stack
            sx={{
            alignItems: 'center', 
            justifyContent: 'center',
            mb:{xs: 5, sm: 5, md: 10, lg:10, xl:10},
            mx: {xs:1, sm:2 , md:2, lg:5 , xl:5}}}
            
          >
            <Stack 
                sx={{
                    mt:{xs: 0, sm: 0, md: 0, lg: 25, xl: 25},
                    alignSelf:'center', 
                    width: {xs: 55, sm: 55, md: 55, lg: 55, xl: 55}, 
                    height: {xs: 0, sm: 0, md: 0, lg: 800, xl: 800},
                    position: 'absolute',
                    zIndex: -1,
                    display: {xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block'}
                }}
            >

                <CardMedia
                component="img"
                sx={{ width: 55, height: '100%' }}
                image={BgRoadMap}
                alt="Live from space album cover"
                />
            </Stack>

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

            <Stack sx={{mt: {xs: 5, sm: 5, md: 15, lg:15, xl:15}, alignSelf:'center'}}>
                <Grid
                    container
                    justifyContent={{xs:'center', sm: 'center', md: 'center', lg: 'space-between', xl:'space-between'}}
                    alignItems="flex-start"
                    sx={{width:'100%',}}
                >    
                    <Grid 
                        sx={{ alignItems:'center'}}
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        lg={5}
                    >
                        <MediaControlCardLeftImg
                        title='TOKEN RELEASE'
                        description='Lizards are a widespread group of squamate reptiles, 
                        with over 6,000 species, ranging across all continents except AntarcticaMac Miller'
                        link="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/01/nft-2576437.jpg"
                        />

                    </Grid>

                    <Grid 
                        sx={{alignItems:'center'}}
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        lg={5}
                        mt={5}
                    >
                
                        <MediaControlCardRightImg
                        title='TOKEN STAKING'
                        description='Lizards are a widespread group of squamate reptiles, 
                        with over 6,000 species, ranging across all continents except AntarcticaMac Miller'
                        link="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/01/nft-2576437.jpg"
                        />

                    </Grid>

                </Grid>
            </Stack>

            <Stack sx={{mt: 8, alignSelf:'center'}}>
                <Grid
                    container
                    justifyContent={{xs:'center', sm: 'center', md: 'center', lg: 'space-between', xl:'space-between'}}
                    alignItems="flex-start"
                    sx={{width:'100%',}}
                >    
                    <Grid 
                        sx={{ alignItems:'center'}}
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        lg={5}
                    >
                        <MediaControlCardLeftImg
                        title='MARKETPLACE'
                        description='Lizards are a widespread group of squamate reptiles, 
                        with over 6,000 species, ranging across all continents except AntarcticaMac Miller'
                        link="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/01/nft-2576437.jpg"
                        />

                    </Grid>

                    <Grid 
                        sx={{alignItems:'center'}}
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        lg={5}
                        mt={5}

                    >
                
                        <MediaControlCardRightImg
                        title='NFT STAKING'
                        description='Lizards are a widespread group of squamate reptiles, 
                        with over 6,000 species, ranging across all continents except AntarcticaMac Miller'
                        link="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/01/nft-2576437.jpg"
                        />

                    </Grid>

                </Grid>
            </Stack>
                    <Stack sx={{mt: 8, alignSelf:'center'}}>
                <Grid
                    container
                    justifyContent={{xs:'center', sm: 'center', md: 'center', lg: 'space-between', xl:'space-between'}}
                    alignItems="flex-start"
                    sx={{width:'100%',}}
                >    
                    <Grid 
                        sx={{ alignItems:'center'}}
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        lg={5}
                    >
                        <MediaControlCardLeftImg
                        title='LOTTERY'
                        description='Lizards are a widespread group of squamate reptiles, 
                        with over 6,000 species, ranging across all continents except AntarcticaMac Miller'
                        link="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/01/nft-2576437.jpg"
                        />

                    </Grid>

                    <Grid 
                        sx={{alignItems:'center'}}
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        lg={5}
                        mt={5}

                    >
                
                        <MediaControlCardRightImg
                        title='CASINO GAMES'
                        description='Lizards are a widespread group of squamate reptiles, 
                        with over 6,000 species, ranging across all continents except AntarcticaMac Miller'
                        link="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/01/nft-2576437.jpg"
                        />

                    </Grid>

                </Grid>
            </Stack>
            <Stack sx={{mt: 8, alignSelf:'center'}}>
                <Grid
                    container
                    justifyContent={{xs:'center', sm: 'center', md: 'center', lg: 'space-between', xl:'space-between'}}
                    alignItems="flex-start"
                    sx={{width:'100%',}}
                >    
                    <Grid 
                        sx={{ alignItems:'center'}}
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        lg={5}
                    >
                        <MediaControlCardLeftImg
                        title='VR METAVERSE MULTICHAIN DEVELOPMENT'
                        description='Lizards are a widespread group of squamate reptiles, 
                        with over 6,000 species, ranging across all continents except AntarcticaMac Miller'
                        link="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/01/nft-2576437.jpg"
                        />

                    </Grid>

                    <Grid 
                        sx={{alignItems:'center'}}
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        lg={5}
                        mt={5}

                    >
                
                        <MediaControlCardRightImg
                        title='CHARITY PROGRAM'
                        description='Lizards are a widespread group of squamate reptiles, 
                        with over 6,000 species, ranging across all continents except AntarcticaMac Miller'
                        link="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/01/nft-2576437.jpg"
                        />

                    </Grid>

                </Grid>
            </Stack>
          </Stack>
    
        </Stack>
    );
}
export default RoadMap