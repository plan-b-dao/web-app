import { FounderCard } from "../components/card";

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = (props) => {

    return (
        <main>
            <h1 className="font-bold text-2xl mb-6">Project News</h1>
            <div>
                <FounderCard />
            </div>
        </main>
    );
}