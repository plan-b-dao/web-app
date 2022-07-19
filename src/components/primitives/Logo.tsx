interface ILogoProps {}

export const Logo: React.FC<ILogoProps> = (props) => {

    return (
        <div className="p-10 flex justify-center items-center">
            <img src="./assets/plan_b_logo_large.png" alt="plan b logo" width="50" height="50" />
        </div>
    );
}