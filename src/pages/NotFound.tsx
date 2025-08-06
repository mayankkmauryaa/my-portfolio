import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access:", location.pathname);
    }, [location.pathname]);

    return (
        <>
            <Helmet>
                <title>404 - Page Not Found</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="text-center text-gray-800 dark:text-white">
                    <h1 className="text-5xl font-extrabold mb-4">💀 404</h1>
                    <p className="text-xl mb-4">Oops! The page you're looking for doesn't exist.</p>
                    <Link to="/" className="text-blue-500 hover:text-blue-700 underline text-lg">
                        Return to Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
