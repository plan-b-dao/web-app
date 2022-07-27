import {createClient} from "contentful";
import { config } from "../utils/config";

interface IMilestone {
    content: string;
    done: boolean;
    target: 0;
}

interface IMilestoneItem {
    fields: IMilestone;
}

interface IMilestoneParentField {
    title: string;
    milestone: IMilestoneItem[];
}

interface IMilestoneParent {
    fields: IMilestoneParentField;
}

export interface IMilestoneResolved {
    title: string;
    percentage: number;
    milestones: IMilestone[];
}

interface IProjectNewsSocialLinks {
    link: string;
    platform: string;
    title: string;
}

export interface IProjectNewsFormated {
    title: string;
    desc: string;
    buttonText: string;
    page: string;
    links: IProjectNewsSocialLinks[];
}

class ContentfulAPI {
    private contentful;

    constructor(private readonly accessToken: string, private readonly spaceid: string) {
        this.contentful = createClient({accessToken, space: spaceid});
    }

    private formatMilestoneData = (data: IMilestoneParent[]): IMilestoneResolved[] => {
        const milestones: IMilestoneResolved[] = []
        data.forEach((milestone: IMilestoneParent) => {
            let done = 0;
            let total = milestone.fields.milestone.length;

            const resolvedMilestone: IMilestoneResolved = {
                title: milestone.fields.title,
                percentage: 0,
                milestones: []
            };
            milestone.fields.milestone.forEach((item: IMilestoneItem) => {

                if (item.fields.done) done++;

                resolvedMilestone.milestones.push({
                    content: item.fields.content,
                    done: item.fields.done,
                    target: item.fields.target
                });
            });
            resolvedMilestone.percentage = Math.round(done / total * 100);
            milestones.push(resolvedMilestone);
        });
        return milestones.reverse();
    }

    //todo: remove any;
    private formatProjectNewsResponse = (data: any): any => {
        const formated: IProjectNewsFormated[] = [];
        data.forEach((item: any) => {
            const formatedItem: IProjectNewsFormated = {
                title: item.fields.title,
                desc: item.fields.desc,
                buttonText: item.fields.buttonText,
                page: item.fields.page,
                links: []
            }

            item.fields.socialLinks.forEach((link: any) => {
                formatedItem.links.push({
                    link: link.fields.link,
                    platform: link.fields.platform,
                    title: link.fields.title
                });
            })

            formated.push(formatedItem);
        });
        return formated.reverse();
    }

    getMilestones = async (): Promise<any> => {
        try {
            const response = await this.contentful.getEntries({content_type: "milestoneMain", resolveLinks: true});
            return this.formatMilestoneData(response.items as IMilestoneParent[]);
        } catch (error) {
            throw(error);
        }
    }

    getProjectNews = async () => {
        try {
            const news = await this.contentful.getEntries({content_type: "news", resolveLinks: true});
            console.log(news.items);
            return this.formatProjectNewsResponse(news.items) as any;
        } catch (error) {
            throw error;
        }
    }
}

export default new ContentfulAPI(config.contentfulAccessToken, config.contentfulSpaceId);