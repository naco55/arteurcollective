// pages/artists/[artistName].jsx
import { useRouter } from 'next/router';
import artists from '@/data/artists-info';
import Link from "next/link"; // Adjust the path to your artists data

const ArtistPage = () => {
    const router = useRouter();
    const { artistName } = router.query;
    const artistSlug = artistName?.replace(/-/g, ' ').toLowerCase();
    console.log(artistSlug);

    const artist = artists.find(
        (a) => a.name.toLowerCase() === artistSlug
    );

    if (!artist) {
        return <p>Artist not found.</p>;
    }

    // Now you have access to all the artist data
    // Use it to render the page

    return (
        <div className="bg-[#edece8] min-h-screen p-8">
            <div>
                <h1 className="text-4xl text-black font-bold mb-4">{artist.name}</h1>
                <h2 className="text-xl text-black font-semibold mb-2">Bio</h2>
                <p className="mb-4">{artist.bio}</p>
                {artist.ig && (
                    <a href={artist.ig} target="_blank" rel="noopener noreferrer" className="text-black-600 hover:underline">
                        <div className="underline text-black">
                            Instagram
                        </div>
                    </a>
                )}

                <h2 className="text-xl text-black font-semibold mb-2 pt-3">Q&A</h2>
                <p className="whitespace-pre-line text-black">{artist.qa}</p>

                <Link href="/artists" className="text-black-600 hover:underline mt-8 inline-block">
                    <div className="underline">
                        Back
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default ArtistPage;
