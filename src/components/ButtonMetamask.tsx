import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';

import CircularProgress from '@mui/material/CircularProgress';
import _ from 'lodash';

import { useMoralis, useMoralisWeb3Api } from "react-moralis";
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#DF4A32',
  backgroundColor: 'white',
  width: 160,
  [theme.breakpoints.down(600)]: {
    width: 140,
  },
  [theme.breakpoints.down(400)]: {
    width: 100,
  },
  [theme.breakpoints.down(300)]: {
    width: 40,
  },
  height:60,
  borderRadius:12,
  fontFamily:"Poppins_600SemiBold",
  '&:hover': {
    backgroundColor: grey[700],
  }, 
}));

export default function ButtonMetamask(props) {

  const { authenticate, isAuthenticated,chainId, user,Moralis,isWeb3Enabled,enableWeb3 } = useMoralis();
  const [authenticated,setAuth]=React.useState("Authenticate")
  const [state, setState] = React.useState('idle');

  
  const [isLoading, setLoading] = React.useState(false);
  
const Web3API = useMoralisWeb3Api();

  const onClickHandler= async ()=> {   
    setLoading(true)
    console.log("bienvenido")
    setState('loading');
    setAuth('loading')
    
  await enableWeb3()
console.log(chainId)
if(chainId!=="137"){

const chainId2 = 137;
const chainName = "Polygon";
const currencyName = "Matic";
const currencySymbol = "Matic";
const rpcUrl = "https://polygon-rpc.com";
const blockExplorerUrl = "https://polygonscan.com/";

await Moralis.addNetwork(
 chainId2,
 chainName,
 currencyName,
 currencySymbol,
 rpcUrl,
 blockExplorerUrl
);
}
const CHAIN2 = await Moralis.chainId;
 


if (CHAIN2 !== '0x89') {

await Moralis.switchNetwork('0x89').then(()=>{


});

}

    
    /* if (chainId !== '0x89') {
     CurrentUserStore.setLogin(false)
     CurrentUserStore.setLoading(false)
     return
    }
    */

   /* 
   await Moralis.authenticate({ type:'sol' }).then(async (user: any) => {

let email = user.get('email')
let username = user.get('username')
let createdAt = user.get('createdAt')
let sessionToken = user.get('sessionToken')
let updatedAt = user.get('updatedAt')
let address = user.get('ethAddress')
CurrentUserStore.setUser(username, email, createdAt, sessionToken, updatedAt, '', address)

CurrentUserStore.setLoading(true)
   return

})}  */

try{
 
  
  await authenticate({  
    signingMessage: "Welcome To ULTIMATE NFT." }).then(async (user: any) => {
      console.log("Success")
      try{


if(user){
  let address = user.get('ethAddress')
  props.setEthAddress(address)
  console.log("Success")

  setLoading(false)
try{
}catch(e){
  setLoading(false)
  console.log(e.message)
}


    }

    return
        
      }catch {

        setLoading(false)
      }
}) 
} catch {
  setAuth('Authenticate')
    
    setState('idle');
    setLoading(false)
}
}

const Web3Api = useMoralisWeb3Api();
let navigate = useNavigate();

function handleClickLoginIn() {navigate("/home")}

  return ( <Button  startIcon={<CardMedia
    sx={{ width: { xs:25, sm:26, md: 28, lg:28, xl:28 }, objectFit: 'cover', }}
  />} style={{flexDirection:"row",width:300,justifyContent:"center",alignItems:"center"}} variant="contained" >
      {!isLoading?
      <Box  onClick={onClickHandler}  style={{flexDirection:"row",width:300,justifyContent:"center",alignConten:"center",alignItems:"center"}}>
        
     
      <Typography sx={{color:"black", alignSelf:"center",fontFamily:"Poppins_600SemiBold"}}>
       
      Connect Wallet
    </Typography>
      </Box > :
      <CircularProgress color="secondary" size="1.5rem" />}
     
      
    </Button>)}



