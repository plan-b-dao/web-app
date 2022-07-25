import { useMilestones } from "../../hooks/useMilestones"
import { Milestone } from "../card/Milestone";
import { LoadingContent } from "../indicators/LoadingContent";
import { MilestoneAchievement } from "../status";

interface IMilestoneListProps {}

export const MilestoneList: React.FC<IMilestoneListProps> = () => {
    const [milestones, isLoading] = useMilestones();

    // todo: should be removed in future or updated
    if (isLoading) return (
        <>
            <div>
                <h2 className="text-[36px] font-bold">Milestones</h2>
            </div>
            <LoadingContent className="w-full h-[300px]" />
            <LoadingContent className="w-full h-[300px]" />
        </>
    )
    
    return (
        <div>
            <div>
                <h2 className="text-[36px] font-bold">Milestones</h2>
            </div>
            <div>
                {milestones.map((milestone, index) => (
                    <Milestone key={index} percentage={milestone.percentage} completed={milestone.percentage === 100}>
                        <div>
                            <h3 className="text-xl font-bold my-4">{milestone.title}</h3>
                        </div>
                        <div className="space-y-4 font-playfair-display">
                            {milestone.milestones.map((milestone, index) => (
                                <MilestoneAchievement done={milestone.done} key={index}>
                                    {milestone.content}
                                </MilestoneAchievement>
                            ))}
                        </div>
                    </Milestone>
                ))}
            </div>
        </div>
    );
}