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

const Benefits = React.lazy(() => import('@screens/Benefits'));
const AboutUs = React.lazy(() => import('@screens/AboutUs'));
const RoadMap = React.lazy(() => import('@screens/RoadMap'));
const Whitepaper = React.lazy(() => import('@screens/Whitepaper'));

const Web3 = require("web3");

let Background = require("../../assets/background.png");

let polygon = require("../../assets/logo.png");

import * as abi from "./abi";

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
  const [pending, setPending] = React.useState(0);
  const [deposit, setDeposit] = React.useState("0");
  const [holders, setHolders] = React.useState(0);
  const [circulating, setCirculating] = React.useState(0);
  const [totalSupply, setTotalSupply] = React.useState(0);
  const [burned, setBurned] = React.useState(0);
    React.useEffect(()=>{
    async function init(){
      try{

     await Moralis.enableWeb3()
    }catch{
    }
      if(true){
        
        console.log("entro")
      const chainIdPoly =137;
      const chainName = "Polygon";
      const currencyName = "MATIC";
      const currencySymbol = "MATIC";
      const rpcUrl = "https://polygon-rpc.com/";
      const blockExplorerUrl = "https://mumbai.polygonscan.com/";

      try{

      await Moralis.addNetwork(
        chainIdPoly,
        chainName,
        currencyName,
        currencySymbol,
        rpcUrl,
        blockExplorerUrl
       );
      }catch{
      }
       const CHAINPOLYGON = await Moralis.chainId;
   
       if (CHAINPOLYGON !== '0x89') {
        return
       }
       
  
          const options3 = {
            contractAddress: "0x301d135E85FA8C8839Ba738eA4Cc9868Cab520Bd",
            functionName: "balanceOf",
            abi: abi.token,
            params: { account: "0x000000000000000000000000000000000000dead" },
          };
          const balanceOf = await Moralis.executeFunction(options3);
  console.log(balanceOf)
          setBurned(parseFloat(balanceOf));
  
          const options4 = {
            contractAddress: "0x301d135E85FA8C8839Ba738eA4Cc9868Cab520Bd",
            functionName: "totalSupply",
            abi: abi.token,
          };
          const totalSupply = await Moralis.executeFunction(options4);
          console.log(totalSupply)
          let val =
            (await Moralis.Units.FromWei(totalSupply)) -
            (await Moralis.Units.FromWei(parseFloat(balanceOf)));
          setCirculating(val);
          const options33 = {
            chain: "matic",
            date: new Date().toString(),
          };
          const date = await Moralis.Web3API.native.getDateToBlock(options33);
          const holders = {
            chainId: 137,
            address: "0x301d135E85FA8C8839Ba738eA4Cc9868Cab520Bd",
            pageSize: 10000,
            startingBlock: "0",
            endingBlock: date.block,
          };
          let val2 = await Moralis.Units.FromWei(totalSupply);
  
          console.log(val2)

          setTotalSupply(parseFloat(val2));
        await Moralis.initPlugins();
          let covalent =  await Moralis.Plugins.covalent.getChangesInTokenHolerBetweenBlockHeights(
              holders
            );
          console.log(JSON.stringify(covalent));
          setHolders(covalent.data.items.length);
                  
        const web3 =await new Web3(Moralis.provider);
        const contract = await new web3.eth.Contract(abi.masterUlti,"0x3f7c3D11D6485bA92AC94Af11095967c9Bf64A3C") 
      if(user){

                const depo = await contract.methods.userInfo(0,user.get("ethAddress")).call({ from: user.get("ethAddress")})
                const pending = await contract.methods.pendingReward(0,user.get("ethAddress")).call({ from: user.get("ethAddress")})
                console.log(Moralis.Units.FromWei(pending))
                setPending(Moralis.Units.FromWei(pending)) 
                
          
                let address =user.get("ethAddress")
                setEthAddress(address)
              setDeposit(Moralis.Units.FromWei(depo.amount))
              console.log(Moralis.Units.FromWei(depo.amount))
      }
}else{
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

        <Appbar setPending={setPending} setDeposit={setDeposit} setEthAddress={setEthAddress} ethAddress={ethAddress} />
        <Routes>
          <Route path="/" element={<Home totalSupply={totalSupply}  burned={burned} circulating={circulating} holders={holders} pending={pending} deposit={deposit} ethAddress={ethAddress} />}/>
          <Route path="/whitepaper" element={<Whitepaper/>}/>
          <Route path="/road-map" element={<RoadMap/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/benefits" element={<Benefits/>}/>
        </Routes>
        <Footer />
        </ImageBackground>
    </React.Suspense>
  );
};