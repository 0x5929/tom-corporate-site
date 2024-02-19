'use client'
import classNames from 'classnames'
import { useState, useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import tom from '@public/tom.png'
import mission from '@public/mission.jpg'
import values from '@public/values.jpg'
import { useGlobalStore } from '@/app/store/zustand'
import Card from '@/components/ui/Card'
import fraud from '@public/fraud.jpg'
import notGuilty from '@public/not-guilty.jpg'
import wrongfulTermination from '@public/wrongful-termination.jpg'
import { useScroll, useMotionValueEvent } from 'framer-motion'

interface AreasOfPractice {
    first: string
    second: string
}
interface Winning {
    src: StaticImageData
    firstTitle: string
    secondTitle: string
    subTitle: string
}
interface Values {
    title: string
    desc: string
    border: string
}

const navBarTopOffset: number = 20
const navBarHeight: number = 68

const pillars = ['Experience', 'Tenacity', 'Results'] as const
const areasOfPractice: AreasOfPractice[] = [
    {
        first: 'civil',
        second: 'rights',
    },
    {
        first: 'criminal',
        second: 'defense',
    },
    {
        first: 'defense of',
        second: 'police Officers',
    },
    {
        first: 'public',
        second: 'entity',
    },
    {
        first: 'employment',
        second: 'law',
    },
]
const winnings: Winning[] = [
    {
        src: fraud,
        firstTitle: 'fraud & breach of',
        secondTitle: 'contract',
        subTitle: '45 million',
    },
    {
        src: notGuilty,
        firstTitle: 'officer',
        secondTitle: 'use of force ',
        subTitle: 'not guilty',
    },
    {
        src: wrongfulTermination,
        firstTitle: 'wrongful',
        secondTitle: 'termination',
        subTitle: '$684,000.00',
    },
]
const coreValues: Values[] = [
    {
        title: 'Communication',
        desc: 'Thorough and professional; from our initial client meeting to the courtroom',
        border: 'accent',
    },
    {
        title: 'Education',
        desc: 'Ensuring our clients understand each step of the process',
        border: 'secondary',
    },
    {
        title: 'Integrity',
        desc: 'Honoring our commitments and practicing truthfulness and accuracy',
        border: 'secondary',
    },
    {
        title: 'Dedication',
        desc: 'Perseverance and passion to meet our goal of excellence with every case',
        border: 'accent',
    },
]

export default function Content(): JSX.Element {
    const contentRef: React.MutableRefObject<null> = useRef(null)
    const winningRef: React.MutableRefObject<null> = useRef(null)
    const { update } = useGlobalStore()
    const { scrollY } = useScroll()
    const [startBlacknavOffset, setStartBlacknavOffset] = useState(10000)
    const [startNavynavOffset, setStartNavynavOffset] = useState(10000)

    const updateBlacknav: (el: HTMLElement) => void = (
        el: HTMLElement
    ): void => {
        setStartBlacknavOffset(el.offsetTop - navBarTopOffset - navBarHeight)
    }
    const updateNavynav: (el: HTMLElement) => void = (
        el: HTMLElement
    ): void => {
        setStartNavynavOffset(
            el.offsetTop -
                navBarTopOffset -
                navBarHeight +
                navBarHeight +
                el.getBoundingClientRect().height
        )
    }

    useMotionValueEvent(scrollY, 'change', (latest: number): void => {
        if (latest >= startBlacknavOffset && latest <= startNavynavOffset) {
            return update(true)
        } else {
            return update(false)
        }
    })
    useEffect((): void => {
        if (contentRef.current) {
            return updateBlacknav(contentRef.current)
        }
    }, [])
    useEffect((): void => {
        if (winningRef.current) {
            return updateNavynav(winningRef.current)
        }
    }, [])

    return (
        <>
            <div
                ref={contentRef}
                className="w-screen h-content bg-primary -mx-16 relative z-999 flex flex-col gap-8"
            >
                <div className="divider bg-neutral p-0 m-auto h-px w-full"></div>
                <div className="pillars py-20 flex sm:flex-row flex-col justify-center sm:gap-24 gap-8 items-center">
                    {pillars.map(
                        (pillar: string, indx: number): JSX.Element => (
                            <div
                                key={indx}
                                className="border border-solid border-neutral rounded-xl px-6 py-3 xs:w-56"
                            >
                                <p className="text-3xl font-bold text-center">
                                    {pillar}
                                </p>
                            </div>
                        )
                    )}
                </div>
                <div className="info-wrapper pb-8 flex justify-center flex-wrap items-start gap-16 mx-auto w-full">
                    <div className="image">
                        <Image src={tom} alt="tom" />
                    </div>
                    <div className="info lg:w-1/2 w-full lg:px-0 px-16 flex flex-col gap-4 justify-center pb-8">
                        <p className="text-lg">
                            At The Law Offices of Pelayes & Yu, APC, we
                            challenge the status quo and know the criminal
                            justice system. Retired detectives Tristan Pelayes
                            and Tom Yu have over 45 years in the law enforcement
                            profession and over 25 years of combined experience
                            as lawyers.
                        </p>
                        <p className="text-lg">
                            If you need a strong law firm to protect you and
                            your rights, look no further than The Law Offices of
                            Pelayes & Yu, APC.
                        </p>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Hac habitasse platea dictumst
                            quisque sagittis. Id interdum velit laoreet id. A
                            iaculis at erat pellentesque adipiscing commodo elit
                            at. Et ultrices neque ornare aenean euismod
                            elementum. Eget felis eget nunc lobortis mattis
                            aliquam. Nisi vitae suscipit tellus mauris a diam
                            maecenas sed enim. Purus sit amet luctus venenatis
                            lectus magna fringilla. Eu consequat ac felis donec
                            et odio pellentesque diam. Justo eget magna
                            fermentum iaculis eu. Facilisi etiam
                        </p>
                    </div>
                </div>
                <div
                    style={{ maxWidth: '1000px' }}
                    className="areas-of-practice mx-auto flex md:flex-row flex-col justify-center flex-wrap items-center gap-16 py-20"
                >
                    {areasOfPractice.map(
                        (area: AreasOfPractice, indx: number): JSX.Element => (
                            <div
                                key={indx}
                                className="w-72 border border-solid border-accent rounded-xl px-6 py-3"
                            >
                                <p className="text-2xl uppercase text-center">
                                    {area.first}
                                </p>
                                <p className="text-2xl uppercase text-center">
                                    {area.second}
                                </p>
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="winning-container w-screen bg-primary flex flex-col">
                <div className="divider bg-neutral p-0 m-auto h-px w-full"></div>
                <div
                    ref={winningRef}
                    className="winning flex mt-24 md:flex-row flex-col justify-center flex-wrap items-center gap-16"
                >
                    {winnings.map((winning: Winning, indx: number) => (
                        <Card
                            key={indx}
                            img={winning.src}
                            titleOne={winning.firstTitle}
                            titleTwo={winning.secondTitle}
                            subTitle={winning.subTitle}
                        />
                    ))}
                </div>
                <div className="divider bg-neutral p-0 mt-24 m-auto h-px w-full"></div>
            </div>
            <div className="mission-container w-full bg-black">
                <div className="mission pt-24 flex justify-center flex-wrap-reverse items-center gap-16 mx-auto w-full">
                    <div className="mission-statement lg:w-1/2 lg:px-0 px-16">
                        <p className="text-3xl font-bold mb-4">Our mission</p>
                        <p className="text-lg">
                            The Law Offices of Pelayes & Yu, APC is a premier
                            law firm that strives to achieve results that exceed
                            expectations. We deliver highly-skilled, effective,
                            and innovative legal representation to our clients
                            in a timely manner and at a reasonable cost. We take
                            our time to listen to and understand our clients’
                            concerns and customize a solution that directly
                            responds to their individual needs.
                        </p>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Pharetra diam sit amet nisl
                            suscipit adipiscing. Volutpat consequat mauris nunc
                            congue nisi. Integer vitae justo eget magna
                            fermentum. Vulputate odio ut enim blandit volutpat
                            maecenas. Amet purus gravida quis blandit. Non
                            consectetur a erat nam at lectus. Lacinia quis vel
                            eros donec ac odio tempor orci. Leo urna molestie at
                            elementum eu facilisis sed odio. Congue mauris
                            rhoncus aenean vel elit. Lectus mauris ultrices eros
                            in cursus turpis massa tincidunt.
                        </p>
                    </div>
                    <div className="mission-img">
                        <Image
                            src={mission}
                            width={500}
                            height={500}
                            alt="mission"
                        />
                    </div>
                </div>
            </div>
            <div className="divider py-24"></div>
            <div className="values pb-24 flex justify-center flex-wrap items-center gap-16 mx-auto w-full">
                <div className="mission-img">
                    <Image
                        src={values}
                        width={500}
                        height={500}
                        alt="mission"
                    />
                </div>
                <div className="mission-statement lg:w-1/2">
                    <p className="text-3xl font-bold mb-4 text-center">
                        Our values
                    </p>
                    <div className="values-wrapper flex flex-wrap justify-center items-center gap-8">
                        {coreValues.map(
                            (value: Values, indx: number): JSX.Element => (
                                <div
                                    className={classNames(
                                        'core-value',
                                        'border',
                                        'border-solid',
                                        'rounded-xl',
                                        'px-6',
                                        'py-3',
                                        'xs:w-80',
                                        'xs:h-36',
                                        {
                                            'border-secondary':
                                                value.border === 'secondary',
                                            'border-accent':
                                                value.border === 'accent',
                                        }
                                    )}
                                    key={indx}
                                >
                                    <p className="text-2xl font-bold text-center">
                                        {value.title}
                                    </p>
                                    <p className="text-lg">{value.desc}</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
