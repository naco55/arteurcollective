import Image from 'next/image'

export default function EventCard({ src, alt, title, date }) {
    return (
        <div className="rounded overflow-hidden" style={{ width: '800px'}}>
            <Image src={src} alt={alt} width={650} height={1300} objectFit="cover" />
            <div className="pt-3">
                <div className="font-sans text-2xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{date}</p>
            </div>
        </div>
    )
}
