import {Header} from "./Components/Layouts/Header.jsx";
import {Hero} from "./Components/Layouts/Hero.jsx";
import {Masonry} from "./Components/Layouts/Masonry.jsx";
import {SwiperList} from "./Components/Section/Layout/SwiperList.jsx";
import {GridList} from "./Components/Section/Layout/GridList.jsx";
import {Footer} from "./Components/Layouts/Footer.jsx";

function App() {
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
                            <Hero/>
                            <Masonry/>
                            <SwiperList/>
                            <GridList/>
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

export default App
