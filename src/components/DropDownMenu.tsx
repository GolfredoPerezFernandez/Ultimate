import React from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useMoralis } from 'react-moralis';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';






const useStyles = makeStyles(() => ({
  card: {
    backgroundColor:'#16151A',
    border: '0.5px solid #474747',
    borderRadius: 14,
    transition: '0.4s',
    '&:hover': {
      borderColor: '#676767',
    },
    width: 160,
    height:55,
    color:' #fff',
    display:'flex',
    mx:2.5
  },

}));


export const DropdownMenuDemo = (props) => {

  const { Moralis,logout } = useMoralis();
  
  const styles = useStyles();
  let navigate = useNavigate();

  function Mynft() {navigate("/Mynft")}

  async function logOut() {
    await logout();
    props.setEthAddress("")
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={styles.card}>          

          <Tooltip title="Account settings">
            <Stack
            onClick={handleClick}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            direction='row' sx={{width:'100%', justifyContent:'center', alignItems:'center', }}>


                      <Stack  sx={{alignSelf:'center',alignItems:'center',mr:0.5}}>

                      <Typography 
                        sx={{
                          fontFamily:"Poppins_600SemiBold",
                          color:"white",
                          fontSize:12,
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          maxWidth: 120,
                          textOverflow: 'ellipsis'
                        }}>
                        {"Connected" }
                      </Typography>
                  
                     

          

                      </Stack>
                <KeyboardArrowDownOutlinedIcon sx={{color:'#fff', fontSize:18, mr:1}}/> 



            </Stack>
          </Tooltip>

          <Menu
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                fontFamily: 'Poppins_500Medium',
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'initial',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
   

            <Divider />

          
            <MenuItem onClick={()=>logOut()}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem> 
          </Menu>

    </Box>
  );
};

export default DropdownMenuDemo;
