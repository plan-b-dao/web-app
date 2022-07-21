import { LinkProps, useResolvedPath, useMatch, Link } from "react-router-dom";
import { useConfig } from "../hooks/useConfig"
import { getClass, getRouteLink, getRoutName } from "./Navigation.utils";

interface INavigationProps {}

interface ICustomeNavLinkProps extends LinkProps {
    isSupported: boolean
}

const CustomeNavLink: React.FC<ICustomeNavLinkProps> = ({ children, to, isSupported, ...props }) => {
    const resoved = useResolvedPath(to);
    const match = useMatch({ path: resoved.pathname, end:true });

    if (!isSupported) {
        return (
            <div className={getClass(match ? true : false, isSupported)}>{children}</div>
        );
    }
    
    return (
        <Link to={to} {...props}>
            <div className={getClass(match ? true : false, isSupported)}>{children}</div>
        </Link>
    );
}

export const Navigation: React.FC<INavigationProps> = () => {
    const { navigationItem } = useConfig();

    return (
        <nav className="space-y-2">
            {navigationItem.map((route, id) => (
                <CustomeNavLink key={id} to={getRouteLink(route.route)} isSupported={route.isSupported}>{getRoutName(route.route)}</CustomeNavLink>
            ))}
        </nav>
    )
}