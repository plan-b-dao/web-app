import { BaseElementType } from "../../constants";

export const getCardClass = (type: BaseElementType, appendClasses?: string) => {
    const baseClass = "p-5 relative shadow rounded "
    
    switch (type) {
        case "secondary":
            return baseClass + "bg-dark-jungle text-cultured-light " + (appendClasses || "");
        case "gradient":
            return baseClass + "bg-gradient text-cultured-light " + (appendClasses || "");
        case "warning":
            return baseClass + "bg-rosso-warning text-cultured-light " + (appendClasses || "");
        case "danger":
            return baseClass + "text-cultured-light bg-rosso " + (appendClasses || "");
        default:
            return baseClass + "bg-cultured-dark text-dark-jungle  " + (appendClasses || "");
    }
}