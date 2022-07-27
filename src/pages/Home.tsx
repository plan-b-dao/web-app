import { FounderCard } from "../components/card";
import { WrapperIndicator } from "../components/indicators";
import { LoadingContent } from "../components/indicators/LoadingContent";
import { useProjectNews } from "../hooks/useProjectNews";

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = (props) => {
    const [news, isFetching] = useProjectNews();

    return (
        <main>
            <h1 className="font-bold text-2xl mb-6">Project News</h1>
            <div>
                <WrapperIndicator isLoading={isFetching} element={<LoadingContent className="w-full h-32"/>}>
                    {news.map((news, index) => (
                        <FounderCard
                            key={index}
                            title={news.title}
                            desc={news.desc}
                            links={news.links}
                            buttonText={news.buttonText}
                            page={news.page}
                        />
                    ))}
                </WrapperIndicator>
            </div>
        </main>
    );
}