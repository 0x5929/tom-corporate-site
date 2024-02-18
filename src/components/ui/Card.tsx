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
        <div className="card w-96 bg-accent shadow-xl">
            <figure>
                <Image src={img} alt="card-img" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title text-black uppercase">{titleOne}</h2>
                <div className="card-title text-black uppercase">
                    {titleTwo}
                </div>
                <div className="badge badge-outline border-black">
                    <p className="uppercase text-black">{subTitle}</p>
                </div>
            </div>
        </div>
    )
}
