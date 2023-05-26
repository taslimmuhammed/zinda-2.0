import { createContext, useState, useEffect } from "react";
import {ethers}  from "ethers"; 
import { toast } from 'react-toastify';
import { TokenABI } from "../utils/tokenAbi";
import { TokenSellerABI } from "../utils/tokenSellerAbi";
import { useContract, useContractWrite, useContractRead } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { useAddress, useBalance } from "@thirdweb-dev/react";
import { Addresses } from "../utils/Addresses";

export const EthersContext = createContext(null);
export default function Ethers({ children }) {
  const [Balance, setBalance] = useState(0)
  const [tokenPrice, setTokenPrice] = useState(0.00000065)
  const { data:nativeBalance } = useBalance();
  const { contract, isLoading } = useContract("0x325494Efe31aB8D61246CD61CF0f0bC797613625"); 
  const [tokensSold, settokensSold] = useState(50000)
  const { contract: tokenContract } = useContract("0xCaF33cE4498af1a22e47297E7eEA005BFB048687");
  const { data: tokenBalance } = useContractRead(tokenContract, "balanceOf", [Addresses.sellerAddress])
  const { data: _tokenPrice } = useContractRead(contract, "tokenPrice" )

 const getUserBalance = async()=>{
     try {
      let balance = ethers.utils.formatEther(nativeBalance.value)
      console.log({balance});
      setBalance(balance)
     } catch (error) {
       console.error("Error retrieving balance:", error);
     }
 }
 
  useEffect(() => {
    console.log(nativeBalance);
    getUserBalance()
  }, [nativeBalance])
  useEffect(() => {
    try {
      console.log(tokenBalance);
      let temp = tokenBalance+""
      temp = temp/10**18
      console.log("tokens sold", temp);
      settokensSold(40000000000-temp)
      
    } catch (e) {
      console.log(e);
    }
  }, [tokenBalance])
  useEffect(() => {
    try {
      let tx = _tokenPrice + ""
      tx = tx / 10 ** 18
      setTokenPrice(tx)
    }catch(e){
      console.log(e);
    }
  }, [_tokenPrice])


  return (
    <EthersContext.Provider value={{
      _tokenPrice,
      tokenPrice,
      isLoading,
      Balance,
      tokensSold
    }}>
      {children}
    </EthersContext.Provider>
  )
}
