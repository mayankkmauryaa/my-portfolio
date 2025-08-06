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
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-10 text-center max-w-md w-full mx-4">
                    <div className="text-7xl animate-bounce mb-6">💀</div>
                    <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-2">
                        404
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Oops! The page you're looking for doesn't exist.
                    </p>
                    <Link
                        to="/"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-md font-medium transition-colors duration-200"
                    >
                        Return to Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
