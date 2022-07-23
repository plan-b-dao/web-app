interface ICircularProgressProps {
    percentage: number;
    sqSize?: number;
    strokeWith?: number;
}

export const CircularProgress: React.FC<ICircularProgressProps> = (props) => {
    const { sqSize = 125, strokeWith = 5, percentage } = props;

    const viewBox = `0 0 ${sqSize} ${sqSize}`;

    const radius = ( sqSize - strokeWith ) / 2;

    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;

    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - (dashArray * (percentage / 100));

    const stokeColor = percentage === 100 ? "stroke-white" : "stroke-[#33ff79]";
    const textColor = percentage === 100 ? "fill-cultured" : "fill-dark-jungle";

    return (
        <svg viewBox={viewBox} width={sqSize} height={sqSize}>
            <circle
                className=" fill-transparent stroke-cultured"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${strokeWith}px`}
            ></circle>
            <circle 
                className={"fill-transparent " + stokeColor}
                cx={sqSize / 2}
                cy={sqSize / 2} 
                r={radius}
                strokeWidth={`${strokeWith}px`}
                transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }}
            ></circle>
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy="0.3em"
                className={"font-bold text-[32px] " + textColor}
            >{percentage}%</text>
        </svg>
    );
}