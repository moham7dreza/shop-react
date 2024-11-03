import {Link} from "react-router-dom";
import {ShowTime} from "../../Partials/ShowTime.jsx";

export const SimpleCard = ({shop}) => {
    return (
        <>
            {/*<!-- Card -->*/}
            <Link to={`shops/${shop.id}`}
                  className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <div className="aspect-w-16 aspect-h-11">
                    <img className="w-full object-cover rounded-xl"
                         src={shop.image}
                         alt="Image Description"/>
                </div>
                <div className="my-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                        {shop.title}
                    </h3>
                    <p className="mt-5 text-gray-600 dark:text-gray-400">
                        {shop.body}
                    </p>
                </div>
                <div className="mt-auto flex shops-center gap-x-3">
                    <img className="w-8 h-8 rounded-full"
                         src={shop.user_image}
                         alt="Image Description"/>
                    <div>
                        <h5 className="text-sm text-gray-800 dark:text-gray-200">تست</h5>
                    </div>
                </div>
                <div className='mt-3 text-gray-600 dark:text-gray-400 text-left'>
                    <ShowTime timestamp={shop.created_at}/>
                </div>
            </Link>
            {/*<!-- End Card -->*/
            }
        </>
    )
}