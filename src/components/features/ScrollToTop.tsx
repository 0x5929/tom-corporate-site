'use client'
import Image from 'next/image'
import scrollToTop from '@public/scrollToTop.svg'

import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const fixedScrollTopOffset: number = 30

export default function ScrollToTop(): JSX.Element | null {
    const { scrollY } = useScroll()
    const [showBtn, setShowBtn] = useState(false)

    useMotionValueEvent(scrollY, 'change', (latest: number): void => {
        if (latest > fixedScrollTopOffset) {
            setShowBtn(true)
        } else {
            setShowBtn(false)
        }
    })
    const scrollTop: () => void = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return showBtn ? (
        <motion.div
            className="w-10 h-10"
            initial={{ display: 'none' }}
            animate={
                showBtn
                    ? {
                          position: 'fixed',
                          bottom: '23%',
                          right: '1%',
                          display: 'block',
                          zIndex: '9999',
                      }
                    : {}
            }
            transition={{
                ease: 'linear',
                duration: 0.3,
            }}
        >
            <button
                className="btn btn-square bg-transparent border-none hover:bg-transparent"
                onClick={scrollTop}
            >
                <Image src={scrollToTop} color="white" alt="scroll to top" />
            </button>
        </motion.div>
    ) : null
}
