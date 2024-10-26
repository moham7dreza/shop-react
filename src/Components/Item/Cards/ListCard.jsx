import {ShowTime} from "../../Partials/ShowTime.jsx";
import {Link} from "react-router-dom";
import {Reactions} from "../Button/Reactions.jsx";

export const ListCard = ({item}) => {
    return (
        <>
            {/*<!-- Card -->*/}
            <section className="flex flex-col">
                <Link to={`/items/${item.id}`}
                      className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <div className="sm:flex">
                        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                            <img
                                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                                src={item.image ?? item.image[0]}
                                alt="Image Description"/>
                        </div>
                        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                {item.name}
                            </h3>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                {item.display_name}
                            </p>
                            <div className='mt-3 text-gray-600 dark:text-gray-400'>
                                <ShowTime timestamp={item.release_at}/>
                            </div>
                        </div>
                    </div>
                </Link>
                <Reactions item={item}/>
            </section>
            {/*<!-- End Card -->*/}
        </>
    )
}