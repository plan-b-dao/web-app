export const config = {
    isFounderActive: process.env.REACT_APP_FOUNDER_ACTIVE === "1" ? true : false,
    getNavList: () => {
        const supportedRoutes = process.env.REACT_APP_SUPPORTED_ROUTES?.split(", ");
        const routes = ["overview", "wallet", "dao", "swap", "my-cards", "my-rewards", "market-checker"]
        return routes.map((route) => {
            const findRoute = supportedRoutes!.find((sr) => sr === route);

            return {
                route: route,
                isSupported: findRoute ? true : false
            }
        })
    }
}