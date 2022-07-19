import { PrimaryButton } from "../components/buttons";

interface IFounderProps {}

export const Founder: React.FC<IFounderProps> = (props) => {

    return (
        <main className="space-y-8 text-[18px] mb-10">
            <div className="flex flex-col sm:flex-row items-center">
                <div>
                    <div className=" text-gray-400"> 
                        <span className="font-bold text-[46px] text-dark-jungle-dark">199</span> / 1000
                    </div>
                </div>
                <div className="sm:ml-auto">
                    <PrimaryButton type="gradient" onClick={() => console.log("not implemented!")}>Mint Founder NFT</PrimaryButton>
                </div>
            </div>
            <div>
                <h1 className="text-[46px] font-bold">Become a Founder!</h1>
            </div>
            <div className="space-y-2 font-playfair-display">
                <p>
                    It allows you to become gain early access to services and products. You are getting the first mints, nft drops, community wallet, and more. 
                </p>
                <p className="px-3 py-2 bg-cultured-dark">
                    <span className="font-bold">Founder privlage!</span> Once you paid the founder fee, you are able to refund the fee. After every milestone the refund fee is getting smaller but you keep all the rewards. 
                </p>
            </div>
            <div className="space-y-2">
                <h2 className="text-[34px] font-bold">For what is the seed capital used after the funding is done ?</h2>
                <div className="font-playfair-display">
                    <p>
                        We are using it mostly for create liquidity pools (uniswap), the debt NFT pool, and for the community wallet. It can happen that we pay for a serivce and for the <span className="font-bold">1 Million Tree Project!</span> 
                    </p>
                </div>
            </div>
            <div className="space-y-2">
                <h2 className="text-[34px] font-bold">What kind of rewards you will get as a Founder?</h2>
                <div className="font-playfair-display">
                    <ul className="space-y-4">
                        <li> You are allowed to mint the plan b dao token</li>
                        <li> You will have the privliage to test and give feedback on the services and products</li>
                        <li> You will get the newest coin with great new tokenomics that is based around community</li>
                        <li> Request features</li>
                        <li> Getting the first virtual debit card</li>
                        <li> And what ever future brings</li>
                    </ul>
                </div>
            </div>
            <div className="space-y-2">
                <h2 className="text-[34px] font-bold">Milestone and Refound Amount</h2>
                <div className="font-playfair-display space-y-8">
                    <div className="flex text-[24px]">
                        <div>Milestone 0: Project Bootstrap</div>
                        <div className="ml-auto">1 ETH</div>
                    </div>
                    <div className="flex text-[22px]">
                        <div>Milestone 1: Plan B Dao Token and creating Uniswap liquidty</div>
                        <div className="ml-auto">0.85 ETH</div>
                    </div>
                    <div className="flex text-[20px]">
                        <div>Milestone 2: Application release and Trees NFTs</div>
                        <div className="ml-auto">0.70 ETH</div>
                    </div>
                    <div className="flex text-[18px]">
                        <div>Milestone 3: Plan B Coin with custome swap and tokenomics</div>
                        <div className="ml-auto">0.40 ETH</div>
                    </div>
                    <div className="flex text-[16px]">
                        <div>Milestone 4: Stable Coin and First Crypto-hub Center</div>
                        <div className="ml-auto">0 ETH</div>
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <h2 className="text-[34px] font-bold">Final thought</h2>
                <div className="font-playfair-display space-y-6">
                    <p>
                        If we remove state, fiat, stock, bonds and bank what is left the people. Our goal is to create currencies around that idea. How would people exchange, where would people store their value, and what kind of products or services would exist. Right now, only a small percentage of people have access to global capital. Imagine if you can plug your money to the global financial world, borderless and transparent system.
                    </p>
                    <p>
                        This is what we are building, and we welcome everyone who wants to join and contribute.
                    </p>
                </div>  
            </div>
        </main>
    );
}