import ArtistCard from '../components/ArtistCard'; // Make sure to use the correct path where the component is located

export default function ArtistsPage() {
    const artists = [
        {   name: 'Esther Liang',
            img1: '/artists/esther-liang1.jpg',
        },
        {   name: 'Vanessa Tan',
            img1: '/artists/vanessa-tan1.jpg',
        },
        {   name: 'Jade Franson',
            img1: '/artists/jade-franson1.jpg',
        },
        {   name: 'Yoo Jin Bae',
            img1: '/artists/yoo-jin-bae1.jpg',
        },
        {   name: 'Angela Wei',
            img1: '/artists/angela-wei1.jpg',
        },
        {   name: 'Helga Jiang',
            img1: '/artists/helga-jiang1.jpg'
        },
        {   name: 'Ai Xia',
            img1: '/artists/ai-xia1.jpg',
        },
        {   name: 'Lee Ravi',
            img1: '/artists/lee-ravi1.jpg',
        },
    ];

    return (
        <div className="bg-[#edece8] p-6">
            <h1 className="text-2xl text-black font-bold text-center mb-6">Artists</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {artists.map((artist) => (
                    <ArtistCard key={artist.name} name={artist.name} imageSrc={artist.img1} />
                ))}
            </div>
        </div>
    );
}
