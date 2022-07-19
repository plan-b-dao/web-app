import { PrimaryButton } from "../buttons";
import { LinkTag } from "../primitives/LinkTag";

interface IFounderCardProps {}

export const FounderCard: React.FC<IFounderCardProps> = (props) => {

    return (
        <div className="bg-cultured-dark px-4 py-2 flex flex-row shadow">
            <div className="flex-1 space-y-4">
                <div className="space-y-1">
                    <h3 className="text-xl">Boostrap The Crypto Revolution</h3>
                    <h6 className="text-sm font-playfair-display">access to unlimited drop, rewards, nft and more</h6>
                </div>
                <div>
                    <LinkTag />
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <PrimaryButton type="gradient" link="/founder">Become Founder</PrimaryButton>
            </div>
        </div>
    );
}