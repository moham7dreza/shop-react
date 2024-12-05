import {Footer} from "./Footer.jsx";
import {Outlet} from "react-router-dom";

function MainLayout() {

    // const dispatch = useDispatch()
    //
    // const categoryStatus = useSelector(selectCategoryStatus)
    // const categoryError = useSelector(selectCategoryError)
    //
    // useEffect(() => {
    //     if (categoryStatus === 'idle') {
    //         // dispatch(fetchCategories())
    //     }
    // }, [categoryStatus, dispatch]);
    //
    // let headerContent;
    //
    // switch (categoryStatus) {
    //     case 'pending':
    //         headerContent = <Spinner/>
    //         break
    //     case 'completed':
    //         headerContent = <div>
    //             <Header/>
    //         </div>
    //         break
    //     case 'failed':
    //         headerContent = <div>{categoryError}</div>
    //         break
    //     default:
    //         headerContent = <E404/>
    // }

    return (
        <>
            <div className="h-full">
                <div className="dark:bg-slate-900 bg-white flex h-full">
                    <div className="max-w-[80rem] flex flex-col mx-auto w-full h-full">
                        {/*<!-- ========== HEADER ========== -->*/}

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
