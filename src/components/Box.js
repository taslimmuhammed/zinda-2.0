import React, { useState, useEffect, useContext } from 'react';
import { EthSVG } from '../assets/svg/ethsvg';
import { tiger } from "../assets";
import { EthersContext } from '../contexts/EthersContext';
import Loader from './Loader';
import { toast } from 'react-toastify';
import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from 'ethers';


const Box = () => {
    const totalTokens = 40000000000;
    const { buyToken,
        isLoading,
        Balance,
        connectWallet,
        currentAccount,
        tokenPrice,
        _tokenPrice,
        tokensSold } = useContext(EthersContext)

    const [EthInput, setEthInput] = useState(0.00009)
    const [TokenInput, setTokenInput] = useState(1000)
    const inEthChange = (val) => {
        const num = parseFloat(val)
        if (num < 0) num = num * -1
        setEthInput(num)
        setTokenInput(num / tokenPrice)
    }
    const inTokenChange = (val) => {
        const num = parseInt(val)
        if (num < 0) num = num * -1
        setEthInput(num * tokenPrice)
        setTokenInput(num)
    }

    const setMaxValue = () => {
        if (Balance > 0.001) inEthChange(Balance-0.01)
        else toast.warning("You dont have enough balance")
    }
    if (isLoading) return (<Loader />)
    else
        return (<div className="container mx-auto p-1 bg-white rounded-2xl max-w-xl text-black">
            {/* Timer component */}
            <Timer totalTokens={totalTokens} tokensSold={tokensSold} />
            {/* Sliding panel */}

            {/* Text and lines */}
            <div className="flex justify-center items-center">
                <div className="border-t border-gray-500 w-1/4 my-4" />
                <div className="mx-4 text-md text-center">
                    $ZINDA AI = 0.00000009Eth
                </div>
                <div className="border-t border-gray-500 w-1/4 my-4" />
            </div>

            <div className="flex justify-center my-4">
                {/* Token options */}
                {/* <div className="flex space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                        Token Option 1
                    </button>
                </div> */}
            </div>

            {/* Input fields */}
            <div className=' px-3'>
                <div className="flex flex-col relative">
                    <label className="text-md flex w-100 justify-between" >
                        <div className=''>
                            Amount in ETH you pay
                        </div>
                        <div className='bg-cyan-600 px-1 rounded-sm mb-1 text-white' onClick={setMaxValue}>max</div>
                    </label>
                    <input
                        className="border border-gray-300 rounded p-3 pl-10 bg-slate-300"
                        placeholder="Total ETH"
                        type="number"
                        value={EthInput}
                        onChange={(e) => inEthChange(e.target.value)}
                    />
                    {/* ETH icon */}
                    <div className="absolute top-1/2 right-3 transform -translate-y-1 ">
                        <span><img className='w-9' src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png'></img></span>
                    </div>
                </div>
                <div className="flex flex-col relative mt-3">
                    <label className="text-md" >
                        Amount in $ZINDA you receive [min 100 tokens]
                    </label>
                    <input
                        className="border border-gray-300 rounded p-3 pl-10 bg-slate-300"
                        placeholder="AI tokens"
                        type="number"
                        value={TokenInput}
                        onChange={(e) => inTokenChange(e.target.value)}
                    />
                    {/* ETH icon */}
                    <div className="absolute top-1/2 right-3 transform -translate-y-1">
                        <span><img className='w-9' src={tiger}></img></span>
                    </div>
                </div>
                <div className='px-5 text-center pt-3 pb-8'>
                    A small amount of ETH will be used for gas. The actual amount used will depend on the network.
                </div>
            </div>
            {/* Buy Now button */}
            <div className=' text-center mb-12'>
                {/* {
                currentAccount?<button className="bg-sky-950 hover:bg-sky-900 text-white py-2 px-24 rounded-3xl text-lg" onClick={()=>buyToken(TokenInput, EthInput)}>
                    Buy Now
            </button> : <button className="bg-sky-950 hover:bg-sky-900 text-white py-2 px-24 rounded-3xl text-lg" onClick={connectWallet}>
                Connect wallet
            </button>
            } */}
                <Web3Button
                    theme="light"
                    className='web3btn1 bg-sky-950 hover:bg-sky-900 text-white py-2 px-24 rounded-3xl text-lg '
                    contractAddress="0x325494Efe31aB8D61246CD61CF0f0bC797613625"
                    action={async(contract) => {
                        try{
                            let tokenCount = Math.floor(TokenInput)
                            console.log("before", tokenCount);
                            tokenCount = ethers.BigNumber.from(tokenCount)
                            const ethCount = tokenCount.mul(_tokenPrice)
                            // tokenCount = tokenCount.mul(10**18+"")
                            let overrides = {
                                value: ethCount,
                                gasLimit: 300000
                            };
                            contract.call("buyTokens", [], overrides)
                            toast.success(`The transaction has been initiated`)
                            toast.success(`Tokens will be credited to your wallet once the transactions is minted`)
                        }catch(e){
                            toast.error("please try again later")
                            console.log(e);
                        }
                    }}
                >
                    buy tokens
                </Web3Button>

            </div>

        </div>
        );
};

export default Box;


const Timer = ({ totalTokens, tokensSold }) => {
    // Timer logic goes here

    // Placeholder values for days, hours, minutes, and seconds
    const startTimer = 1687689064;
    let currentTimer =  new Date()
    currentTimer = currentTimer.getTime()
    currentTimer = Math.floor(currentTimer/1000)
    console.log(currentTimer, startTimer);
    console.log(currentTimer - startTimer);
    const [count, setCount] = useState(startTimer - currentTimer); 

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div
            className="py-6 px-3 text-white rounded-2xl lg:left-0"
            style={{
                background:
                    'linear-gradient(0deg, rgba(16,70,110,1) 0%, rgba(18,101,139,1) 41%, rgba(13,157,195,1) 99%)',
            }}
        >
            <div className="flex justify-between text-2xl mb-4 text-white rounded-2xl px-2">
                <Days count={count} />
                <Hours count={count} />
                <Minutes count={count} />
                <Seconds count={count} />
            </div>

            <SlidingPanel totalTokens={totalTokens} tokensSold={tokensSold} />
        </div>
    );
};



const SlidingPanel = ({ totalTokens, tokensSold }) => {
    const progressPercentage = (tokensSold / totalTokens) * 100;

    return (
        <div className=" p-4 rounded-lg mb-4">
            {/* Visual representation */}
            <div className="bg-blue-950 h-5 rounded-lg mb-2">
                <div
                    className="bg-cyan-500 h-full rounded-lg"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>

            {/* Number of tokens */}
            <p className="text-md text-center">Tokens Sold {tokensSold}/{totalTokens}</p>
        </div>
    );
};


const Days = ({ count }) => {
    const days = Math.floor(count / 86400);
    return <div className="rounded-lg px-4 py-2 w-20 " style={{
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        textAlign: "center"
    }}>
        <div className='text-center'>{days}d</div>
    </div>
};

const Hours = ({ count }) => {
    const hours = Math.floor((count % 86400) / 3600);
    return <div className="bg-gray-800 rounded-lg px-4 py-2  w-20 " style={{
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    }}>
        <div className="">{hours}h</div>
    </div>;
};

const Minutes = ({ count }) => {
    const minutes = Math.floor((count % 3600) / 60);
    return <div className="bg-gray-800 rounded-lg px-4 py-2  w-20 " style={{
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    }}>
        <div className="">{minutes}m</div>
    </div>
};

const Seconds = ({ count }) => {
    const seconds = Math.floor(count % 60);
    return <div className="bg-gray-800 rounded-lg px-4 py-2  w-20 " style={{
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    }}>
        <div className="">{seconds}s</div>
    </div>
};