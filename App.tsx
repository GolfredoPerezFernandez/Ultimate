import  React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import MainAppRoutes from '@navigation/routes';

import {
  useFonts,
  Orbitron_400Regular,
  Orbitron_500Medium,
  Orbitron_600SemiBold,
  Orbitron_700Bold,
  Orbitron_800ExtraBold,
  Orbitron_900Black,
} from '@expo-google-fonts/orbitron';

import { MoralisProvider } from "react-moralis";
import { serverUrl, appId } from '@config/moralis-connect';

import {AppContextProvider} from '@context/AppContextProvider';

export default function App() {

  let [fontsLoaded] = useFonts({
    Orbitron_400Regular,
    Orbitron_500Medium,
    Orbitron_600SemiBold,
    Orbitron_700Bold,
    Orbitron_800ExtraBold,
    Orbitron_900Black,
  });

  return (

    <React.StrictMode>
      <MoralisProvider appId={"5NZSY2PL6xkzyXeBsJaSIjtPcrmCr3ibSUNHOZuC"} serverUrl={"https://3srquts6min7.usemoralis.com:2053/server"}>
        <AppContextProvider>
          <Router>
            <MainAppRoutes/>
          </Router>
        </AppContextProvider>
      </MoralisProvider>
    </React.StrictMode>

  );
}
