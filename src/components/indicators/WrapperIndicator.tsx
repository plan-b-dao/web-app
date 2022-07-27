interface IWrapperIndicatorProps {
    children: React.ReactNode;
    element: React.ReactNode;
    isLoading: boolean;
}

export const WrapperIndicator: React.FC<IWrapperIndicatorProps> = (props) => {
    const { children, element, isLoading } = props;

    if (isLoading) {
        return (
            <>
                {element}
            </>
        );
    }

    return (
        <>
            {children}
        </>
    );
}