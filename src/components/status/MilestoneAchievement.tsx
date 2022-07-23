interface IMilestoneAchievementProps {
    children: React.ReactNode
}

export const MilestoneAchievement: React.FC<IMilestoneAchievementProps> = (props) => {
    const { children } = props;

    return (
        <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-cultured"></div>
            <div>{children}</div>
        </div>
    )
}