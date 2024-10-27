import {Hero} from "./Components/Layouts/Hero.jsx";
import {Masonry} from "./Components/Layouts/Masonry.jsx";
import {SwiperList} from "./Components/Item/Carousels/SwiperList.jsx";
import {GridList} from "./Components/Item/Carousels/GridList.jsx";
import {useEffect} from "react";
import {fetchItems, selectError, selectStatus} from "./Features/Item/item.slice.js";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "./Components/Partials/Spinner.jsx";
import {E404} from "./Components/Error/E404.jsx";

function App() {

    const dispatch = useDispatch()

    const status = useSelector(selectStatus)
    const error = useSelector(selectError)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchItems())
        }
    }, [status]);

    let content

    switch (status) {
        case 'pending':
            content = <Spinner/>
            break
        case 'completed':
            content = <div>
                <SwiperList/>
                <GridList/>
            </div>
            break
        case 'failed':
            content = <div>{error}</div>
            break
        default:
            content = <E404/>
    }

    return (
        <>
            <Hero/>
            <Masonry/>
            {
                content
            }
        </>
    )
}

export default App
