import { config } from "../utils/config"

export const useConfig = () => {
    return {
        isFounderActive: config.isFounderActive,
        navigationItem: config.getNavList()
    }
}