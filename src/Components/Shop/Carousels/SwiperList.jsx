import {useSelector} from "react-redux";
import {selectShops} from "../../../Features/Shop/shop.slice.js";
import {SimpleCard} from "../Cards/SimpleCard.jsx";

export const SwiperList = () => {
    const shops = useSelector(selectShops)

    const sortedShops = shops.slice().sort((a, b) => b.created_at.localeCompare(a.created_at))

    return (
        <>
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
                        sortedShops.map((item) => (
                            <SimpleCard key={item.id} item={item}/>
                        ))
                    }
                </div>
                {/*<!-- End Grid -->*/}
            </div>
            {/*<!-- End Card Blog -->*/}
        </>
    )
}