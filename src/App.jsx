import {Hero} from "./Components/Layouts/Hero.jsx";
import {Masonry} from "./Components/Layouts/Masonry.jsx";
import {SwiperList} from "./Components/Item/Carousels/SwiperList.jsx";
import {GridList} from "./Components/Item/Carousels/GridList.jsx";
import {useEffect} from "react";
import {fetchItems, selectStatus} from "./Features/Item/item.slice.js";
import {useDispatch, useSelector} from "react-redux";

function App() {

    const dispatch = useDispatch()

    const status = useSelector(selectStatus)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchItems())
        }
    }, [status]);

    return (
        <>
            <Hero/>
            <Masonry/>
            <SwiperList/>
            <GridList/>
        </>
    )
}

export default App
