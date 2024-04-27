import Image from 'next/image'

export default function EventCard({ src, alt, title, date }) {
    return (
        <div className="rounded overflow-hidden max-w-full">
            <Image
                src={src}
                alt={alt}
                layout="responsive"
                width={800}
                height={1600}
                objectFit="cover" />
            <div className="pt-3">
                <div className="text-black font-sans text-2xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{date}</p>
            </div>
        </div>
    )
}
