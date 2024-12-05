import {Hero} from "./Components/Layouts/Hero.jsx";
import {SwiperList as ItemSwiperList} from "./Components/Item/Carousels/SwiperList.jsx";
import {GridList as ItemGridList} from "./Components/Item/Carousels/GridList.jsx";
import {useMemo} from "react";
import {Spinner} from "./Components/Partials/Spinner.jsx";
import {useGetItemsQuery} from "./Features/Api/api.slice.js";

function App() {

    const {
        data: items = [],
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetItemsQuery(undefined, undefined)
    console.log(items)

    // for avoid rerendering use memo
    //
    const sortedItems = useMemo(() => {
        return items.slice().sort((a, b) => b.created_at.localeCompare(a.created_at))
    }, [items]);

    let content;
    if (isLoading) content = <Spinner/>;
    else if (isSuccess) content = <div><ItemSwiperList items={sortedItems}/><ItemGridList items={sortedItems}/></div>;
    else if (isError) content = <div>{error}</div>;

    // const dispatch = useDispatch();
    // const itemStatus = useSelector(selectItemStatus);
    // const itemError = useSelector(selectItemError);
    // const bannerStatus = useSelector(selectBannerStatus);
    // const bannerError = useSelector(selectBannerError);
    // const shopStatus = useSelector(selectShopStatus);
    // const shopError = useSelector(selectShopError);

    // useEffect(() => {
        // if (itemStatus === 'idle') dispatch(fetchItems());
        // if (bannerStatus === 'idle') dispatch(fetchBanners());
        // if (shopStatus === 'idle') dispatch(fetchShops());
    // }, [itemStatus, bannerStatus, dispatch]);

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
            <Hero/>
            {/*{renderContent(bannerStatus, bannerError, Masonry)}*/}
            {/*{renderContent(itemStatus, itemError, () => (*/}
            {/*    <div>*/}
            {/*        <ItemSwiperList/>*/}
            {/*        <ItemGridList/>*/}
            {/*    </div>*/}
            {/*))}*/}
            {content}
            {/*{renderContent(shopStatus, shopError, ShopSwiperList)}*/}
        </>
    );
}

export default App;
