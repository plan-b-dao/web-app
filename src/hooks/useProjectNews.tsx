import { useEffect, useState } from "react"
import { client } from "../services/client";
import { IProjectNewsFormated } from "../services/contentful";

export const useProjectNews = (page?: string) => {
    const [news, setNews] = useState<IProjectNewsFormated[]>([]);
    const [fetching, setIsFetching] = useState(true);

    useEffect(() => {
        client.contentful.getProjectNews(page)
            .then(news => setNews(news))
            .catch(() => {})
            .finally(() => setIsFetching(false));
    }, [])
    
    return [news, fetching] as const;
}