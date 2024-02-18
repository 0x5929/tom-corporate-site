import Image, { StaticImageData } from 'next/image'

export default function Card({
    img,
    titleOne,
    titleTwo,
    subTitle,
}: {
    img: StaticImageData
    titleOne: string
    titleTwo: string
    subTitle: string
}): JSX.Element {
    return (
        <div className="card w-96 bg-primary shadow-xl">
            <figure>
                <Image src={img} alt="card-img" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title uppercase">{titleOne}</h2>
                <div className="card-title uppercase">{titleTwo}</div>
                <p className="uppercase">{subTitle}</p>
            </div>
        </div>
    )
}
