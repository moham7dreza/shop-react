import {useState} from "react";
import {SwiperList as ItemSwiperList} from "./Carousels/SwiperList.jsx";
import ReactPaginate from "react-paginate";
import {useGetProductsQuery} from "../../Features/Api/productApi.js";

export const PaginatedItems = ({perPage}) => {

    const {
        data: products = [],
        isLoading,
        isSuccess,
        isError,
    } = useGetProductsQuery(undefined)

    let status
    if (isLoading) status = 'loading'
    else if (isSuccess) status = 'success'
    else if (isError) status = 'error'

    const [itemOffset, setItemOffset] = useState(0)

    const endOffset = itemOffset + perPage

    const currentPageProducts = products.slice(itemOffset, endOffset)

    const pageCount = Math.ceil(products.length / perPage)

    const handlePageClick = (e) => {
        const newOffset = e.selected * perPage

        document.documentElement.scrollTop = 0

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