import {SwiperList as ItemSwiperList} from "./Components/Item/Carousels/SwiperList.jsx";
import {Master} from "./Components/Layouts/Master.jsx";

function App() {
    // const dispatch = useDispatch();
    // const itemStatus = useSelector(selectItemStatus);
    // const itemError = useSelector(selectItemError);
    // const bannerStatus = useSelector(selectBannerStatus);
    // const bannerError = useSelector(selectBannerError);
    // const shopStatus = useSelector(selectShopStatus);
    // const shopError = useSelector(selectShopError);
    //
    // useEffect(() => {
    //     if (itemStatus === 'idle') dispatch(fetchItems());
    //     if (bannerStatus === 'idle') dispatch(fetchBanners());
    //     if (shopStatus === 'idle') dispatch(fetchShops());
    // }, [itemStatus, bannerStatus, dispatch, shopStatus]);
    //
    // const renderContent = (status, error, Component) => {
    //     switch (status) {
    //         case 'pending':
    //             return <Spinner/>;
    //         case 'completed':
    //             return <Component/>;
    //         case 'failed':
    //             return <div>{error}</div>;
    //         default:
    //             return <E404/>;
    //     }
    // };

    return (
        <>
            <Master>

                <ItemSwiperList/>
            </Master>
            {/*<Hero/>*/}
            {/*{renderContent(bannerStatus, bannerError, Masonry)}*/}
            {/*{renderContent(itemStatus, itemError, () => (*/}
            {/*    <div>*/}
            {/*        <ItemSwiperList/>*/}
            {/*        <ItemGridList/>*/}
            {/*    </div>*/}
            {/*))}*/}
            {/*{renderContent(shopStatus, shopError, ShopSwiperList)}*/}
        </>
    );
}

export default App;
