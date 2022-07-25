import { ethers } from "ethers";
import { PLAN_B_FOUNDER_CONTRACT_ABI } from "../constants/misc";
import { config } from "../utils/config";




interface IFounderContractABI extends ethers.Contract {
    addToFounder: (addr: string, tx?: any) => Promise<void>
    removeFromFounder: () => Promise<void>
    milestone: (newRate: string) => Promise<void>
    isFounder: (addr: string) => Promise<boolean>
    balance: () => Promise<string>
    total: () => Promise<number>
    rate: () => Promise<number>
}

export class FounderContract {
    public contract: IFounderContractABI;
    private signedContract: IFounderContractABI | undefined;

    constructor(provider: ethers.providers.Web3Provider) {
        this.contract = new ethers.Contract(
            config.getFounderContractAddress()!,
            PLAN_B_FOUNDER_CONTRACT_ABI,
            provider
        ) as IFounderContractABI;
    }

    setSignerContract = async (provider:ethers.providers.Web3Provider, account: string) => {
        const signer = provider.getSigner(account);
        this.signedContract = this.contract.connect(signer) as IFounderContractABI;
    }

    becomeFounder = async (addr: string) => {
        if (!this.signedContract) throw(new Error("Contract is not signed"));
        return await this.signedContract.addToFounder(addr, { value: ethers.utils.parseEther("1") });
    }

    removeFounder = async () => {
        if (!this.signedContract) throw(new Error("Contract is not signed"));
        return await this.signedContract.removeFromFounder();
    }
}