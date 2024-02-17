'use client'
import Image from 'next/image'
import logo from '@public/logo.svg'
import { useState } from 'react'
import { useDropdown } from '@/hooks/useDropdown'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const fixedNavOffset: number = 30

export default function Header(): JSX.Element {
    const { checkAndCloseDropDown } = useDropdown()
    const { scrollY } = useScroll()
    const [fixedNav, setFixedNav] = useState(false)

    useMotionValueEvent(scrollY, 'change', (latest): void => {
        if (latest > fixedNavOffset) {
            setFixedNav(true)
        } else {
            setFixedNav(false)
        }
    })

    return (
        <div className="flex justify-center">
            <motion.div
                className="navbar bg-primary"
                initial={{
                    width: '100%',
                }}
                animate={
                    fixedNav
                        ? {
                              position: 'fixed',
                              zIndex: 999,
                              top: '20px',
                              width: '95%',
                              borderRadius: '30px',
                          }
                        : {}
                }
                transition={{
                    ease: [0.2, 0.45, 0, 1],
                    duration: 0.3,
                    top: { duration: 0.3 },
                }}
            >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                            onMouseDown={(e) => checkAndCloseDropDown(e)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a href="/#">About us</a>
                            </li>
                            <li>
                                <a href="/#">Practice Areas</a>
                                <ul className="p-2">
                                    <li>
                                        <a href="/#">Police Defense</a>
                                    </li>
                                    <li>
                                        <a href="/#">Criminal Defense</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/#">Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <a href="/#" className="btn btn-ghost text-xl text-neutral">
                        <Image className="h-10 w-10" src={logo} alt="logo" />
                        Tom Yu Law
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a href="/#" className="text-neutral">
                                About us
                            </a>
                        </li>
                        <li>
                            <details>
                                <summary className="text-neutral">
                                    Practice Areas
                                </summary>
                                <ul className="p-2 z-10">
                                    <li>
                                        <a href="/#" className="text-neutral">
                                            Police Defense
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#" className="text-neutral">
                                            Criminal Defense
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a href="/#" className="text-neutral">
                                Contact us
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="/#" className="btn">
                        Get started
                    </a>
                </div>
            </motion.div>
        </div>
    )
}
