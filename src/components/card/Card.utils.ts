import { BaseElementType } from "../../constants";

export const getCardClass = (type: BaseElementType, appendClasses?: string) => {
    const baseClass = "p-5 relative rounded "
    
    switch (type) {
        case "secondary":
            return baseClass + "shadow bg-dark-jungle text-cultured-light " + (appendClasses || "");
        case "gradient":
            return baseClass + "shadow bg-gradient text-cultured-light " + (appendClasses || "");
        case "warning":
            return baseClass + "shadow bg-rosso-warning text-cultured-light " + (appendClasses || "");
        case "danger":
            return baseClass + "shadow text-cultured-light bg-rosso " + (appendClasses || "");
        default:
            return baseClass + "bg-cultured border-[2px] border-cultured-dark text-dark-jungle  " + (appendClasses || "");
    }
}

export const getCardType = (completed: boolean) => {
    if (completed) {
        return "gradient";
    } else {
        return "primary";
    }
}