export enum NETWORK {
    MAINNET = 1,
    ROPSTEN = 3,
    LOCAL = 1337
}

export const config = {
    isFounderActive: process.env.REACT_APP_FOUNDER_ACTIVE === "1" ? true : false,
    getNavList: () => {
        const supportedRoutes = process.env.REACT_APP_SUPPORTED_ROUTES?.split(", ");
        const routes = ["overview", "wallet", "dao", "swap", "my-cards", "my-rewards", "market-checker", "seed-capital"]
        return routes.map((route) => {
            const findRoute = supportedRoutes!.find((sr) => sr === route);

            return {
                route: route,
                isSupported: findRoute ? true : false
            }
        })
    },
    developmentEnv: () => {
        switch(process.env.REACT_APP_NETWORK) {
            case "1":
                return NETWORK.MAINNET;
            case "3":
                return NETWORK.ROPSTEN;
            default:
                return NETWORK.LOCAL;
        }
    },
}