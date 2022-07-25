import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

interface INotFoundProps {}

export const NotFound: React.FC<INotFoundProps> = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        const id = setTimeout(() => {
            navigate("/")
        }, 3000)

        return () => clearTimeout(id);
    });

    return (
        <main className="flex flex-col items-center justify-center w-screen h-screen">
            <h1 className="font-bold text-2xl mb-6">Not Found</h1>
            <p>should redirect to homepage, if not click <Link to="/" className=" underline font-bold">here</Link></p>
        </main>
    );
}