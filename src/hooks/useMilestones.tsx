import { useEffect, useState } from "react";
import { client } from "../services/client";
import { IMilestoneResolved } from "../services/contentful";

export const useMilestones = () => {
    const [milestones, setMilestones] = useState<IMilestoneResolved[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        client.contentful.getMilestones()
            .then(milestones => setMilestones(milestones))
            .catch(() => {})
            .finally(() => setIsLoading(false));
    }, [])

    return [milestones, isLoading] as const;
}