import { LinkTag } from "../primitives/LinkTag";

interface INewsCardProps {
    title: string;
    desc: string;
    links: any[];
}

export const NewsCard: React.FC<INewsCardProps> = (props) => {
    const {title, desc, links} = props;
    return (
        <div className="bg-cultured px-4 pt-2 pb-4 flex flex-col border-b-[2px]">
            <div className="flex-1 space-y-4">
                <div className="space-y-1">
                    <h3 className="text-xl">{title}</h3>
                    <h6 className="text-sm font-playfair-display">{desc}</h6>
                </div>
            </div>
            <div className="ml-auto py-1">
                {links.map((link, index) => (
                    <LinkTag key={index} target="_blank" rel="noreferrer" title={link.title} link={link.link} />
                ))}
            </div>
        </div>
    );
}