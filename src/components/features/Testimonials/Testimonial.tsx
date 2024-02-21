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
}

function Testimonial({
    data,
    previous = () => {},
    next = () => {},
    isVisible = true,
    variants,
}: ITestimonialProps) {
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
                    className="absolute inset-0"
                >
                    <article
                        className={
                            'mt-8 overflow-auto md:relative md:isolate md:mt-0 md:flex md:w-full md:items-center md:justify-start md:bg-[length:48%] md:bg-testimonial h-fit'
                        }
                    >
                        <h1 className="sr-only">Testimonial</h1>
                        <div className="relative mx-auto mt-14 aspect-square w-[67.5%] md:absolute md:top-[48%] md:right-[11.5%] md:-z-[1] md:mt-0 md:h-[67.5%] md:w-auto md:-translate-y-1/2">
                            <div className="absolute -bottom-[6%] left-0 right-0 mx-auto flex h-[2.5rem] w-[5rem] overflow-hidden rounded-full border-[1px] border-grayishBlue/50 bg-white shadow-xl hover:border-grayishBlue sm:h-[11%] sm:w-[21%] md:left-[11.5%] md:right-auto [&>button]:flex [&>button]:basis-1/2 [&>button]:items-center [&>button]:justify-center [&>button]:bg-white [&>button]:transition-all [&>button]:duration-500 hover:[&>button]:shadow-xl hover:[&>button]:brightness-75">
                                <button
                                    aria-label="Previous Slide"
                                    onClick={() => previous()}
                                ></button>
                                <button
                                    aria-label="Next Slide"
                                    onClick={() => next()}
                                ></button>
                            </div>
                        </div>
                        <div className="mx-auto h-fit mt-14 w-[86%] bg-[url('/pattern-quotes.svg')] bg-[length:19%] bg-top bg-no-repeat pt-6 text-center text-lg leading-6 md:mt-0 md:ml-[11.5%] md:h-[45%] md:w-[45%] md:bg-[left_18%_top] md:pt-[4%] md:text-left md:text-[0.65rem] lg:overflow-auto lg:text-[0.79rem] xl:text-base">
                            <q className="md:text-[2em] xl:leading-[2.725rem] ">
                                &nbsp;{data.testimonial}&nbsp;
                            </q>
                            <div className="mt-4 gap-2 text-base md:mt-10 md:flex md:text-[1.25em]">
                                <p className="font-bold">{data.name}</p>
                                <p className="text-grayishBlue">{data.role}</p>
                            </div>
                        </div>
                    </article>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Testimonial
