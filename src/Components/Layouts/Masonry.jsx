import {useSelector} from "react-redux";
import {selectBanners} from "../../Features/Banner/banner.slice.js";
import {Link} from "react-router-dom";

export const Masonry = () => {
    const banners = useSelector(selectBanners)
    console.log(banners)

    return (
        <>
            {/*<!-- Masonry Cards -->*/}
            <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/*<!-- Grid -->*/}
                <div className="grid sm:grid-cols-12 gap-6">
                    <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
                        {/*<!-- Card -->*/}
                        <Link to={'/'}
                              className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                                <img
                                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                                    src={banners[0].image ?? ''}
                                    alt="Image Description"/>
                            </div>
                            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                                <div
                                    className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                                    {banners[0].title ?? ''}
                                </div>
                            </div>
                        </Link>
                        {/*<!-- End Card -->*/}
                    </div>
                    {/*<!-- End Col -->*/}

                    <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
                        {/*<!-- Card -->*/}
                        <Link to={'/'}
                              className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                                <img
                                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                                    src={banners[1].image ?? ''}
                                    alt="Image Description"/>
                            </div>
                            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                                <div
                                    className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                                    {banners[1].title ?? ''}
                                </div>
                            </div>
                        </Link>
                        {/*<!-- End Card -->*/}
                    </div>
                    {/*<!-- End Col -->*/}

                    <div className="col-span-12 md:col-span-4">
                        {/*<!-- Card -->*/}
                        <Link to={'/'}
                              className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                                <img
                                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                                    src={banners[2].image ?? ''}
                                    alt="Image Description"/>
                            </div>
                            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                                <div
                                    className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                                    {banners[2].title ?? ''}
                                </div>
                            </div>
                        </Link>
                        {/*<!-- End Card -->*/}
                    </div>
                    {/*<!-- End Col -->*/}

                    <div className="col-span-12 sm:col-span-6 md:col-span-4">
                        {/*<!-- Card -->*/}
                        <Link to={'/'}
                              className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                                <img
                                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                                    src={banners[3].image ?? ''}
                                    alt="Image Description"/>
                            </div>
                            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                                <div
                                    className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                                    {banners[3].title ?? ''}
                                </div>
                            </div>
                        </Link>
                        {/*<!-- End Card -->*/}
                    </div>
                    {/*<!-- End Col -->*/}

                    <div className="col-span-12 sm:col-span-6 md:col-span-4">
                        {/*<!-- Card -->*/}
                        <Link to={'/'}
                              className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                                <img
                                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                                    src={banners[4].image ?? ''}
                                    alt="Image Description"/>
                            </div>
                            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                                <div
                                    className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                                    {banners[4].title ?? ''}
                                </div>
                            </div>
                        </Link>
                        {/*<!-- End Card -->*/}
                    </div>
                    {/*<!-- End Col -->*/}
                </div>
                {/*<!-- End Grid -->*/}
            </div>
            {/*<!-- End Masonry Cards -->*/}
        </>
    )
}