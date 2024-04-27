import Head from 'next/head'
import EventCard from './EventCard'
import Link from 'next/link';

export default function Page() {
    const events = [
        {
            src: '/bare-showcase.jpeg',
            alt: 'BARE Showcase',
            title: 'BARE Showcase',
            date: 'APRIL 2023'
        },
        {
            src: '/64collective.jpeg', // Replace with the path to your image file
            alt: 'AAPI Month: Arteur x Six Four Collective',
            title: 'AAPI Month: Arteur x Six Four Collective',
            date: 'MAY 2022'
        },
    ]

    return (
        <div className="bg-[#edece8] pl-12 text-black">
            <div className="flex items-left pt-8 text-3xl">
                Events
            </div>
            <div className="container pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '750px' }}>
                    {events.map((event, index) => (
                        index === 0 ? (
                            <Link href="/bare-showcase" key={index}>
                                <EventCard
                                    src={event.src}
                                    alt={event.alt}
                                    title={event.title}
                                    date={event.date}
                                />
                            </Link>
                        ) : (
                            <EventCard
                                key={index}
                                src={event.src}
                                alt={event.alt}
                                title={event.title}
                                date={event.date}
                            />
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}
