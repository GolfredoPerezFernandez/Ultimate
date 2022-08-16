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
  color: theme.palette.getContrastText("#637bfe"),
  backgroundColor: "#637bfe",
  height: 50,
  borderRadius: 12,
  fontFamily: "Poppins_600SemiBold",
  fontSize: 14,
  "&:hover": {
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

  return ( <Box  style={{flexDirection:"row",width:120,justifyContent:"center",alignItems:"center"}} >
      {!isLoading?     <ColorButton
      sx={{fontFamily: "Orbitron_700Bold", color: "#fff", alignSelf: "center", my: 2 }}
      onClick={onClickHandler}  
      variant="contained"
    >
      CONNECT
    </ColorButton>
    :
      <CircularProgress color="secondary" size="1.5rem" />}
     
      
    </Box>)}



