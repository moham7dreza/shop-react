import {Link} from "react-router-dom";

export const E404 = () => {
    return (
        <>
            <div className="h-full">
                <div className="dark:bg-slate-900 bg-white flex h-full">
                    <div className="max-w-[80rem] flex flex-col mx-auto w-full h-full">
                        <main id="content">
                            <h1>404 - Page Not Found</h1>
                            <p>Sorry, the page you're looking for doesn't exist.</p>
                            <Link to="/">Go back to the homepage</Link>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}