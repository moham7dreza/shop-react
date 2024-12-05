import ListCard from "../Cards/ListCard.jsx";

export const GridList = ({items}) => {
    // const items = useSelector(selectItems)
    //
    // const sortedItems = items.slice().sort((a, b) => b.created_at.localeCompare(a.created_at))

    // const {
    //     data: items
    // } = useGetItemsQuery(undefined, undefined)

    return (
        <>
            {/*<!-- Card Blog -->*/}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/*<!-- Title -->*/}
                <div className="mx-auto text-start mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">تست</h2>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">تست</p>
                </div>
                {/*<!-- End Title -->*/}
                {/*<!-- Grid -->*/}
                <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                    {
                        items.map((item) => (
                            <ListCard key={item.id} item={item}/>
                        ))
                    }
                </div>
                {/*<!-- End Grid -->*/}
            </div>
            {/*<!-- End Card Blog -->*/}
        </>
    )
}