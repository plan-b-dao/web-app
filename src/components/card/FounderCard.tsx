import { PrimaryButton } from "../buttons";
import { LinkTag } from "../primitives/LinkTag";

interface IFounderCardProps {}

export const FounderCard: React.FC<IFounderCardProps> = (props) => {

    return (
        <div className="bg-cultured-dark px-4 py-2 flex flex-col sm:flex-row shadow">
            <div className="flex-1 space-y-4">
                <div className="space-y-1">
                    <h3 className="text-xl">Boostrap The Crypto Revolution</h3>
                    <h6 className="text-sm font-playfair-display">learn more about the privileges about being founder!!</h6>
                </div>
                <div>
                    <LinkTag target="_blank" rel="noreferrer" link="https://stackoverflow.com/questions/50709625/link-with-target-blank-and-rel-noopener-noreferrer-still-vulnerable"/>
                </div>
            </div>
            <div className="flex flex-1 justify-end sm:justify-center items-center">
                <PrimaryButton type="gradient" link="/founder">Become Founder</PrimaryButton>
            </div>
        </div>
    );
}