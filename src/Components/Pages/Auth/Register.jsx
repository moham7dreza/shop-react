import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {userWasRegistered} from "../../../Features/User/user.slice.js";

export const Register = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [terms, setTerms] = useState(0)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onEmailChanged = (e) => setEmail(e.target.value)
    const onPassChanged = (e) => setPass(e.target.value)
    const onConfirmPassChanged = (e) => setConfirmPass(e.target.value)
    const onTermsChanged = (e) => setTerms(e.target.value)

    const canSave = [email, pass, confirmPass, terms].every(Boolean) && pass === confirmPass
    const handleFormSubmit = () => {
        if (canSave) {

            dispatch(userWasRegistered(email, pass))

            setTerms(0)
            setPass('')
            setConfirmPass('')
            setEmail('')

            navigate('/')
        }
    }

    return (
        <>
            <div
                className="max-w-96 mx-auto mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">ثبت نام</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                            حساب کاربری داری؟
                            <Link to={'/login'}
                                  className="mx-2 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500">
                                وارد شو
                            </Link>
                        </p>
                    </div>

                    <div className="mt-5">
                        {/*<!-- Form -->*/}
                        <form>
                            <div className="grid gap-y-4">
                                {/*<!-- Form Group -->*/}
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2 dark:text-white">ایمیل</label>
                                    <div className="relative">
                                        <input type="email" id="email" name="email"
                                               value={email} onChange={onEmailChanged}
                                               className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                               required aria-describedby="email-error"/>
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            <svg className="size-5 text-red-500" width="16" height="16"
                                                 fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                <path
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                        ایمیل معتبر نیست
                                    </p>
                                </div>
                                {/*<!-- End Form Group -->*/}

                                {/*<!-- Form Group -->*/}
                                <div>
                                    <label htmlFor="password"
                                           className="block text-sm mb-2 dark:text-white">رمز عبور</label>
                                    <div className="relative">
                                        <input type="password" id="password" name="password"
                                               value={pass} onChange={onPassChanged}
                                               className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                               required aria-describedby="password-error"/>
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            <svg className="size-5 text-red-500" width="16" height="16"
                                                 fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                <path
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">
                                        رمز عبور معتبر نیست
                                    </p>
                                </div>
                                {/*<!-- End Form Group -->*/}

                                {/*<!-- Form Group -->*/}
                                <div>
                                    <label htmlFor="confirm-password" className="block text-sm mb-2 dark:text-white">
                                        تایید رمز عبور
                                    </label>
                                    <div className="relative">
                                        <input type="password" id="confirm-password" name="confirm-password"
                                               value={confirmPass} onChange={onConfirmPassChanged}
                                               className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                               required aria-describedby="confirm-password-error"/>
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            <svg className="size-5 text-red-500" width="16" height="16"
                                                 fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                <path
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">رمز عبور
                                        مطابقت ندارد</p>
                                </div>
                                {/*<!-- End Form Group -->*/}

                                {/*<!-- Checkbox -->*/}
                                <div className="flex items-center">
                                    <div className="flex">
                                        <input id="terms" name="terms" type="checkbox"
                                               value={terms} onChange={onTermsChanged}
                                               className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                                    </div>
                                    <div className="ms-3">
                                        <label htmlFor="terms" className="text-sm dark:text-white">
                                            پذیرفتن
                                        </label>
                                        <Link to={'/terms'}
                                              className="mx-3 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500">
                                            قوانین و شرایط
                                        </Link>
                                    </div>
                                </div>
                                {/*<!-- End Checkbox -->*/}

                                <button type="button" onClick={handleFormSubmit}
                                        disabled={!canSave}
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    ثبت شو
                                </button>
                            </div>
                        </form>
                        {/*<!-- End Form -->*/}
                    </div>
                </div>
            </div>
        </>
    )
}