import {Header} from "./Header.jsx";
import {Footer} from "./Footer.jsx";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <>
            <div className="h-full">
                <div className="dark:bg-slate-900 bg-white flex h-full">
                    <div className="max-w-[80rem] flex flex-col mx-auto w-full h-full">
                        {/*<!-- ========== HEADER ========== -->*/}
                        <Header/>
                        {/*<!-- ========== END HEADER ========== -->*/}

                        {/*<!-- ========== MAIN CONTENT ========== -->*/}
                        <main id="content" role="main">
                            <Outlet/>
                        </main>
                        {/*<!-- ========== END MAIN CONTENT ========== -->*/}

                        {/*<!-- ========== FOOTER ========== -->*/}
                        <Footer/>
                        {/*<!-- ========== END FOOTER ========== -->*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout
