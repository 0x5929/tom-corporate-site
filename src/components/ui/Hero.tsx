import Image from 'next/image'
import styles from './hero.module.css'
import heroPic from '@public/hero.png'

export default function Hero(): JSX.Element {
    return (
        <div className="relative h-screen">
            <div className={styles.imgShadow}>
                <Image src={heroPic} alt="hero" placeholder="blur" />
            </div>
            <div className="flex flex-col absolute lg:top-3/4 md:top-14 xs:top-16">
                <p className="text-2xl text-white uppercase">
                    welcome to the law offices of
                </p>
                <p className="text-6xl text-white uppercase">tom Yu, apc</p>
                <p className="text-2xl text-white uppercase">
                    experince combined with a strong approach
                </p>
                <p className="text-2xl text-white uppercase">
                    client focused. results driven.
                </p>
            </div>
        </div>
    )
}
