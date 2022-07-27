import { PrimaryButton } from "../buttons";
import { LinkTag } from "../primitives/LinkTag";

interface IActionCardProps {
    title: string;
    desc: string;
    links: any[];
    buttonText: string;
    page: string;
    action?: string;
}

export const ActionCard: React.FC<IActionCardProps> = (props) => {
    const {title, desc, links, buttonText, page} = props;
    return (
        <div className="bg-cultured px-4 pt-2 pb-4 flex flex-col sm:flex-row border-b-[2px] border-cultured-dark hover:bg-cultured-dark cursor-pointer transition-all">
            <div className="flex-1 space-y-4">
                <div className="space-y-1">
                    <h3 className="text-xl">{title}</h3>
                    <h6 className="text-sm font-playfair-display">{desc}</h6>
                </div>
                <div>
                    {links.map((link, index) => (
                        <LinkTag key={index} target="_blank" rel="noreferrer" title={link.title} link={link.link} />
                    ))}
                </div>
            </div>
            <div className="flex flex-1 justify-end sm:justify-center items-center">
                <PrimaryButton type="gradient" link={`/${page}`}>{buttonText}</PrimaryButton>
            </div>
        </div>
    );
}