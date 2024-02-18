import styles from './hero.module.css'

export default function Hero(): JSX.Element {
    return (
        <div className="relative sm:px-16 h-full w-full pb-16">
            <div className={styles.imgShadow}></div>
            <div className={styles.hero}>
                <div className="flex-col sm:pl-4 px-2 bg-transparent mt-auto h-fit inline-block align-baseline">
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
        </div>
    )
}
