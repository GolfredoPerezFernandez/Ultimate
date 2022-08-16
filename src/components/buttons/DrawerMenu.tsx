import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import {  useNavigate  } from "react-router-dom";
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { styled, Theme } from '@mui/system';
import IconButton from '@mui/material/IconButton';

import { useMoralis } from "react-moralis";




const useStyles = makeStyles(() => ({
  card: {
    backgroundColor:'#0A090C',
    border: '0.5px solid #474747',
    borderRadius: 14,
    transition: '0.4s',
    '&:hover': {
      borderColor: '#676767',
    },
    width: 180,
    height:55,
    color:' #fff',
    display:'flex',
    mx:2.5
  },

}));

const ButtonHamburguer = styled(IconButton) (({ theme }) => ({
  color: '#000',
  backgroundColor: '#fff',
  width:40,
  height:40,
  borderRadius:6,
  fontSize:35,
  '&:hover': {
    backgroundColor: '#0022',
  },
}));

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SwipeableTemporaryDrawer () {

  const styles = useStyles();
  let navigate = useNavigate();


  function GoToHome() {navigate("/")}
  function GoToPerfilUser() {navigate("/perfil-user")}
  function GoToListEvent() {navigate("/list-event")}
  function GoToPerfilEvent() {navigate("/perfil-event")}
  function GoToCardano() {navigate("/cardano")}
  function GoToCrono() {navigate("/crono")}
  function GoToBinance() {navigate("/binance")}
  function GoToEthereum() {navigate("/ethereum")}
  function GoToPolygon() {navigate("/polygon")}
  function GoToSolana() {navigate("/solana")}
  function GoToTezos() {navigate("/tezos")}
  function GoToHowItWorks() {navigate("/how-it-works")}


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =(anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 , height:'100%', backgroundColor:'#000000', boxShadow: 5, }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <Stack spacing={1} mt={4} sx={{mx:3}}>

        <Stack spacing={1} sx={{mt:8, mb:5}}>

          <Box>
            <Button  
                  onClick={GoToHome}
                  sx={{mt: 2, height: 30, color:'white',  fontFamily:"Orbitron_400RegularOrbitron_400Regular"}}
                  >
                    Home
            </Button>
          </Box>

          <Box>
            <Button  
                  onClick={()=>alert('Blockchains') }
                  sx={{mt: 2, height: 30, color:'white',  fontFamily:"Orbitron_400RegularOrbitron_400Regular"}}
                  >
                    Blockchains
            </Button>
          </Box>

          <Box>
            <Button  
                  onClick={()=>alert('Blockchains') }
                  sx={{mt: 2, height: 30, color:'white',  fontFamily:"Orbitron_400RegularOrbitron_400Regular"}}
                  >
                    About us
            </Button>
          </Box>
          <Box>
            <Button  
                  onClick={GoToHowItWorks}
                  sx={{mt: 2, height: 30, color:'white',  fontFamily:"Orbitron_400RegularOrbitron_400Regular"}}
                  >
                    F.A.Q
            </Button>
          </Box>
        </Stack>

        <Box>

              
{/* 
        {isAuthenticated ? (

        <Stack direction='row' spacing={2} sx={{mt: 1.5,ml:1, alignItems:'center'}} >
          <LogoutIcon sx={{ width: 24, height: 24, color:'#fff' }} />
          <Button  
          onClick={logOut}
          sx={{width: 60, height: 30, color:'white',  fontFamily:"Orbitron_400Regular"}}
          >
                  Logout
          </Button>
        </Stack>)
        :null } */}
                

        </Box>  

      </Stack>
         
    </Box>
  );

  
    const logOut = async () => {
      await logout();
      console.log("logged out");
    }

  return (
    <Box>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <ButtonHamburguer onClick={toggleDrawer(anchor, true)} >
            <MenuRoundedIcon sx={{fontSize:30}}/>
          </ButtonHamburguer>
          
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Box>
  );
}