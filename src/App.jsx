import {SwiperList as ItemSwiperList} from "./Components/Item/Carousels/SwiperList.jsx";
import {Master} from "./Components/Layouts/Master.jsx";
import {useState} from "react";
import ReactPaginate from "react-paginate";
import {useSelector} from "react-redux";
import {selectItems, selectItemStatus} from "./Features/Item/item.slice.js";
import {selectProduct, selectProducts, selectProductStatus} from "./slices/productSlice.js";

const PaginatedProducts = ({perPage, products, status}) => {
    const [itemOffset, setItemOffset] = useState(0)

    const endOffset = itemOffset + perPage

    const currentPageProducts = products.slice(itemOffset, endOffset)

    const pageCount = Math.ceil(products.length / perPage)

    const handlePageClick = (e) => {
        const newOffset = e.selected * perPage
        setItemOffset(newOffset)
    }

    return (
        <>
            <ItemSwiperList items={currentPageProducts} status={status}/>

            <ReactPaginate
                containerClassName="flex justify-center items-center mt-8 mb-4"
                pageClassName="block text-white border border-solid border-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-2"
                activeClassName="bg-palette-primary text-palette-light hover:bg-palette-dark"
                breakLabel="..."
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={null}
                nextLabel={null}
                renderOnZeroPageCount={null}
            />

        </>
    )
}

const App = () => {
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

    const items = useSelector(selectProducts)
    const status = useSelector(selectProductStatus)
    // console.log(items)
    const sortedItems = items.slice().sort((a, b) => b.created_at.localeCompare(a.created_at))
    // console.log(sortedItems)
    return (
        <>
            <Master>

                <PaginatedProducts perPage={8} products={sortedItems} status={status} />
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
