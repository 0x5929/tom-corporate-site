import { motion } from 'framer-motion'
import classNames from 'classnames'

const cursorVariants = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: 'linear',
            times: [0, 0.5, 0.5, 1],
        },
    },
}

export default function CursorBlinker({
    smallCursor,
}: {
    smallCursor: boolean
}) {
    return (
        <motion.div
            variants={cursorVariants}
            animate="blinking"
            className={classNames('inline-block', 'ml-[1px]', 'w-[4px]', {
                'h-4': smallCursor,
                'h-6': !smallCursor,
                'bg-accent': smallCursor,
                'bg-neutral': !smallCursor,
            })}
        />
    )
}
