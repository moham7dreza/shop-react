import {Navbar} from "../Navbar.jsx";

export const Master = ({children}) => {
    return (
        <>
            <div className="h-full">
                <div className="dark:bg-slate-900 bg-white flex h-full">
                    <div className="max-w-[80rem] flex flex-col mx-auto w-full h-full">
                        <Navbar/>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}