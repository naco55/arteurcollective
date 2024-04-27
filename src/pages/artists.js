import ArtistCard from './ArtistCard'; // Make sure to use the correct path where the component is located

export default function ArtistsPage() {
    const artists = [
        {   name: 'Esther Liang',
            bio: 'Esther is a surrealist artist based in Vancouver and Toronto. ' +
                'Her main mediums include drawing and painting, digital art, and ' +
                'sculpture. In her practice, she explores topics surrounding dreams, ' +
                'psychology, and social justice while constantly testing out new mediums.',
            img1: '/artists/esther-liang1.jpg',
            img2: '/artists/esther-liang2.jpg',
            img3: '/artists/esther-liang3.jpg',
            qa: '"Arteur: what inspired you to start auteur and what excites you about this space?\n' +
                '\n' +
                '“I want to create a space where we can share great art, provide a platform for hidden gem artists ' +
                'to be discovered, and form a community of creatives with the potential to collaborate, support, and ' +
                'inspire each other.”\n' +
                '\n' +
                'Arteur: what does it mean to be an artist for you?\n' +
                '\n' +
                '“I recently learned that the most important thing is just to experiment and have fun. I used to worry ' +
                'about the outcome more than the process and that held me back from a lot of growth and made me ' +
                'question my identity as an artist. However, now that I am slowly trying to let go of the standard ' +
                'I’ve set for myself, I feel a lot more free.”"'

        },
        {   name: 'Vanessa Tan',
            bio: 'Vanessa is a photographer from Manila. She has always loved art - drawing, painting, film, ' +
                'photography, and everything in between. In the last 6 years, her main focus has been photography, ' +
                'particularly 35mm photography. Her work is vibrant and aims to evoke feelings of wonder and nostalgia.',
            img1: '/artists/vanessa-tan1.jpg',
            img2: '/artists/vanessa-tan2.jpg',
            img3: '/artists/vanessa-tan3.jpg',
            qa: '"Arteur: what inspires the photos you take? \n' +
                ' \n' +
                '“I\'ve always loved cinema. Growing up, I\'d try to find the most visually striking movies and watch ' +
                'them: The Fall, Drive, Her, Lost in Translation, Amelie, Akira, Paris, Texas, anything Wes Anderson, ' +
                'anything WKW. I love how evocative cinematography can be and that\'s something I try to infuse in my ' +
                'photos. After studying art history at Berkeley, I\'ve also started thinking about the ways artists ' +
                '(specifically painters) can inform my photography. Some of my faves are: Edward Hopper, Juan Miro, ' +
                'Tracey Emin, and Francis Bacon.” \n' +
                '\n' +
                'Arteur: what are your favorite subjects to shoot and why?\n' +
                '\n' +
                '“I\'ve always been more interested in street photography or just photography that aimed to capture ' +
                'everyday life. One of my favorite photographers is Greg Girard. He took photos of developing cities ' +
                '(especially Asian cities) in the 70s and 80s: Hong Kong, Tokyo, Shanghai, Hanoi, etc. His work is ' +
                'striking and artful, but at the same time, it stays true to its goal, which I think is to simply ' +
                'document particularities in the world: the family photo hanging on the cornershop wall at a particular ' +
                'moment in time, or the way light hits a woman\'s sundress at that specific hour of day, in that ' +
                'specific part of the world. I\'d like to think of it as some kind of romanticized journalism :)”"'
        },
        {   name: 'Jade Franson',
            bio: 'Jade is a painter based in Denver and LA. She started painting consistently two years ago, though ' +
                'she’s loved the feeling of creating something new ever since she was little. She mainly uses gouache ' +
                'but she loves trying new mediums - her most recent trials have been in pastels, oil paints, and even ' +
                'embroidery. When she creates, she hopes to capture memories of places she has been, nostalgic emotions, ' +
                'and light.',
            img1: '/artists/jade-franson1.jpg',
            img2: '/artists/jade-franson2.jpg',
            img3: '/artists/jade-franson3.jpg',
            qa: '"Arteur: how do you find inspiration for your paintings?\n' +
                '\n' +
                '“I’m always looking for inspiration and I think that influences how I view the world - I see things ' +
                'everyday that excite me, whether it be beautiful colors, landscapes, or the way light interacts with ' +
                'my surroundings. I usually take photos of things that I think are beautiful so I can refer back to ' +
                'them when I’m painting.”\n' +
                '\n' +
                'Arteur: what’s your proudest artwork and why?\n' +
                '\n' +
                '“One of my proudest pieces to work on was ‘Bow Bridge’ because it was a painting that I spent longer ' +
                'than usual on so I learned to enjoy the process rather than try to churn out a finished product. I ' +
                'think that because it was more impressionist than my usual paintings I was also able to focus more ' +
                'on the emotions the painting evokes. It also reminds me of special moments spent in Central Park so ' +
                'I have a sort of emotional connection to it.”"'
        },
        {   name: 'Yoo Jin Bae',
            bio: 'Yoo Jin is an art enthusiast. After getting her very first digital camera, then a DSLR, she has moved ' +
                'onto film photography after getting her first point-and-shoot film camera in 2018. Her purpose for ' +
                'taking pictures is simple — to preserve the vibes that are unique to every moment in her life.',
            img1: '/artists/yoo-jin-bae1.jpg',
            img2: '/artists/yoo-jin-bae2.jpg',
            img3: '/artists/yoo-jin-bae3.jpg',
            qa: '"Arteur: why film photography?\n' +
                '\n' +
                '“In my opinion, film photography is the best way to capture the vibe of moments in its rawest form. ' +
                'Although there are multiple variables that go into forming a picture, when you’re honest with the ' +
                'camera on how you feel in the moment, the camera will also respond with a picture that captures and ' +
                'portrays your honest feelings in that moment.”\n' +
                '\n' +
                'Arteur: who is your favorite photographer?\n' +
                '\n' +
                '“My favorite photographer at the moment is Ian Kenneth Bird, a UK based photographer. I like the ' +
                'honest capturing and photographic interpretation of the various people around him.”"'
        },
        {   name: 'Angela Wei',
            bio: 'Angela is an artist currently in New York. Angela’s series of works are large-scale paintings ' +
                'depicting cosmological worlds. Each piece is filled with different allegorical and contemporary ' +
                'imagery. The tension between the real and imaginary is frequently explored in her paintings. For ' +
                'instance, certain elements like the human body are familiar, but it is placed within an unrecognizable ' +
                'context that disorients conventional understanding. Her intention is for the viewer to gain multiple ' +
                'interpretations from seeing my work; upon first glance, she hopes that they can enjoy the playful ' +
                'themes and vibrant colors. Upon closer inspection, the viewer might notice potentially subversive, ' +
                'darker undertones.',
            img1: '/artists/angela-wei1.jpg',
            img2: '/artists/angela-wei2.jpg',
            img3: '/artists/angela-wei3.jpg',
            qa: '"Arteur: what does your artwork represent?\n' +
                '\n' +
                '“My works deal with modern issues such as the harmful impacts of social media, struggles with mental ' +
                'health, and loss of identity within an alienating world. The idea of concealing disruptive messages ' +
                'within fairy-book style imagery is embodied in children’s stories like Alice in Wonderland or Grimm’s ' +
                'Fairy tales. Those are also stories that I draw a lot of inspiration from. Ultimately for me, cuteness ' +
                'is used as a type of defense mechanism against certain realities that are more difficult to digest had ' +
                'they been represented more literally. My style is very intricate, which invites the viewer to observe ' +
                'the details within the paintings. The longer one spends looking, the more details emerge. I love this ' +
                'world-building aspect to my paintings, where one feels practically submerged in an alternate reality. ' +
                'In fact, a goal of mine is to increase the scale of my works so that it creates a more immersive ' +
                'experience. I hope that the viewer feels enveloped within this new world.”\n' +
                '\n' +
                'Arteur: what inspires your work?\n' +
                '\n' +
                '“I experiment a lot with different styles and art historical genres within my pieces.The flatness to ' +
                'my colors are reminiscent of Japanese pop art and Japanese woodblock prints, whereas the vibrant ' +
                'colorful and blending of colors are very Impressionistic. A lot of my characters are also a blend of ' +
                'manga/anime elements with more figurative renderings of the human body. In doing so, I hope to diminish ' +
                'the boundary between new and old, between Eastern and Western artmaking. This happens to also reflect ' +
                'the hybridity of cultures I was exposed to growing up; I was born in China, grew up in Canada, and now ' +
                'studying in America. Art expression has become the way through which I embrace the duality of my ' +
                'identity. I rely most heavily on acrylics to accomplish my large scale paintings. I find that acrylics ' +
                'allow me to maintain the ideal textural consistency while also sustaining a variety of saturated colors. ' +
                'However, I want to increase the tactility of my paintings through interesting textures. I look forward ' +
                'to applying more mixed media to my canvases this upcoming year.”"'
        },
        {   name: 'Helga Jiang',
            bio: 'Helga is based in Ontario, Canada. She has loved arts and crafts ever since she can remember—a mixture ' +
                'of compulsion and comfort that has always been with her. In kindergarten, she’d spend playtime making ' +
                'little bowls of rice with the classroom’s modelling clay, fascinated by the rubbery mush between her ' +
                'fingers as she sculpted each individual grain. As a teen, she posted tutorials on the internet, showing ' +
                'other curious makers how to sculpt trinkets and charms. Eventually, she graduated with a Fine Arts ' +
                'degree and then moved on to working as a digital designer. Last year, she left her corporate design job ' +
                'to focus on her ceramics practice.',
            img1: '/artists/helga-jiang1.jpg',
            img2: '/artists/helga-jiang2.jpg',
            img3: '/artists/helga-jiang3.jpg',
            qa: '"Arteur: why do you love ceramics?\n' +
                '\n' +
                '“The more I work with clay, the more I learn about myself and about life. Ceramics as a medium is ' +
                'slow-paced. Moving too quickly with clay can mean unwanted stress on the structure, which can easily ' +
                'cause cracking, breaking, and an overall lack of stability. I think it’s a metaphor for life, a ' +
                'teaching of patience. It has also shown me how to let go and start again—a meaningful skill in life.”\n' +
                '\n' +
                'Arteur: does your Asian background influence your work? If so, how?\n' +
                '\n' +
                '“My experience of living and breathing as a person with Chinese heritage absolutely influences my work. ' +
                'My family immigrated to Canada when I was 2 years old, so my direct relationship to Chinese culture was ' +
                'from my parents and grandparents. There were periods of time when my grandmother took care of me and my ' +
                'siblings when we were young; she did not understand English and my Chinese fluency was poor, so we would ' +
                'bond instead through quiet activities, such as drawing and brush calligraphy. She would teach me how to ' +
                'draw mice (since I was born in the year of the rat); I remember drawing on pages and pages of printer ' +
                'paper, trying to emulate the way she formed her lines and details. Looking back, she had a strong ' +
                'influence in my creative development. I find it fascinating how visual art has the ability to connect ' +
                'cultures through a shared language. It’s also given me different perspectives on community, trust, and ' +
                'cooperation, which I explore in my current practice.”"'
        },
        {   name: 'Ai Xia',
            bio: 'Ai is an artist interested in expanding consciousness through different media. She primarily focuses ' +
                'on digital art and the intersection between art and technology, but explores different media and styles ' +
                'quite often. Her goal is to provoke a deeper sense of awareness and connectedness between humans, ' +
                'nature, and things beyond the veil.',
            img1: '/artists/ai-xia1.jpg',
            img2: '/artists/ai-xia2.jpg',
            img3: '/artists/ai-xia3.jpg',
            qa: '"Arteur: what inspired you to start drawing?\n' +
                '\n' +
                '“I grew up drawing anime/manga style for fun because I was (and still am) a big weeb, but I stopped when I was a teenager because of other priorities. When the pandemic started, I started drawing again and became very obsessed. I knew that I was meant to become an artist because time would fly by when I was drawing. I love everything that involves creativity, and it is really the intersection of things such as art, film, writing and music that can create change in the people that view it.”\n' +
                '\n' +
                'Arteur: what is your advice to aspiring artists and creatives?\n' +
                '\n' +
                '“Never let go of your dream or your goal. Be consistent and practice creativity every day. That could ' +
                'mean drawing, or it could be ideating and dreaming. Our imagination is one of the most powerful mental ' +
                'tools we have, and you can cultivate it. Know that you can do ANYTHING that you put your mind to. I ' +
                '100% mean that, and the only limitations you have are the ones that you or other people put on you. ' +
                'It has nothing to do with talent or skill level. Also, appreciate and love every single piece of art ' +
                'that you create! It will make a huge difference in your journey.”"'
        },
        {   name: 'Lee Ravi',
            bio: 'Lee Ravi is a senior at NYU and a combined public health and applied psychology major. He loves ' +
                'psychological genre narratives because they really explore the depths and possibilities of the human ' +
                'mind. He believes that this genre has some really masterful storytelling. He also loves drinking boba ' +
                '(his favorite flavor is wintermelon), going on trains and eating Korean corn dogs :D',
            img1: '/artists/lee-ravi1.jpg',
            img2: '/artists/lee-ravi2.jpg',
            img3: '/artists/lee-ravi3.jpg',
            qa: '"Arteur: what is unique about digital art?\n' +
                '\n' +
                '“To me, digital art is another medium, just like canvas, paper, pastel, color pencil etc. It has a lot ' +
                'of tools that make it easier, but it isn’t a “cheat” like some people think it is. Layer flipping, undo ' +
                'button, layer locking, light effects — those are a unique part of digital art. But there are drawbacks ' +
                'too. For example, with digital art, the paint or medium will not make the texture for you. You have to ' +
                'make it yourself, going far more intensively on details and balancing positive and negative space. I ' +
                'think my two favorite things about digital art are one, that it’s encouraging so many young artists to ' +
                'practice their craft and find a community, and two, that the output is so polished and clean!”\n' +
                '\n' +
                'Arteur: what stories do you hope to tell with your art?\n' +
                '\n' +
                '""I’m someone who has a heavy burden of mental illness that I have to deal with on a daily basis. I’m ' +
                'sensitive to bright sunlight and have too low energy to go explore the natural world out around me and ' +
                'often even the city. It seems ironic that I paint landscapes, but that’s actually why— it’s my way of ' +
                'trying to enjoy the beauty of a world I cannot really access. I especially focus on lighting, painting ' +
                'mostly sunsets and twilights. This is because 1) sunset is the time that marks the world becoming ' +
                'easier for me to interact with, because that’s when the bright sun sets, and 2) I’m creating a love ' +
                'letter to light, which I can’t really interact with happily on my own.\n' +
                '\n' +
                'My work tells a story about my mindfulness and gratefulness. Even though things can be hard, I’m ' +
                'happy to live in a world that can be very beautiful, and that I have people that love me so much in ' +
                'ways I never thought possible.\n' +
                '\n' +
                'I want to communicate that in my work. My work is for those who are troubled with illness or other ' +
                'things that make them feel that the world is not for them. Each painting of mine is an assurance that ' +
                'this world is indeed for them. That I am like them and even when the days are hard, this world is a ' +
                'place where they want to be.\n' +
                '\n' +
                'Also, love is the driving force of all my work. This sounds cheesy, but if at all my pieces might ' +
                'hold an air of reverence to anyone, that reverence is for all the love that I am so lucky to receive."""'
        },
    ];

    return (
        <div className="bg-[#edece8] p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Artists</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {artists.map((artist) => (
                    <ArtistCard key={artist.name} name={artist.name} imageSrc={artist.img1} />
                ))}
            </div>
        </div>
    );
}
