import React from 'react'
import { useState, useEffect, memo } from 'react'
import { ITestimonialProps as TestimonialPropsType } from './Testimonial'

export interface ICarouselProps {
    children: Array<React.ReactNode>
    changeTransition: (transition: string) => void
    transition: string
}

function Carousel({ children, changeTransition, transition }: ICarouselProps) {
    const [index, setIndex] = useState(0)

    function handleKeyDown(e: KeyboardEvent) {
        switch (e.key) {
            case 'ArrowRight':
                next()
                break
        }
    }
    // event listener for left/right keys
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [index, transition])
    // shows next element
    const next = () => {
        // switch direction for slide
        if (transition === 'slide_l') changeTransition('slide_r')
        let newIndex
        if (index === children.length - 1) {
            newIndex = 0
        } else {
            newIndex = index + 1
        }
        setIndex(newIndex)
    }

    return (
        <div
            id="carousel"
            className="relative min-h-[40rem] overflow-hidden xs:min-h-[46rem] sm:min-h-[51rem] md:h-full md:min-h-fit md:w-full mx-auto"
        >
            {children.map((child, i) => {
                if (React.isValidElement<TestimonialPropsType>(child)) {
                    return React.cloneElement(child, {
                        next: next,
                        isVisible: i === index ? true : false,
                        index: index,
                    })
                }
            })}
        </div>
    )
}

export default memo(Carousel, (oldProps, newProps) => {
    return oldProps.children.length === newProps.children.length
})
