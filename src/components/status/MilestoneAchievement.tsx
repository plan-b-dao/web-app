interface IMilestoneAchievementProps {
    children: React.ReactNode
    done?: boolean
}

export const MilestoneAchievement: React.FC<IMilestoneAchievementProps> = (props) => {
    const { children, done = false } = props;

    return (
        <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${done ? " bg-gradient border-[2px] shadow-sm border-green-400  shadow-green-400" : " bg-cultured"}`}></div>
            <div>{children}</div>
        </div>
    )
}