
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

import DropDownBlockchains from './buttons/button-header/dropdown-blockchains';

import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import DropDownMenu from './DropDownMenu';


let Logo = require("../../assets/logo.png");


import { useMoralis } from "react-moralis";

let polygon = require("../../assets/polygon.png");


import * as abi from "./abi";
import { Linking } from 'react-native';

export default function AppBarr(props : any )  {
  const {
    authenticate,
    isAuthenticated,
    isWeb3Enabled,
    Moralis,
    enableWeb3,
    user,
  } = useMoralis();
  let navigate = useNavigate();
const [balance,setBalance]=React.useState("")
React.useEffect(()=>{
  async function init(){
  if (isWeb3Enabled) {
    if(user){
      
      if(props.ethAddress!==""){
  const options3 = {
    contractAddress: "0x301d135E85FA8C8839Ba738eA4Cc9868Cab520Bd",
    functionName: "balanceOf",
    abi: abi.token,
    params: { account: props.ethAddress},
  };
  const balanceOf = await Moralis.executeFunction(options3);
  setBalance(Moralis.Units.FromWei(balanceOf))
}}
}}
init()
},[isWeb3Enabled,user])



function GotoBenefits() {navigate("/benefits")}
function GotoRoadMap() {navigate("/road-map")}
function GotoAboutUs() {navigate("/about-us")}
function GotoWhitepaper() {Linking.openURL("https://ultimate-marketplace.vercel.app/")}
function GotoMarketplace() {navigate("/whitepaper")}


return ( <AppBar 
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
    <Typography
      sx={{fontFamily: "Orbitron_700Bold", fontSize:14,color: "#fff", alignSelf: "center",  }}
      onClick={()=>navigate("/")}  
    >
      HOME
    </Typography>
    <Typography
         sx={{fontFamily: "Orbitron_700Bold", fontSize:14,color: "#fff", alignSelf: "center",  }}
         onClick={()=>GotoBenefits()}  
       >
         BENEFITS
       </Typography>
    <Box>  
      <DropDownBlockchains
        display={{ xs: 'none', sm: 'none', md: 'block' }}
      />   
    </Box>

    <Typography
      sx={{fontFamily: "Orbitron_700Bold", fontSize:14,color: "#fff", alignSelf: "center",  }}
      onClick={()=>GotoRoadMap()}  
    >
      ROAD MAP
    </Typography>
    <Typography
      sx={{fontFamily: "Orbitron_700Bold", fontSize:14,color: "#fff", alignSelf: "center",  }}
      onClick={()=>GotoWhitepaper()}  
    >
      MARKETPLACE
    </Typography>
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
            <Stack direction="row" sx={{width:100,justifyContent:'center', marginRight:10,alignItems:'center'}}>
           
              <ButtonMetamask 
              setDeposit={props.setDeposit } 
              setPending={props.setPending } 
              setEthAddress={props.setEthAddress } 
              userAddress={props.ethAddress } />
            </Stack>}

      
    </Box>
    </Stack>

  </Stack>
</AppBar>

  );
}


