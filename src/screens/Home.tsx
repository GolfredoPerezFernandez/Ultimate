import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import * as abi from "./abi";
import Avatar from '@mui/material/Avatar';

import { FormControl, Input, InputAdornment } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useMoralis } from "react-moralis";

import { makeStyles } from "@material-ui/core/styles";
import FlipCountdown from "@rumess/react-flip-countdown";

let Logo2 = require("../../assets/logo2.png");

const useStyles = makeStyles({
  customSelect: {
    color: "#fff",
    "&:before": {
      borderBottomColor: " #fff",
    },
    "&:after": {
      borderBottomColor: " #fff",
    },
    "& .MuiSvgIcon-root": {
      color: " #fff",
    },
    inputLabelRoot: {
      color: "#fff",
    },
    "&:not(.Mui-disabled):hover::before": {
      borderBottomColor: "white",
    },
  },
});


const Web3 = require("web3");
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

export default function Home(props: any) {
  const {
    authenticate,
    isAuthenticated,
    isWeb3Enabled,
    Moralis,
    enableWeb3,
    user,
  } = useMoralis();
  function numberToEnglish(n) {
    var string = n.toString(),
      units,
      tens,
      scales,
      start,
      end,
      chunks,
      chunksLen,
      chunk,
      ints,
      i,
      word,
      words,
      and = "and";

    /* Remove spaces and commas */
    string = string.replace(/[, ]/g, "");

    /* Is number zero? */
    if (parseInt(string) === 0) {
      return "zero";
    }

    /* Array of units as words */
    units = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];

    /* Array of tens as words */
    tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    /* Array of scales as words */
    scales = [
      "",
      "thousand",
      "million",
      "billion",
      "trillion",
      "quadrillion",
      "quintillion",
      "sextillion",
      "septillion",
      "octillion",
      "nonillion",
      "decillion",
      "undecillion",
      "duodecillion",
      "tredecillion",
      "quatttuor-decillion",
      "quindecillion",
      "sexdecillion",
      "septen-decillion",
      "octodecillion",
      "novemdecillion",
      "vigintillion",
      "centillion",
    ];

    /* Split user argument into 3 digit chunks from right to left */
    start = string.length;
    chunks = [];
    while (start > 0) {
      end = start;
      chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }

    /* Check if function has enough scale words to be able to stringify the user argument */
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
      return "";
    }

    /* Stringify each integer in each chunk */
    words = [];
    for (i = 0; i < chunksLen; i++) {
      chunk = parseInt(chunks[i]);

      if (chunk) {
        /* Split chunk into array of individual integers */
        ints = chunks[i].split("").reverse().map(parseFloat);

        /* If tens integer is 1, i.e. 10, then add 10 to units integer */
        if (ints[1] === 1) {
          ints[0] += 10;
        }

        /* Add scale word if chunk is not zero and array item exists */
        if ((word = scales[i])) {
          words.push(word);
        }

        /* Add unit word if array item exists */
        if ((word = units[ints[0]])) {
          words.push(word);
        }

        /* Add tens word if array item exists */
        if ((word = tens[ints[1]])) {
          words.push(word);
        }

        /* Add 'and' string after units or tens integer if: */
        if (ints[0] || ints[1]) {
          /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
          if (ints[2] || (!i && chunksLen)) {
            words.push(and);
          }
        }

        /* Add hundreds word if array item exists */
        if ((word = units[ints[2]])) {
          words.push(word + " hundred");
        }
      }
    }

    return words.reverse().join(" ");
  }

  const classes = useStyles();
  const [pending, setPending] = React.useState(props.pending);
  const [deposit, setDeposit] = React.useState(props.deposit);
  const [holders, setHolders] = React.useState(props.holders);
  const [circulating, setCirculating] = React.useState(props.circulating);
  const [totalSupply, setTotalSupply] = React.useState(props.totalSupply);
  const [burned, setBurned] = React.useState(props.burned);
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState<any>({
    amount: "",
    amount2: "",
    to: "",
  });
  React.useEffect(() => {
    async function init() {
      if (isWeb3Enabled) {
          if(user){ }  
      } else {
      }
    }

    init();
  }, [user]);

  const handleBurnFrom = async () => {
    setLoading(true);
    try {
      const sendOptions2 = {
        contractAddress: "0x301d135E85FA8C8839Ba738eA4Cc9868Cab520Bd",
        functionName: "allowance",
        abi: abi.token,
        awaitReceipt: true, // should be switched to false
        params: {
          owner: values.to,
          spender: "0xFD0C8Bb919780A03CF471974a65f5d5BC2Ba4A82",
        },
      };

      let res3 = await Moralis.executeFunction(sendOptions2);
      console.log(values.to);
      console.log(parseFloat(values.amount));
      const sendOptions1 = {
        contractAddress: "0x301d135E85FA8C8839Ba738eA4Cc9868Cab520Bd",
        functionName: "burnFrom",
        abi: abi.token,
        awaitReceipt: true, // should be switched to false
        params: {
          account: values.to,
          amount: values.amount,
        },
      };

      let res2 = await Moralis.executeFunction(sendOptions1);
      let espera1 = await res2.wait(2);
      console.log();
      setLoading(false);
      return;
    } catch (e) {
      console.log(e.message);
      setLoading(false);
      return;
    }
  };

  const handleBurn = async () => {
    setLoading(true);
    try {
      console.log(values.to);
      console.log(parseFloat(values.amount));
      const sendOptions1 = {
        contractAddress: "0x301d135E85FA8C8839Ba738eA4Cc9868Cab520Bd",
        functionName: "burn",
        abi: abi.token,
        awaitReceipt: true, // should be switched to false
        params: {
          _account: values.to,
          amount: values.amount,
        },
      };

      let res2 = await Moralis.executeFunction(sendOptions1);
      let espera1 = await res2.wait(2);
      console.log();
      setLoading(false);
      return;
    } catch (e) {
      console.log(e.message);
      setLoading(false);
      return;
    }
  };

  const handleMinter = async () => {
    setLoading(true);
    try {
      console.log(values.to);
      console.log(parseFloat(values.amount));
      const sendOptions1 = {
        contractAddress: "0x301d135E85FA8C8839Ba738eA4Cc9868Cab520Bd",
        functionName: "setMinter",
        abi: abi.token,
        awaitReceipt: true, // should be switched to false
        params: {
          _account: values.to,
          _minterCap: values.amount,
        },
      };

      let res2 = await Moralis.executeFunction(sendOptions1);
      let espera1 = await res2.wait(2);
      console.log();
      setLoading(false);
      return;
    } catch (e) {
      console.log(e.message);
      setLoading(false);
      return;
    }
  };

  const handleMint = async () => {
    setLoading(true);
    try {
      console.log(values.to);
      console.log(parseFloat(values.amount));
      const sendOptions1 = {
        contractAddress: "0x301d135E85FA8C8839Ba738eA4Cc9868Cab520Bd",
        functionName: "mint",
        abi: abi.token,
        awaitReceipt: true, // should be switched to false
        params: {
          _recipient: values.to,
          _amount: values.amount,
        },
      };

      let res2 = await Moralis.executeFunction(sendOptions1);
      let espera1 = await res2.wait(2);
      console.log();
      setLoading(false);
      return;
    } catch (e) {
      console.log(e.message);
      setLoading(false);
      return;
    }
  };

  const handleApprove = async () => {
    setLoading(true);
    try {
      const sendOptions2 = {
        contractAddress: "0x301d135E85FA8C8839Ba738eA4Cc9868Cab520Bd",
        functionName: "approve",
        //
        abi: abi.token,
        awaitReceipt: true, // should be switched to false
        params: {
          spender: values.to,
          amount: values.amount,
        },
      };

      let res2 = await Moralis.executeFunction(sendOptions2);
      let espera1 = await res2.wait(2);
      console.log(JSON.stringify(espera1));
      setLoading(false);
      return;
    } catch {
      setLoading(false);
      return;
    }
  };

  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };


  const handleDeposit = async () => {


    setLoading(true);
    console.log("endSale");
    try {
      console.log(parseFloat(values.amount));
      console.log("endSale");
      const sendOptions2 = {
        contractAddress: "0x301d135E85FA8C8839Ba738eA4Cc9868Cab520Bd",
        functionName: "approve",
        //
        abi: abi.token,
        awaitReceipt: true, // should be switched to false
        params: {
          spender: "0x3f7c3D11D6485bA92AC94Af11095967c9Bf64A3C",
          amount: Moralis.Units.ETH(values.amount2),
        },
      };

      let res3 = await Moralis.executeFunction(sendOptions2);
      
   await res3.wait(3);
      const sendOptions1 = {
        contractAddress: "0x3f7c3D11D6485bA92AC94Af11095967c9Bf64A3C",
        functionName: "deposit",
        abi: abi.masterUlti,
        awaitReceipt: true, // should be switched to false
        params: {
          pid: 0,
          amount: Moralis.Units.ETH(values.amount),
          to: user.get("ethAddress"),
        },
      };

      let res2 = await Moralis.executeFunction(sendOptions1);
      let espera1 = await res2.wait(2);
      console.log(JSON.stringify(espera1));
      
      const web3 =await new Web3(Moralis.provider);
      console.log(user.get("ethAddress"))
   
            const contract = await new web3.eth.Contract(abi.masterUlti,"0x3f7c3D11D6485bA92AC94Af11095967c9Bf64A3C")
    
            const depo = await contract.methods.userInfo(0,user.get("ethAddress")).call({ from: props.ethAddress})
       
            const pending = await contract.methods.pendingReward(0,user.get("ethAddress")).call({ from: props.ethAddress})
             
            setPending(Moralis.Units.FromWei(pending)) 
  setDeposit(Moralis.Units.FromWei(depo.amount)) 

      setLoading(false);
      return;
    } catch {
      setLoading(false);
      return;
    }
  }
  const handlegetDeposit= async () => {  

    setLoading(true);
    console.log("endSale");
    try {
      console.log(user.get("ethAddress"));
      console.log("endSale");
      const sendOptions1 = {
        contractAddress: "0x3f7c3D11D6485bA92AC94Af11095967c9Bf64A3C",
        functionName: "userInfo",
        abi: abi.masterUlti,
        awaitReceipt: true, // should be switched to false
        params: {
          "": 0,
          "": "0xFD0C8Bb919780A03CF471974a65f5d5BC2Ba4A82",
        }
      }

      console.log("endSale");
      let res2 = await Moralis.executeFunction(sendOptions1);
      console.log("endSale"+res2);
      
      return;
    } catch (e) {
      console.log(e.message)
      return;
    }

    }
  const handlePending= async () => {  

    setLoading(true);
    console.log("endSale");
    try {
      console.log(parseFloat(values.amount));
      console.log("endSale");
      const sendOptions1 = {
        contractAddress: "0x3f7c3D11D6485bA92AC94Af11095967c9Bf64A3C",
        functionName: "pendingReward",
        abi: abi.masterUlti,
        awaitReceipt: true, // should be switched to false
        params: {
          _pid: 0,
          _user: user.get("ethAddress"),
        },
      };
      console.log("endSale"+user.get("ethAddress"));
      let res2 = await Moralis.executeFunction(sendOptions1);
      console.log("endSale"+res2);
      
setPending(Moralis.Units.FromWei(res2))
const web3 =await new Web3(Moralis.provider);
console.log(user.get("ethAddress"))

      const contract = await new web3.eth.Contract(abi.masterUlti,"0x3f7c3D11D6485bA92AC94Af11095967c9Bf64A3C")

      const depo = await contract.methods.userInfo(0,user.get("ethAddress")).call({ from: props.ethAddress})
       console.log("depo "+JSON.stringify(depo))
      
setDeposit(Moralis.Units.FromWei(depo.amount)) 
      setLoading(false);
      return;
    } catch {
      setLoading(false);
      return;
    }

    }
  const handleHarvest = async () => {  

    setLoading(true);
    console.log("endSale");
    try {
      console.log(parseFloat(values.amount));
      console.log("endSale");
      const sendOptions1 = {
        contractAddress: "0x3f7c3D11D6485bA92AC94Af11095967c9Bf64A3C",
        functionName: "harvest",
        abi: abi.masterUlti,
        awaitReceipt: true, // should be switched to false
        params: {
          pid: 0,
          to: user.get("ethAddress"),
        },
      };

      let res2 = await Moralis.executeFunction(sendOptions1);
      let espera1 = await res2.wait(2);
      console.log(JSON.stringify(espera1));
      const web3 =await new Web3(Moralis.provider);
      console.log(user.get("ethAddress"))
   
            const contract = await new web3.eth.Contract(abi.masterUlti,"0x3f7c3D11D6485bA92AC94Af11095967c9Bf64A3C")
    
            const depo = await contract.methods.userInfo(0,user.get("ethAddress")).call({ from: props.ethAddress})
            const pending = await contract.methods.pendingReward(0,user.get("ethAddress")).call({ from: props.ethAddress})
             console.log("depo "+JSON.stringify(depo))
            setPending(Moralis.Units.FromWei(pending))   
            
  setDeposit(Moralis.Units.FromWei(depo.amount)) 
      setLoading(false);
      return;
    } catch {
      setLoading(false);
      return;
    }

    }
  const handleBuy3 = async () => {
    setLoading(true);
    try {
      console.log(Moralis.Units.ETH(parseFloat(values.amount) * 0.005));
      console.log(parseFloat(values.amount));
      const sendOptions1 = {
        contractAddress: "0xBff943Dda4C96FA0ffB5Cc6903B5e74ef70fD926",
        functionName: "tokenPrice",
        msgValue: Moralis.Units.ETH(parseFloat(values.amount) * 0.005),
        abi: abi.crowdFunding,
        awaitReceipt: true, // should be switched to false
        params: {
        },
      };

      let res2 = await Moralis.executeFunction(sendOptions1);
      let espera1 = await res2.wait(2);
      console.log(JSON.stringify(espera1));
      setLoading(false);
      return;
    } catch {
      setLoading(false);
      return;
    }
  };
  const handleReward = async () => {
    
    
    setLoading(true);
    console.log("endSale");
    try {
      console.log(parseFloat(values.amount));
      console.log("endSale");
      const sendOptions1 = {
        contractAddress: "0x3f7c3D11D6485bA92AC94Af11095967c9Bf64A3C",
        functionName: "setRewardPerSecond",
        abi: abi.masterUlti,
        awaitReceipt: true, // should be switched to false
        params: {
          _rewardPerSecond: "1000000000000000",
        },
      };

      let res2 = await Moralis.executeFunction(sendOptions1);
      let espera1 = await res2.wait(2);

      setLoading(false);
      return;
    } catch {
      setLoading(false);
      return;
    }

  };
  const handleBuy2 = async () => {
    setLoading(true);
    console.log("endSale");
    try {
      console.log(parseFloat(values.amount));
      console.log("endSale");
      const sendOptions1 = {
        contractAddress: "0xBff943Dda4C96FA0ffB5Cc6903B5e74ef70fD926",
        functionName: "endSale",
        abi: abi.crowdFunding,
        awaitReceipt: true, // should be switched to false
   
      };

      let res2 = await Moralis.executeFunction(sendOptions1);
      let espera1 = await res2.wait(2);
      console.log(JSON.stringify(espera1));
      setLoading(false);
      return;
    } catch {
      setLoading(false);
      return;
    }
  };
  const handleWithdraw = async () => {
    
    setLoading(true);
    console.log("endSale");
    try {
      console.log(parseFloat(values.amount));
      console.log("endSale");
      const sendOptions1 = {
        contractAddress: "0x3f7c3D11D6485bA92AC94Af11095967c9Bf64A3C",
        functionName: "withdraw",
        abi: abi.masterUlti,
        awaitReceipt: true, // should be switched to false
        params: {
          pid: 0,
          amount: values.amount2,
          to: user.get("ethAddress"),
        },
      };

      let res2 = await Moralis.executeFunction(sendOptions1);
      let espera1 = await res2.wait(2);
      console.log(JSON.stringify(espera1));
      
      const web3 =await new Web3(Moralis.provider);
      console.log(user.get("ethAddress"))
   
            const contract = await new web3.eth.Contract(abi.masterUlti,"0x3f7c3D11D6485bA92AC94Af11095967c9Bf64A3C")
    
            const depo = await contract.methods.userInfo(0,user.get("ethAddress")).call({ from: props.ethAddress})
            const pending = await contract.methods.pendingReward(0,user.get("ethAddress")).call({ from: props.ethAddress})
             console.log("depo "+JSON.stringify(depo))
            setPending(Moralis.Units.FromWei(pending))   
            
  setDeposit(Moralis.Units.FromWei(depo.amount)) 
      setLoading(false);
      return;
    } catch {
      setLoading(false);
      return;
    }
  };
  const handleBuy = async (address) => {
    setLoading(true);
    try {
      console.log(user.get("ethAddress"));
      console.log(Moralis.Units.ETH(parseFloat(values.amount) * 0.005));
      console.log(parseFloat(values.amount));
      const sendOptions1 = {
        contractAddress: "0xBff943Dda4C96FA0ffB5Cc6903B5e74ef70fD926",
        functionName: "buyTokens",
        msgValue: Moralis.Units.ETH(parseFloat(values.amount) * 0.005),
        abi: abi.crowdFunding,
        awaitReceipt: true, // should be switched to false
        params: {
          beneficiary: user.get("ethAddress"),
        },
      };

      let res2 = await Moralis.executeFunction(sendOptions1);
      let espera1 = await res2.wait(2);
      console.log(JSON.stringify(espera1));
      setLoading(false);
      return;
    } catch {
      setLoading(false);
      return;
    }
  };

  const handleChanges =
    (prop: keyof any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (prop == "amount") {
        if (parseFloat(event.target.value).toString().length > 12) {
          return;
        }
      }
       if (prop == "amount2") {
        if (parseFloat(event.target.value).toString().length > 12) {
          return;
        }
      }
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ mx: 4 }}>

        <Grid container justifyContent="center" alignItems="center">
          <Grid
            sx={{
              border: "1px solid rgba(117, 117, 117, 0.1)",
              boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.3)",
              borderRadius: 6,
            }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <Typography
              sx={{
                marginLeft: 5,
                marginRight: 5,
                marginTop: 2,
                fontFamily: "Orbitron_900Black",
                color: "#FFF",
                alignSelf: "center",
                fontSize: 35,
              }}
            >        
               MULTICHAIN ECOSYSTEM OPTIMIZER  

            </Typography>

            <Stack
              sx={{
                marginLeft: 5,
                marginRight: 5,
                flexDirection:"row",
                marginBottom: 3,
                alignSelf: "center",
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "Orbitron_900Black",
                  fontSize: 16,
                }}
              >
                             Powered by ULTIMATE
                    </Typography>
              <Avatar
                  alt="Remy Sharp"
                  src={Logo2}
                  sx={{ width: 26,marginRight:1,marginLeft:1, height: 26, marginBottom:2, alignSelf:'center' }}
                />
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "Orbitron_900Black",
                  fontSize: 16,
                }}
              >
                           ULTI TOKEN
             </Typography>
             
            </Stack>
          </Grid>
        </Grid>

        <Grid
          my={3}
          direction="row"
          container
          justifyContent="center"
          alignItems="flex-start"
          sx={{
            border: "1px solid rgba(117, 117, 117, 0.1)",
            boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.3)",
            borderRadius: 6,
          }}
        >
          <Grid
            sx={{
              my: 2,
            }}
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
          >
            <Stack sx={{ mx: 2 }}>
              {/* <Stack sx={{ mt: 2, mb: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "Orbitron_900Black",
                    color: "#FFF",
                    textAlign: "center",
                    fontSize: 36,
                    marginBottom: 5,
                  }}
                >
                  NEXT AIRDROP IN:
                </Typography>

                <FlipCountdown
                  hideYear
                  hideMonth
                  endAtZero
                  theme="dark"
                  size="medium"
                  titlePosition="bottom"
                  endAt={new Date(1660960774000).getTime()} //END Date/Time
                />
                <Typography
                  sx={{
                    marginTop: 4,
                    fontFamily: "Orbitron_900Black",
                    color: "#FFF",
                    textAlign: "center",
                    fontSize: 24,
                  }}
                >
                  OR BUY NOW TOKEN PRESALE LIVE!
                </Typography>
              </Stack>
 */}
              <Stack sx={{ mt: 2, mb: 2 }}>
              <Typography
                  sx={{
                    fontFamily: "Orbitron_900Black",
                    color: "#FFF",
                    textAlign: "center",
                    fontSize: 36,
                    marginBottom: 5,
                  }}
                >
                  TOKEN PRE-SALE <Typography
                  sx={{
                    fontFamily: "Orbitron_900Black",
                    color: "yellow",
                    textAlign: "center",
                    fontSize: 36,
                    marginBottom: 2,
                  }}
                > LIVE!
                </Typography>
                
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Orbitron_900Black",
                    color: "#FFF",
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  Token price{" "}
                  <Typography
                    sx={{
                      fontFamily: "Orbitron_900Black",
                      color: "yellow",
                      textAlign: "center",
                      fontSize: 24,
                    }}
                  >
                    0.005 Matic
                  </Typography>
                </Typography>
              </Stack>

            
              <Stack
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "5px",
                  alignSelf: "center",
                  justifyContent: "space-between",
                }}
              >
                <FormControl
                  fullWidth
                  sx={{ maxWidth: 300, alignSelf: "center", my: 2 }}
                  variant="standard"
                >
                  <Typography
                    sx={{
                      fontFamily: "Orbitron_700Bold",
                      color: "#FFF",
                      mt: 2,
                      fontSize: 18,
                      textAlign: "center",
                      mb: 3,
                    }}
                  >
                    Buy Now:
                  </Typography>

                  <Input
                    className={classes.customSelect}
                    sx={{
                      mt: -2,
                      input: {
                        height: 47,
                        color: "#FFF",
                        fontFamily: "Orbitron_700Bold",
                        fontSize: 14,
                      },
                    }}
                    id="standard-adornment-amount"
                    value={values.amount}
                    onChange={handleChanges("amount")}
                    type={"number"}
                    style={{justifyContent:"center",alignItems:"center"}}
                    placeholder="Enter amount of tokens"
                    inputProps={{
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      maxLength: 12,
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <CardMedia
                          component="img"
                          image={Logo2}
                          alt="Logo"
                          sx={{
                            width: "25px",
                            height: "25px",
                            alignSelf: "center",
                            objectFit: "contain",
                            cursor: "pointer",
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: "Orbitron_700Bold",
                            color: "#FFF",
                            fontSize: 12,
                          }}
                        >
                          {"ULTI"}
                        </Typography>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                { props.ethAddress === ""? null : (
                  <ColorButton
                    sx={{
                      color: "#fff",
                      fontFamily: "Orbitron_700Bold",
                      alignSelf: "center",
                      my: 2,
                    }}
                    onClick={() => handleBuy(props.ethAddress)}
                    variant="contained"
                  >
                    BUY TOKENS
                  </ColorButton>
                )}
                   {props.ethAddress !== "0xFD0C8Bb919780A03CF471974a65f5d5BC2Ba4A82".toLowerCase()|| props.ethAddress == "" ? null : (
                  <ColorButton
                    sx={{
                      color: "#fff",
                      fontFamily: "Orbitron_700Bold",
                      alignSelf: "center",
                      my: 2,
                    }}
                    onClick={() => handleBuy2()}
                    variant="contained"
                  >
                   ENDSALE
                  </ColorButton>
                )}
              </Stack>

            </Stack>
          </Grid>

          <Grid
            sx={{
              justifyContent:'center',
              alignItems:'center'
            }}
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
          >
            <Stack sx={{ mx: 2 }}>
              <Stack sx={{ mt: 2, mb: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "Orbitron_900Black",
                    color: "#FFF",
                    textAlign: "center",
                    fontSize: 45,
                  }}
                >
                  Token Info
                </Typography>
              </Stack>
            </Stack>

            <Stack spacing={1} sx={{flexDirection: { xs:'colum', sm:'colum', md:'row', lg:'row', xl:'row', justifyContent: "center", alignItems:'center' }}}>
              <Stack
                sx={{
                  boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.3)",
                  mx: 6,
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "522px",
                  height: "131px",
                  borderRadius: 6,
                  border: "1px solid rgba(117, 117, 117, 0.1)",
                  backgroundColor: "#C08A40",
                }}
              >
                <Typography
                  sx={{
                    mx:2,
                    fontFamily: "Orbitron_700Bold",
                    color: "#FFF",
                    fontSize: 16,
                    overflowWrap: "break-word",
                    hyphens: "auto",
                    textJustify: "inter-character",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  Circulating Supply
                </Typography>

                <Typography
                  sx={{
                    mx:2,
                    fontFamily: "Orbitron_700Bold",
                    color: "#FFF",
                    fontSize: 16,
                    letterSpacing: 1,
                    overflowWrap: "break-word",
                    hyphens: "auto",
                    textJustify: "inter-character",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {numberWithCommas(props.circulating) + " ULTI"}
                </Typography>
              </Stack>

              <Stack
                sx={{
                  boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.3)",
                  mx: 6,
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "522px",
                  height: "131px",
                  borderRadius: 6,
                  border: "1px solid rgba(117, 117, 117, 0.1)",
                  backgroundColor: "#4E7EE3",
                }}
              >
                <Typography
                  sx={{
                    mx:2,
                    fontFamily: "Orbitron_700Bold",
                    color: "#FFF",
                    overflowWrap: "break-word",
                    hyphens: "auto",
                    fontSize: 16,
                    textJustify: "inter-character",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  Total Supply
                </Typography>

                <Typography
                  sx={{
                    mx:2,
                    fontFamily: "Orbitron_700Bold",
                    color: "#FFF",
                    fontSize: 16,
                    letterSpacing: 1,
                    overflowWrap: "break-word",
                    hyphens: "auto",
                    textJustify: "inter-character",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {" "}
                  {numberWithCommas(props.totalSupply) + " ULTI"}
                </Typography>
              </Stack>
            </Stack>

            <Stack spacing={1} sx={{ my: 3, flexDirection: { xs:'colum', sm:'colum', md:'row', lg:'row', xl:'row'}, justifyContent: "center", alignItems:'center' }}>
              <Stack
                sx={{
                  boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.3)",
                  mx: 6,
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "522px",
                  height: "131px",
                  borderRadius: 6,
                  border: "1px solid rgba(117, 117, 117, 0.1)",
                  backgroundColor: "#FF8080",
                }}
              >
                <Typography
                  sx={{
                    mx:2,
                    fontFamily: "Orbitron_700Bold",
                    color: "#FFF",
                    fontSize: 16,
                    overflowWrap: "break-word",
                    hyphens: "auto",
                    textJustify: "inter-character",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  Holders
                </Typography>

                <Typography
                  sx={{
                    mx:2,
                    fontFamily: "Orbitron_700Bold",
                    color: "#FFF",
                    fontSize: 16,
                    letterSpacing: 1,
                    overflowWrap: "break-word",
                    hyphens: "auto",
                    textJustify: "inter-character",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {"+ " + numberWithCommas(props.holders)}
                </Typography>
              </Stack>

              <Stack
                sx={{
                  boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.3)",

                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "522px",
                  height: "131px",
                  borderRadius: 6,
                  border: "1px solid rgba(117, 117, 117, 0.1)",
                  backgroundColor: "#62B76D",
                }}
              >
                <Typography
                  sx={{
                    mx:2,
                    fontFamily: "Orbitron_700Bold",
                    color: "#FFF",
                    fontSize: 16,
                    overflowWrap: "break-word",
                    hyphens: "auto",
                    textJustify: "inter-character",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  Total Burned Tokens
                </Typography>

                <Typography
                  sx={{
                    mx:2,
                    fontFamily: "Orbitron_700Bold",
                    color: "#FFF",
                    fontSize: 16,
                    letterSpacing: 1,
                    overflowWrap: "break-word",
                    hyphens: "auto",
                    textJustify: "inter-character",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {numberWithCommas(
                    parseFloat(props.burned.toString().substring(0, 10))
                  ) + " ULTI"}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
{true?
        
        <Grid
          my={1}
          direction="row"
          container
          sx={{
            justifyContent:'center',
            alignItems:'center',
            border: "1px solid rgba(117, 117, 117, 0.1)",
            boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.3)",
            borderRadius: 6,
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
          >
            

            <Stack spacing={1} sx={{mx: 4, alignItems:'center', flexDirection: "row" }}>


              <Stack
                sx={{
                  width: "100%",
                  paddingBottom:10,
                  height: "100%",
                  borderRadius: "5px",
                  alignSelf: "center",
                  justifyContent: "space-between",
                }}
              >

                <Stack
                  sx={{
                    mx: 6,
                    alignSelf: "center",
                    maxWidth: {xs:130, sm:300, md:300, lg:522, xl:522},
                    paddingTop:10,
                  }}
                >
                  
                <Avatar
                  alt="Remy Sharp"
                  src={Logo2}
                  sx={{ width: 46, height: 46, marginBottom:2, alignSelf:'center' }}
                />
                  <Typography
                    sx={{
                      fontFamily: "Orbitron_900Black",
                      color: "#FFF",
                      textAlign: "center",
                      fontSize: 24,
                      marginBottom:5,
                    }}
                  >
                    Stake Your ULTI Tokens 
                  </Typography>

                </Stack>

                <FormControl
                  fullWidth
                  sx={{ maxWidth: 300, alignSelf: "center", my: 2 }}
                  variant="standard"
                >
              
                <Input
                  className={classes.customSelect}
                  sx={{
                    mt: -2,
                    input: {
                      height: 47,
                      color: "#FFF",
                      fontFamily: "Orbitron_700Bold",
                      fontSize: 14,
                    },
                  }}
                  id="standard-adornment-amount"
                  value={values.amount2}
                  onChange={handleChanges("amount2")}
                  type={"number"}
                  style={{justifyContent:"center",alignItems:"center"}}
                  placeholder="Enter amount of tokens"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    maxLength: 12,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <CardMedia
                        component="img"
                        image={Logo2}
                        alt="Logo"
                        sx={{
                          width: "25px",
                          height: "25px",
                          alignSelf: "center",
                          objectFit: "contain",
                          cursor: "pointer",
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Orbitron_700Bold",
                          color: "#FFF",
                          fontSize: 12,
                        }}
                      >
                        {"ULTI"}
                      </Typography>
                    </InputAdornment>
                  }
                />

                </FormControl>
                <Stack 
                direction={{xs:'column', sm:'row', md:'row', lg:'row', xl:'row'}}
                spacing={2} sx={{alignSelf:'center'}}>
                { props.ethAddress === ""? null : (

                  <ColorButton
                    sx={{
                      color: "#fff",
                      fontFamily: "Orbitron_700Bold",
                      alignSelf: "center",
                      my: 2,
                    }}
                    onClick={() => handleDeposit(props.ethAddress)}
                    variant="contained"
                  >
                    DEPOSIT
                  </ColorButton>
                )}
                   {props.ethAddress===""? null : (
                  <ColorButton
                    sx={{
                      color: "#fff",
                      fontFamily: "Orbitron_700Bold",
                      alignSelf: "center",
                      my: 2,
                    }}
                    onClick={() => handleWithdraw()}
                    variant="contained"
                  >
                   WITHDRAW
                  </ColorButton>
                )}
                </Stack>
                <Stack sx={{alignSelf:'center'}}>
                 {props.ethAddress !== "0xFD0C8Bb919780A03CF471974a65f5d5BC2Ba4A82".toLowerCase()|| props.ethAddress == "" ? null : (
                  <ColorButton
                    sx={{
                      color: "#fff",
                      fontFamily: "Orbitron_700Bold",
                      alignSelf: "center",
                      my: 2,
                    }}
                    onClick={() => handleReward()}
                    variant="contained"
                  >
                   SET REWARD
                  </ColorButton>
                  )}
                </Stack>
              </Stack>
            </Stack>
            
          </Grid>
          
        
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
          >
            <Stack>
              <Stack
                sx={{
                  mx: 6,
                  alignSelf: "center",
                  maxWidth: {xs:130, sm:300, md:300, lg:522, xl:522},
                }}
              >
                <Typography
                  sx={{
                    wordBreak: 'break-all',
                    mx:2,
                    fontFamily: "Orbitron_700Bold",
                    color: "#c2c2c2",
                    fontSize: 15,
                    letterSpacing: 1,
                    overflowWrap: "break-word",
                    hyphens: "auto",
                    textJustify: "inter-character",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                        Stake info
                </Typography>
              </Stack>

              <Stack 
                sx={{
                  mx:4, 
                  my:4,
                  justifyContent: "center", 
                  alignItems:'center',
                  borderRadius: 6,
                  boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(117, 117, 117, 0.1)",
                }}
              >
                <Stack direction={{ xs:'colum', sm:'row', md:'row', lg:'row', xl:'row'}} sx={{mt:2}}>
                  <Stack
                    sx={{
                      justifyContent: "center",
                      maxWidth: {xs:300, sm:300, md:300, lg:350, xl:350},
                      height: 50,
                    }}
                  >
                    <Typography
                      sx={{
                        mx:2,
                        fontFamily: "Orbitron_700Bold",
                        color: "#FFF",
                        fontSize: 20,
                        overflowWrap: "break-word",
                        hyphens: "auto",
                        textJustify: "inter-character",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                      >
                      
                    {props.pending}
                    </Typography>

                    <Typography
                      sx={{
                        wordBreak: 'break-all',
                        mx:2,
                        fontFamily: "Orbitron_700Bold",
                        color: "#c2c2c2",
                        fontSize: 15,
                        letterSpacing: 1,
                        overflowWrap: "break-word",
                        hyphens: "auto",
                        textJustify: "inter-character",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Rewards
                    </Typography>
                  </Stack>
                  
                  <Stack
                    sx={{
                      justifyContent: "center",
                      maxWidth: {xs:300, sm:300, md:300, lg:350, xl:350},
                      height: 50,
                      
                    }}
                  >
                    <Typography
                      sx={{
                        mx:2,
                        fontFamily: "Orbitron_700Bold",
                        color: "#FFF",
                        fontSize: 20,
                        overflowWrap: "break-word",
                        hyphens: "auto",
                        textJustify: "inter-character",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                      >
                      
                    {props.deposit}
                    </Typography>

                    <Typography
                      sx={{
                        wordBreak: 'break-all',
                        mx:2,
                        fontFamily: "Orbitron_700Bold",
                        color: "#c2c2c2",
                        fontSize: 15,
                        letterSpacing: 1,
                        overflowWrap: "break-word",
                        hyphens: "auto",
                        textJustify: "inter-character",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Deposit
                    </Typography>
                  </Stack>
                </Stack>
                
                <Stack direction={{ xs:'colum', sm:'row', md:'row', lg:'row', xl:'row'}}  spacing={2} sx={{ mx:2, mb:2, justifyContent: "center"}}>
              
                    
                  { props.ethAddress === ""? null : (
                    <ColorButton
                      sx={{
                        color: "#fff",
                        fontFamily: "Orbitron_700Bold",
                        alignSelf: "center",
                        my: 2,
                      }}
                      onClick={() => handleHarvest()}
                      variant="contained"
                    >
                      Harvest
                    </ColorButton>
                  )} 
                  { props.ethAddress === ""? null : (
                    <ColorButton
                      sx={{
                        color: "#fff",
                        fontFamily: "Orbitron_700Bold",
                        alignSelf: "center",
                        my: 2,
                      }}
                      onClick={() => handlePending()}
                      variant="contained"
                    >
                      UPDATE REWARDS
                    </ColorButton>
                  )}
                  
                </Stack>

              </Stack>

            </Stack>

          </Grid>
        </Grid>:null}

        

        {false ? (
          <Grid
            sx={{
              boxShadow: "0px 0px 8px 1px rgba(0,0,0,0.2)",
              borderRadius: 6,
            }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <Typography
              sx={{
                marginLeft: 5,
                marginRight: 5,
                marginTop: 2,
                fontFamily: "Orbitron_900Black",
                color: "#FFF",
                alignSelf: "center",
                fontSize: 35,
              }}
            >
              Token Dashboard
            </Typography>

            <Stack
              sx={{
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 3,
                alignSelf: "center",
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{
                  marginLeft: 5,
                  marginRight: 5,
                  marginTop: 2,
                  fontFamily: "Orbitron_900Black",
                  color: "#FFF",
                  alignSelf: "center",
                  fontSize: 35,
                }}
              >
                Mint
              </Typography>
              <Input
                className={classes.customSelect}
                sx={{
                  mt: 1,
                  input: {
                    color: "#FFF",
                    fontFamily: "Orbitron_700Bold",
                    fontSize: 14,
                  },
                }}
                id="standard-adornment-amount"
                value={values.amount}
                onChange={handleChanges("amount")}
                type={"number"}
                placeholder="Enter amount of tokens"
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  maxLength: 12,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    {" "}
                    <CardMedia
                      component="img"
                      image={Logo2}
                      alt="Logo"
                      sx={{
                        width: "25px",
                        height: "25px",
                        alignSelf: "center",
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Orbitron_700Bold",
                        color: "#FFF",
                        fontSize: 12,
                      }}
                    >
                      {"ULTI"}
                    </Typography>
                  </InputAdornment>
                }
              />
              <Input
                className={classes.customSelect}
                sx={{
                  mt: 1,
                  input: {
                    color: "#FFF",
                    fontFamily: "Orbitron_700Bold",
                    fontSize: 14,
                  },
                }}
                id="standard-adornment-amount"
                value={values.to}
                onChange={handleChanges("to")}
                placeholder="Enter Wallet Address"
              />
              <ColorButton
                sx={{ color: "#fff", alignSelf: "center", my: 2 }}
                onClick={() => handleMint()}
                variant="contained"
              >
                Mint TOKENS
              </ColorButton>
            </Stack>
            <Stack
              sx={{
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 3,
                alignSelf: "center",
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{
                  marginLeft: 5,
                  marginRight: 5,
                  marginTop: 2,
                  fontFamily: "Orbitron_900Black",
                  color: "#FFF",
                  alignSelf: "center",
                  fontSize: 35,
                }}
              >
                Burn
              </Typography>
              <Input
                className={classes.customSelect}
                sx={{
                  mt: 1,
                  input: {
                    color: "#FFF",
                    fontFamily: "Orbitron_700Bold",
                    fontSize: 14,
                  },
                }}
                id="standard-adornment-amount"
                value={values.amount}
                onChange={handleChanges("amount")}
                type={"number"}
                placeholder="Enter amount of tokens"
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  maxLength: 12,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <Typography
                      sx={{
                        fontFamily: "Orbitron_700Bold",
                        color: "#FFF",
                        fontSize: 12,
                      }}
                    >
                      {"ULTI"}
                    </Typography>
                  </InputAdornment>
                }
              />
              <ColorButton
                sx={{ color: "#fff", alignSelf: "center", my: 2 }}
                onClick={() => handleBurn()}
                variant="contained"
              >
                Burn TOKENS
              </ColorButton>
            </Stack>

            <Stack
              sx={{
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 3,
                alignSelf: "center",
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{
                  marginLeft: 5,
                  marginRight: 5,
                  marginTop: 2,
                  fontFamily: "Orbitron_900Black",
                  color: "#FFF",
                  alignSelf: "center",
                  fontSize: 35,
                }}
              >
                Burn From
              </Typography>
              <Input
                className={classes.customSelect}
                sx={{
                  mt: 1,
                  input: {
                    color: "#FFF",
                    fontFamily: "Orbitron_700Bold",
                    fontSize: 14,
                  },
                }}
                id="standard-adornment-amount"
                value={values.amount}
                onChange={handleChanges("amount")}
                type={"number"}
                placeholder="Enter amount of tokens"
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  maxLength: 12,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <Typography
                      sx={{
                        fontFamily: "Orbitron_700Bold",
                        color: "#FFF",
                        fontSize: 12,
                      }}
                    >
                      {"ULTI"}
                    </Typography>
                  </InputAdornment>
                }
              />

              <Input
                className={classes.customSelect}
                sx={{
                  mt: 1,
                  input: {
                    color: "#FFF",
                    fontFamily: "Orbitron_700Bold",
                    fontSize: 14,
                  },
                }}
                id="standard-adornment-amount"
                value={values.to}
                onChange={handleChanges("to")}
                placeholder="Enter Wallet Address"
              />
              <ColorButton
                sx={{ color: "#fff", alignSelf: "center", my: 2 }}
                onClick={() => handleBurnFrom()}
                variant="contained"
              >
                Burn from TOKENS
              </ColorButton>
            </Stack>
            <Stack
              sx={{
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 3,
                alignSelf: "center",
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{
                  marginLeft: 5,
                  marginRight: 5,
                  marginTop: 2,
                  fontFamily: "Orbitron_900Black",
                  color: "#FFF",
                  alignSelf: "center",
                  fontSize: 35,
                }}
              >
                Add Minter
              </Typography>
              <Input
                className={classes.customSelect}
                sx={{
                  mt: 1,
                  input: {
                    color: "#FFF",
                    fontFamily: "Orbitron_700Bold",
                    fontSize: 14,
                  },
                }}
                id="standard-adornment-amount"
                value={values.amount}
                onChange={handleChanges("amount")}
                type={"number"}
                placeholder="Enter amount of tokens"
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  maxLength: 12,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <Typography
                      sx={{
                        fontFamily: "Orbitron_700Bold",
                        color: "#FFF",
                        fontSize: 12,
                      }}
                    >
                      {"ULTI"}
                    </Typography>
                  </InputAdornment>
                }
              />
              <Input
                className={classes.customSelect}
                sx={{
                  mt: 1,
                  input: {
                    color: "#FFF",
                    fontFamily: "Orbitron_700Bold",
                    fontSize: 14,
                  },
                }}
                id="standard-adornment-amount"
                value={values.to}
                onChange={handleChanges("to")}
                placeholder="Enter Wallet Address"
              />
              <ColorButton
                sx={{ color: "#fff", alignSelf: "center", my: 2 }}
                onClick={() => handleMinter()}
                variant="contained"
              >
                Add Minter
              </ColorButton>
            </Stack>
            <Stack
              sx={{
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 3,
                alignSelf: "center",
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{
                  marginLeft: 5,
                  marginRight: 5,
                  marginTop: 2,
                  fontFamily: "Orbitron_900Black",
                  color: "#FFF",
                  alignSelf: "center",
                  fontSize: 35,
                }}
              >
                Approve
              </Typography>
              <Input
                className={classes.customSelect}
                sx={{
                  mt: 1,
                  input: {
                    color: "#FFF",
                    fontFamily: "Orbitron_700Bold",
                    fontSize: 14,
                  },
                }}
                id="standard-adornment-amount"
                value={values.amount}
                onChange={handleChanges("amount")}
                type={"number"}
                placeholder="Enter amount of tokens"
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  maxLength: 12,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <Typography
                      sx={{
                        fontFamily: "Orbitron_700Bold",
                        color: "#FFF",
                        fontSize: 12,
                      }}
                    >
                      {"ULTI"}
                    </Typography>
                  </InputAdornment>
                }
              />
              <Input
                className={classes.customSelect}
                sx={{
                  mt: 1,
                  input: {
                    color: "#FFF",
                    fontFamily: "Orbitron_700Bold",
                    fontSize: 14,
                  },
                }}
                id="standard-adornment-amount"
                value={values.to}
                onChange={handleChanges("to")}
                placeholder="Enter Wallet Address"
              />
              <ColorButton
                sx={{ color: "#fff", alignSelf: "center", my: 2 }}
                onClick={() => handleApprove()}
                variant="contained"
              >
                approve
              </ColorButton>
            </Stack>
          </Grid>
        ) : null}

      </Box>
    </Box>
  );
}
