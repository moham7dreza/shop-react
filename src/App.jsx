import {Hero} from "./Components/Layouts/Hero.jsx";
import {Masonry} from "./Components/Layouts/Masonry.jsx";
import {SwiperList} from "./Components/Item/Carousels/SwiperList.jsx";
import {GridList} from "./Components/Item/Carousels/GridList.jsx";
import {useEffect} from "react";
import {fetchItems, selectItemError, selectItemStatus} from "./Features/Item/item.slice.js";
import {fetchBanners, selectBannerError, selectBannerStatus} from "./Features/Banner/banner.slice.js";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "./Components/Partials/Spinner.jsx";
import {E404} from "./Components/Error/E404.jsx";

function App() {
    const dispatch = useDispatch();
    const itemStatus = useSelector(selectItemStatus);
    const itemError = useSelector(selectItemError);
    const bannerStatus = useSelector(selectBannerStatus);
    const bannerError = useSelector(selectBannerError);

    useEffect(() => {
        if (itemStatus === 'idle') dispatch(fetchItems());
        if (bannerStatus === 'idle') dispatch(fetchBanners());
    }, [itemStatus, bannerStatus, dispatch]);

    const renderContent = (status, error, Component) => {
        switch (status) {
            case 'pending':
                return <Spinner/>;
            case 'completed':
                return <Component/>;
            case 'failed':
                return <div>{error}</div>;
            default:
                return <E404/>;
        }
    };

    return (
        <>
            <Hero/>
            {renderContent(bannerStatus, bannerError, Masonry)}
            {renderContent(itemStatus, itemError, () => (
                <div>
                    <SwiperList/>
                    <GridList/>
                </div>
            ))}
        </>
    );
}

export default App;
