interface ILoadingContentProps {
    className?: string
}

export const LoadingContent: React.FC<ILoadingContentProps> = (props) => {
    const { className } = props;
    
    return (
        <div className={` bg-cultured-dark animate-pulse ${className}`}></div>
    );
}