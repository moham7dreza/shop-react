import logo from '../../Assets/logo.svg';

export const Spinner = ({text, size}) => {
    return (
        <>
            <div className="dark:bg-slate-900 bg-white max-w-[80rem] flex flex-col mx-auto size-full">

                {/*<!-- ========== MAIN CONTENT ========== -->*/}
                <main id="content">
                    <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h1 className={'text-2xl font-bold capitalize mt-10'}>
                                {text}
                            </h1>
                        </div>
                    </div>
                </main>
                {/*<!-- ========== END MAIN CONTENT ========== -->*/}
            </div>
        </>
    )
}