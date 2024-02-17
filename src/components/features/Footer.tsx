import Image from 'next/image'
import logo from '@public/logo.svg'

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-primary rounded-lg shadow dark:bg-gray-900 m-4 mb-0">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="/#"
                        className="flex justify-center items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <Image className="h-10 w-10" src={logo} alt="logo" />
                        <span className="self-start text-2xl font-semibold whitespace-nowrap dark:text-white text-neutral my-auto">
                            Tom Yu Law
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a
                                href="/#"
                                className="hover:underline me-4 md:me-6 text-neutral"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#"
                                className="hover:underline me-4 md:me-6 text-neutral"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#"
                                className="hover:underline me-4 md:me-6 text-neutral"
                            >
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#"
                                className="hover:underline text-neutral"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-smtext-neutral sm:text-center">
                    © 2023{' '}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Elemental Software Solutions™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}
