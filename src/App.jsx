import {Hero} from "./Components/Layouts/Hero.jsx";
import {Masonry} from "./Components/Layouts/Masonry.jsx";
import {SwiperList} from "./Components/Item/Carousels/SwiperList.jsx";
import {GridList} from "./Components/Item/Carousels/GridList.jsx";

function App() {
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
