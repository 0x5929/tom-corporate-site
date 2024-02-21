import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface transitionsObject {
    [key: string]: { [key: string]: object }
}
export const transitions: transitionsObject = {
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    },
    scale: {
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
    },
    rotate: {
        initial: {
            opacity: 0,
            scale: 0,
            rotate: -360,
            x: 0,
            scaleX: 1,
            scaleY: 1,
        },
        animate: { opacity: 1, scale: 1, rotate: 0 },
        exit: { opacity: 0, scale: 0, rotate: 360 },
    },
    flip_y: {
        initial: { opacity: 0, scaleX: 0 },
        animate: { opacity: 1, scaleX: 1 },
        exit: { opacity: 0, scaleX: 0 },
    },
    flip_x: {
        initial: { opacity: 0, scaleY: 0 },
        animate: { opacity: 1, scaleY: 1 },
        exit: { opacity: 0, scaleY: 0 },
    },
    slide_r: {
        initial: { opacity: 0, x: '-100%' },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 0 },
    },
    slide_l: {
        initial: { opacity: 0, x: '100%' },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 0 },
    },
}

interface Data {
    name: string
    role: string
    testimonial: string
    image: string
}

export interface ITestimonialProps {
    data: Data
    previous?: () => void
    next?: () => void
    isVisible?: boolean
    variants: string
    index: number
}

function Testimonial({
    data,
    previous = () => {},
    next = () => {},
    isVisible = true,
    variants,
    index,
}: ITestimonialProps) {
    useEffect(() => {
        const testimonialNext = setInterval(() => {
            next()
        }, 3000)
        return () => {
            clearInterval(testimonialNext)
        }
    }, [index])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key={String(Math.random())}
                    variants={transitions[`${variants}`]}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-fit"
                >
                    <article
                        className={
                            'mt-8 overflow-auto md:relative md:isolate md:mt-0 md:flex md:w-full md:items-center md:justify-start md:bg-[length:48%] md:bg-testimonial h-fit'
                        }
                    >
                        <h1 className="sr-only">Testimonial</h1>
                        <div className="mx-auto h-fit mt-14 w-[86%] bg-[url('/pattern-quotes.svg')] bg-[length:19%] bg-top bg-no-repeat pt-6 text-center text-lg leading-6 md:mt-0 md:h-[45%] md:w-[55%] md:bg-[left_18%_top] md:pt-[4%] md:text-left md:text-[0.65rem] lg:overflow-auto lg:text-[0.79rem] xl:text-base">
                            <q className="md:text-[2em] xl:leading-[2.725rem] ">
                                &nbsp;{data.testimonial}&nbsp;
                            </q>
                            <div className="mt-4 gap-2 text-base md:mt-10 md:flex md:text-[1.25em]">
                                <p className="font-bold">{data.name}</p>
                                <p className="text-accent">{data.role}</p>
                            </div>
                        </div>
                    </article>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Testimonial
