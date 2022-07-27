
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { PrimaryButton } from "../components/buttons";
import { MintFounderButton } from "../components/buttons/MintFounderButton";
import { Card } from "../components/card";
import { DotsIndicator, WrapperIndicator } from "../components/indicators";
import { MilestoneList } from "../components/lists/MilestoneList";
import { LinkTag } from "../components/primitives/LinkTag";
import { useAccountContext, useFounderContext } from "../context";

interface IFounderProps {}

export const Founder: React.FC<IFounderProps> = (props) => {
    //should be removed in future
    const [total, setTotal] = useState<number>(0);
    const [rate, setRate] = useState<number>(0);
    const { account, isFounder, isReady } = useAccountContext();
    const { founderContract } = useFounderContext();

    useEffect(() => {
        if (!founderContract) return;

        founderContract.contract.total().then((total) => {
            setTotal(Number(total));
            return founderContract.contract.rate();
        }).then((rate) => {
            setRate(Number(ethers.utils.formatEther(rate + "")));
        }).catch((err) => {
            console.error(err);
        });

    }, [founderContract, isFounder]);

    const submitForFounder = async () => {
        if (!founderContract) return;
        if (!account) return;
        if (isFounder) return;

        try {
            const res = await founderContract.becomeFounder(account);
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }

    const removeFounder = async () => {
        if (!founderContract) return;
        if (!account) return;
        if (!isFounder) return;
        
        try {
            await founderContract.removeFounder();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="space-y-8 text-[18px] mb-10">
            <div className="flex flex-col sm:flex-row items-center">
                <div className="flex flex-row space-x-2 sm:space-x-8">
                    <div className="flex flex-col items-center px-8 py-2">
                        <div className=" text-gray-400"> 
                            <span className="font-bold text-[20px] text-dark-jungle-dark">{total}</span> / 1000
                        </div>
                        <div className="text-[14px]">Founders</div>
                    </div>
                    <WrapperIndicator isLoading={!isReady} element={<DotsIndicator />}>
                        <div className="flex flex-col items-center px-8 py-2">
                            <div className=" text-gray-400"> 
                                    <span className="font-bold text-[20px] text-dark-jungle-dark">
                                        {isFounder ? `${rate} ETH` : 0}
                                    </span>
                            </div>
                            <div className="text-[14px]">deposit</div>
                        </div>
                    </WrapperIndicator>
                </div>
                
                <div className="sm:ml-auto">
                    {!isFounder ?
                        <MintFounderButton isFounder={isFounder} account={account!} />
                    :
                        <PrimaryButton type="warning" onClick={removeFounder}>{account ? "Remove Founder status" : "Connect to Wallet"}</PrimaryButton>
                    }
                </div>
            </div>
            <div className="space-y-8">
                <Card className="flex flex-col space-y-4" onClose={() => console.log("todo")}>
                    <div className="space-y-2">
                        <h3 className="font-bold text-2xl">Our first Medium article is out!</h3>
                        <p className=" font-playfair-display text-md">Learn more about the project, DAO token, and rewards that you get as a founder</p>
                    </div>
                    <div className="ml-auto">
                        <LinkTag target="_blank" rel="noreferrer" link="https://stackoverflow.com/questions/50709625/link-with-target-blank-and-rel-noopener-noreferrer-still-vulnerable"/>
                    </div>
                </Card>
                <Card type="gradient" className="flex flex-col space-y-4">
                    <div className="text-2xl uppercase font-bold">
                        YOUR 210.000 PLAN B DAO TOKEN ARE HERE TO MINT ! 
                    </div>
                    <div className="ml-auto">
                        <PrimaryButton>Mint Now</PrimaryButton>
                    </div>
                </Card>
            </div>
            <MilestoneList />
        </main>
    );
}