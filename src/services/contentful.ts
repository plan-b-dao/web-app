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

class ContentfulAPI {
    private contentful;

    constructor(private readonly accessToken: string, private readonly spaceid: string) {
        this.contentful = createClient({accessToken, space: spaceid});
    }

    private advanceMilestoneData = (data: IMilestoneParent[]): IMilestoneResolved[] => {
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

    getMilestones = async (): Promise<any> => {
        try {
            const response = await this.contentful.getEntries({content_type: "milestoneMain", resolveLinks: true});
            return this.advanceMilestoneData(response.items as IMilestoneParent[]);
        } catch (error) {
            throw(error);
        }
    }
}

export default new ContentfulAPI(config.contentfulAccessToken, config.contentfulSpaceId);