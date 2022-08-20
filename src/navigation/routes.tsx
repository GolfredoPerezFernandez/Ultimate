import * as React from 'react';
import {Routes, Route, Link } from "react-router-dom";
import { useMoralis } from 'react-moralis';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';

import ParticlesBg from 'particles-bg';
import Appbar from '@components/Appbar';

import {ImageBackground, mageBackground } from "react-native";
const Home = React.lazy(() => import('@screens/Home'));
const Footer = React.lazy(() => import('@screens/Footer'));

const AboutUs = React.lazy(() => import('@screens/AboutUs'));
const RoadMap = React.lazy(() => import('@screens/RoadMap'));


let Background = require("../../assets/background.png");

let polygon = require("../../assets/logo.png");

export default function Navigator() {

  const { authenticate, isAuthenticated,chainId, user,Moralis,isWeb3Enabled,enableWeb3 } = useMoralis();

  const [ethAddress, setEthAddress]=React.useState("")
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "center", // all or center or {x:1,y:1,width:100,height:100}
    color: ["random", "#ff0000"],
    cross: "dead", // cross or bround
    random: 15,  // or null,
    g: 5,    // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    }
  };
    React.useEffect(()=>{
    async function init(){
     
 if(user){
  let address =user.get("ethAddress")
  setEthAddress( address)

 } 
    }  
init()
    },[user])
     
  return (
    <React.Suspense 
    fallback={
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{backgroundColor: '#000000',width: '100%', height: '100%'}}
    >
      <CardMedia
        component="img"
        image={polygon}
        alt="Singulart Logo"
        sx={{ width: { xs: 150, sm: 150, md: 200, lg: 200, xl: 200 }, objectFit: 'cover', }}
      />
      <CircularProgress
        style={{ 'color': 'white' }}
        sx={{ m: 2 }}
        size="1.5rem"
      />
    </Grid>
    
    }>
      
      <ImageBackground
          style={{flex:1,alignSelf:'stretch'}}
          source={Background}
          >    
           <ParticlesBg type="cobweb" color="#fff" bg={true} />

        <Appbar setEthAddress={setEthAddress} ethAddress={ethAddress} />
        <Routes>
          <Route path="/" element={<Home ethAddress={ethAddress} />}/>
          <Route path="/road-map" element={<RoadMap/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>
        <Footer />
        </ImageBackground>
    </React.Suspense>
  );
};