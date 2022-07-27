interface IDotsIndicatorProps {}

export const DotsIndicator: React.FC<IDotsIndicatorProps> = (props) => {
    return (
        <div className="flex space-x-2 items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-dark-jungle opacity-75 animate-bounce" style={{animationDelay: "100ms"}}></div>
            <div className="w-2 h-2 rounded-full bg-dark-jungle opacity-75 animate-bounce" style={{animationDelay: "300ms"}}></div>
            <div className="w-2 h-2 rounded-full bg-dark-jungle opacity-75 animate-bounce" style={{animationDelay: "500ms"}}></div>
        </div>
    );
}