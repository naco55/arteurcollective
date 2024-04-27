import Link from 'next/link';
import Image from 'next/image';

const ArtistCard = ({ name, imageSrc }) => {
    const artistPageUrl = `/artists/${encodeURIComponent(name.replace(/\s+/g, '-').toLowerCase())}`;

    return (
        <div className="text-center">
            <Link href={artistPageUrl} passHref>
                <div className="relative w-[300px] h-[300px] inline-block overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={name}
                        layout="fill" // Use "fill" to ignore parent dimensions and fill the element
                        objectFit="cover" // Crop the image to cover the area
                    />
                </div>
                <h3 className="mt-2 font-semibold">{name}</h3>
            </Link>
        </div>
    );
};

export default ArtistCard;
