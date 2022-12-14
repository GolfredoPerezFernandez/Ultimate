import React, {useEffect, useContext} from 'react';
import { makeStyles } from "@material-ui/core";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

const avalanche=require('../../../../assets/avalanche.png');

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
  useEffect(()=>{
    async function init(){
      setBlockchain("Polygon")
    }

    init()
  },[])

  function GoToHome() {}
  function GoToCrono() {}
  function GoToBinance() {}
  function GoToEthereum() {}
  function GoToPolygon() {}
  function GoToSolana() {}
  function GoToTezos() {}

  const [blockchain, setBlockchain] = React.useState('Polygon');
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
            value={'Crono'}
            onClick={GoToCrono}
            sx={{ 
              fontFamily:"Orbitron_600SemiBold",
            }}
          >
            <ListItemIcon>
              <img src={avalanche} height={15} width={15} style={{ objectFit:'cover'}}/>
            </ListItemIcon>
            Avalanche 
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
            Cronos
          </MenuItem> 
{/* 
          <MenuItem
            value={'BinanceSmartChain'}
            onClick={GoToBinance}
            sx={{ 
              fontFamily:"Orbitron_600SemiBold",
              // color:"#000",
            }}
          >
            <ListItemIcon>
              <img src={LogoBinance} height={20} width={20} style={{ objectFit:'contain'}}/>
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
 */}
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
                
        </Select>
      </FormControl>

    </Box>
  );
};

export default Blockchains;
