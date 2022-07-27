import { PrimaryButton } from "../buttons";
import { LinkTag } from "../primitives/LinkTag";

interface IFounderCardProps {
    title: string;
    desc: string;
    links: any[];
    buttonText: string;
    page: string;
    action?: string;
}

export const FounderCard: React.FC<IFounderCardProps> = (props) => {
    const {title, desc, links, buttonText, page} = props;
    return (
        <div className="bg-cultured-dark px-4 py-2 flex flex-col sm:flex-row shadow">
            <div className="flex-1 space-y-4">
                <div className="space-y-1">
                    <h3 className="text-xl">{title}</h3>
                    <h6 className="text-sm font-playfair-display">{desc}</h6>
                </div>
                <div>
                    {links.map((link, index) => (
                        <LinkTag key={index} title={link.title} link={link.link} />
                    ))}
                </div>
            </div>
            <div className="flex flex-1 justify-end sm:justify-center items-center">
                <PrimaryButton type="gradient" link={`/${page}`}>{buttonText}</PrimaryButton>
            </div>
        </div>
    );
}