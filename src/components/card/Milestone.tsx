import { CircularProgress } from "../progress/CircularProgress";
import { Card } from "./Card";
import { getCardType } from "./Card.utils";

interface IMilestoneProps {
    children: React.ReactNode;
    completed: boolean;
    percentage: number;
}

export const Milestone: React.FC<IMilestoneProps> = ({ children, completed, percentage }) => {
    return (
        <Card type={getCardType(completed)} className="flex flex-row my-4">
            <div>
                <CircularProgress percentage={percentage}/>
            </div>
            <div className="ml-8">
                {children}
            </div>
        </Card>
    );
}