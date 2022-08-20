import React, {useEffect, useContext} from 'react';
import { makeStyles } from "@material-ui/core";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';


import {
  LogoAlgorand, 
  LogoBinance, 
  LogoBlockchain, 
  LogoCardano,
  LogoCrono,
  LogoEthereum,
  LogoPolygon,
  LogoSolana,
  LogoTezos
} from '../../../Img/exports-images';


const dropdownStyles = makeStyles({
  underline: {
    borderBottom: "0px solid rgba(0,0,0,0) !important",
    "&:hover": {
      borderBottom: "0px solid rgba(0,0,0,0)"
    }
  }
});

const Blockchains = (props: any) => {

 
  let navigate = useNavigate();
  const classSelect = dropdownStyles();

  function GoToHome() {navigate("/")}
  function GoToAlgorand() {navigate("/algorand")}
  function GoToCardano() {navigate("/cardano")}
  function GoToCrono() {navigate("/crono")}
  function GoToBinance() {navigate("/binance")}
  function GoToEthereum() {navigate("/ethereum")}
  function GoToPolygon() {navigate("/polygon")}
  function GoToSolana() {navigate("/solana")}
  function GoToTezos() {navigate("/tezos")}

  const [blockchain, setBlockchain] = React.useState('Home');
  console.log('blockchain', blockchain)

  const handleChange = (event: any) => {
    setBlockchain(event.target.value);
  };

  return (

    <Box sx={{display: props.display}}>          
      <FormControl  fullWidth>
        <Select
          variant="standard"
          sx={{
          width: 220,
          height: 30,
          color: "#fff",
          fontFamily:"Orbitron_600SemiBold",
          "& .MuiSvgIcon-root": {
              color: "#fff",
          }
          }}
          value={blockchain}
          onChange={handleChange}
          defaultValue='Home'
        >

          <MenuItem
            value={'Home'}
            onClick={GoToHome}
            sx={{ 
              fontFamily:"Orbitron_600SemiBold",
              alignText:"center"              
            }}
          >
            <ListItemIcon>
              <img src={LogoBlockchain} height={15} width={15} style={{ objectFit:'contain'}}/>
            </ListItemIcon>
            All Blockchains
          </MenuItem> 

          <MenuItem
            value={'Algorand'}
            onClick={GoToAlgorand}
            sx={{ 
              fontFamily:"Orbitron_600SemiBold",
            }}
          >
            <ListItemIcon>
              <img src={LogoAlgorand} height={15} width={15} style={{ objectFit:'cover'}}/>
            </ListItemIcon>
            Algorand 
          </MenuItem> 

          <MenuItem
            value={'Cardano'}
            onClick={GoToCardano}
            sx={{ 
              fontFamily:"Orbitron_600SemiBold",
              // color:"#000",
            }}
          >
            <ListItemIcon>
              <img src={LogoCardano} height={15} width={15} style={{ objectFit:'contain'}}/>
            </ListItemIcon>
            Cardano 
          </MenuItem> 

          <MenuItem
            value={'Crono'}
            onClick={GoToCrono}
            sx={{ 
              fontFamily:"Orbitron_600SemiBold",
              // color:"#000",
            }}
          >
            <ListItemIcon>
              <img src={LogoCrono} height={15} width={15} style={{ objectFit:'contain'}}/>
            </ListItemIcon>
            Crono 
          </MenuItem> 

          <MenuItem
            value={'BinanceSmartChain'}
            onClick={GoToBinance}
            sx={{ 
              fontFamily:"Orbitron_600SemiBold",
              // color:"#000",
            }}
          >
            <ListItemIcon>
              <img src={LogoBinance} height={15} width={15} style={{ objectFit:'contain'}}/>
            </ListItemIcon>
            Binance Smart Chain 
          </MenuItem> 

          <MenuItem
            value={'Ethereum'}
            onClick={GoToEthereum}
            sx={{ 
              fontFamily:"Orbitron_600SemiBold",
              // color:"#000",
            }}
          >
            <ListItemIcon>
              <img src={LogoEthereum} height={15} width={15} style={{ objectFit:'contain'}}/>
            </ListItemIcon>
            Ethereum 
          </MenuItem> 

          <MenuItem
            value={'Polygon'}
            onClick={GoToPolygon}
            sx={{ 
              fontFamily:"Orbitron_600SemiBold",
              // color:"#000",
            }}
          >
            <ListItemIcon>
              <img src={LogoPolygon} height={15} width={15} style={{ objectFit:'contain'}}/>
            </ListItemIcon>
            Polygon 
          </MenuItem>  

          <MenuItem
            value={'Solana'}
            onClick={GoToSolana}
            sx={{ 
              fontFamily:"Orbitron_600SemiBold",
              // color:"#000",
            }}
          >
            <ListItemIcon>
              <img src={LogoSolana} height={15} width={15} style={{ objectFit:'contain'}}/>
            </ListItemIcon>
            Solana 
          </MenuItem>  
      
          <MenuItem
            value={'Tezos'}
            onClick={GoToTezos}
            sx={{ 
              fontFamily:"Orbitron_600SemiBold",
              // color:"#000",
            }}
          >
            <ListItemIcon>
              <img src={LogoTezos} height={15} width={15} style={{ objectFit:'contain'}}/>
            </ListItemIcon>
            Tezos 
          </MenuItem>                       
        </Select>
      </FormControl>

    </Box>
  );
};

export default Blockchains;
