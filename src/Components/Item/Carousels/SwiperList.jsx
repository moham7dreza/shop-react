import {SimpleCard} from "../Cards/SimpleCard";
import {useSelector} from "react-redux";
import {selectItems} from "../../../Features/Item/item.slice.js";
import {useGetProductsQuery} from "../../../Features/Api/productApi.js";
import {Spinner} from "../../Partials/Spinner.jsx";
import {E404} from "../../Error/E404.jsx";

export const SwiperList = ({items, status}) => {
    // const items = useSelector(selectItems)
    //
    // const sortedItems = items.slice().sort((a, b) => b.created_at.localeCompare(a.created_at))

    // const {items2, status} = useSelector(state => state.products)
    // console.log(status)
    // console.log(items)
    // const {data: items} = useGetProductsQuery(undefined, undefined)
    // console.log(items2)
    return (
        <>
            {
                status === 'success' ?
                    (
                        <section>
                            {/*<!-- Card Blog -->*/}
                            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                                {/*<!-- Title -->*/}
                                <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">تست</h2>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">تست</p>
                                </div>
                                {/*<!-- End Title -->*/}
                                {/*<!-- Grid -->*/}
                                <div className="grid lg:grid-cols-4 lg:gap-y-16 gap-10">
                                    {
                                        items?.map((item, index) => (
                                            <SimpleCard key={index} item={item}/>
                                        ))
                                    }
                                </div>
                                {/*<!-- End Grid -->*/}
                            </div>
                            {/*<!-- End Card Blog -->*/}
                        </section>
                    ) : status === 'loading' ?
                        (
                            <Spinner/>
                        ) : <E404/>
            }
        </>
    )
}