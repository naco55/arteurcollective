import Image from "next/image";

export default function Page() {
    return (
        <div className="bg-[#edece8] font-sans">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 pl-12">
                    <h1 className="text-3xl pt-8">
                        Arteur empowers AAPI creatives.
                    </h1>
                    <div style={{ wordSpacing: '0.2em' }}>
                        <p className="text-2xl pt-6">
                            <strong>About Arteur</strong>
                        </p>
                        <p className="pt-3" >
                            Founded in 2022, Arteur Collective is a 501(c)(3) non-profit organization with
                            a mission to create a boundless freedom for AAPI creatives to pursue their
                            craft. We aim to provide professional and financial resources for creatives to
                            document our collective experience through diverse lenses of art.
                        </p>
                        <p className="pt-3">
                            Over the past two years, we have showcased underrepresented AAPI work,
                            created fundraisers for the AAPI community, and promoted creatives to build
                            a strong community both online and offline.
                        </p>
                        <p className="pt-3">
                            Arteur is a community that champions AAPI creatives to
                            pursue their craft and seek inspiration from each other.
                            Arteur stems from the french term "auteur," a filmmaker
                            considered the author of the film because of their
                            distinctive artistic approach.
                        </p>
                        <p className="pt-3">
                            Arteur expands beyond filmmaking and embodies anyone
                            with unbounded creativity and unwavering passion.
                        </p>
                        <p className="text-2xl pt-6">
                            <strong>Meet the Founders</strong>
                        </p>
                        <p className="pt-3">
                            <strong>Emily Li</strong> is a management consultant by day and an aspiring writer/
                            director by night. Previously, she graduated from UC Berkeley and
                            worked on Hulu's marketing team for its shows and films. Through
                            Arteur, Emily aspires to increase AAPI representation in media.
                        </p>
                        <p className="pt-3">
                            <strong>Esther Liang</strong> is an artist currently in Toronto. In her personal practice,
                            she researches the topics of psychology and social justice while
                            constantly exploring new mediums. She is one of the four artisan hand
                            painters of Louis Vuitton Canada.
                        </p>
                        <p className="pt-3">
                            <strong>Ivee Zhou</strong> graduated from UC Berkeley and now is a marketer at
                            TikTok. She is also a portrait photographer. From teaching visual arts at
                            low-income elementary schools in the Bay Area, she is inspired to
                            support creatives, especially underfunded communities.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 pt-10 pl-20 pr-20">
                    <Image
                        src="/donation-photos/a1.png"
                        alt="About"
                        width={200}
                        height={200}
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    );
}