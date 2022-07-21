export const getClass = (active: boolean, isSupported: boolean, className?: string) => {
    const baseClass = "px-2 py-2 mx-2 text-sm rounded-xl my-3 font-bold "
    
    if (!isSupported) {
        return baseClass + "bg-cultured-dark text-[#CCCCCC] cursor-not-allowed";
    }

    if (active) {
        return baseClass + "bg-dark-jungle text-cultured-light cursor-pointer hover:bg-dark-jungle-light"
    }

    return baseClass + "hover:bg-cultured-dark cursor-pointer";
}

export const getRouteLink = (route: string) => {
    switch(route) {
        case "overview":
            return "/";
        default:
            return `/${route}`;
    }
}

export const getRoutName = (route: string) => {
    return route.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}