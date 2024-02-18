'use client'
import { useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import tom from '@public/tom.png'
import { useGlobalStore } from '@/app/store/zustand'
import Card from '@/components/ui/Card'
import fraud from '@public/fraud.jpg'
import notGuilty from '@public/not-guilty.jpg'
import wrongfulTermination from '@public/wrongful-termination.jpg'

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
        subTitle: '$684,000',
    },
]

export default function Content(): JSX.Element {
    const contentRef = useRef(null)
    const { update } = useGlobalStore()

    useEffect(() => {
        if (contentRef.current) {
            update(contentRef.current['offsetTop'] - 20 - 68)
        }
    }, [])
    return (
        <>
            <div
                ref={contentRef}
                className="w-full h-content bg-primary -mx-16 relative z-999 flex flex-col gap-8"
            >
                <div className="pillars py-24 flex sm:flex-row flex-col sm:justify-around justify-center gap-8 items-center">
                    {pillars.map(
                        (pillar: string, indx: number): JSX.Element => (
                            <div
                                key={indx}
                                className="border border-solid border-neutral rounded-xl px-6 py-3"
                            >
                                <p className="text-3xl font-bold">{pillar}</p>
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
                <div className="areas-of-practice flex md:flex-row flex-col justify-center flex-wrap items-center gap-16 py-24">
                    {areasOfPractice.map(
                        (area: AreasOfPractice, indx: number): JSX.Element => (
                            <div
                                key={indx}
                                className="border border-solid border-neutral rounded-xl px-6 py-3"
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
            <div className="winning flex my-24 md:flex-row flex-col justify-center flex-wrap items-center gap-16">
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
        </>
    )
}
