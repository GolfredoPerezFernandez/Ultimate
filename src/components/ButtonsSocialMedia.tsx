import React from 'react';
import Stack from '@mui/material/Stack';
import { FontAwesome5 } from '@expo/vector-icons'; 



 const ButtonsSocialMedia = () => {
    return (
        <Stack direction='row' style={{justifyContent:'center',alignItems:'center'}} spacing={4}  >

            <FontAwesome5 name="discord" color="#A1A1A1" size={26} onClick={()=>alert('')}/>

            <FontAwesome5 name="telegram" color="#A1A1A1" size={26} onClick={()=>alert('')}/>

            <FontAwesome5 name="instagram" color="#A1A1A1" size={26} onClick={()=>alert('')}/>

            <FontAwesome5 name="twitter" color="#A1A1A1" size={26} onClick={()=>alert('')}/>
        </Stack>
    );
  }

export default ButtonsSocialMedia