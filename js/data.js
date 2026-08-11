const projects = [
    {
        code: 'PRJ_01',
        title: '[Project Name One]',
        image: 'images/projects/portfolio.png',
        tracks: [
            {
                title: 'Song 1',
                blurb: '[Short description of Song 1]',
                detail: '[Full description of Song 1 — what it is, what you did, and what the outcome was.]'
            },
            {
                title: 'Song 2',
                blurb: '[Short description of Song 2]',
                detail: '[Full description of Song 2 — what it is, what you did, and what the outcome was.]'
            },
            {
                title: 'Song 3',
                blurb: '[Short description of Song 3]',
                detail: '[Full description of Song 3 — what it is, what you did, and what the outcome was.]'
            }
        ]
    },

    {
        code: 'PRJ_02',
        title: '[Project Name Two]',
        image: 'images/projects/portfolio.png',
        tracks: [
            {
                title: 'Song 1',
                blurb: '[Short description of Song 1]',
                detail: '[Full description of Song 1 — what it is, what you did, and what the outcome was.]'
            },
            {
                title: 'Song 2',
                blurb: '[Short description of Song 2]',
                detail: '[Full description of Song 2 — what it is, what you did, and what the outcome was.]'
            },
            {
                title: 'Song 3',
                blurb: '[Short description of Song 3]',
                detail: '[Full description of Song 3 — what it is, what you did, and what the outcome was.]'
            }
        ]
    },

    {
        code: 'PRJ_03',
        title: '[Project Name Three]',
        image: 'images/projects/portfolio.png',
        tracks: [
            {
                title: 'Song 1',
                blurb: '[Short description of Song 1]',
                detail: '[Full description of Song 1 — what it is, what you did, and what the outcome was.]'
            },
            {
                title: 'Song 2',
                blurb: '[Short description of Song 2]',
                detail: '[Full description of Song 2 — what it is, what you did, and what the outcome was.]'
            },
            {
                title: 'Song 3',
                blurb: '[Short description of Song 3]',
                detail: '[Full description of Song 3 — what it is, what you did, and what the outcome was.]'
            }
        ]
    },

    {
        code: 'PRJ_04',
        title: '[Project Name Four]',
        image: 'images/projects/portfolio.png',
        tracks: [
            {
                title: 'Song 1',
                blurb: '[Short description of Song 1]',
                detail: '[Full description of Song 1 — what it is, what you did, and what the outcome was.]'
            },
            {
                title: 'Song 2',
                blurb: '[Short description of Song 2]',
                detail: '[Full description of Song 2 — what it is, what you did, and what the outcome was.]'
            },
            {
                title: 'Song 3',
                blurb: '[Short description of Song 3]',
                detail: '[Full description of Song 3 — what it is, what you did, and what the outcome was.]'
            }
        ]
    }
];

// Poems — real text, pulled from your notebook. Positions (col/span/row) place them on the crossword grid.
const poems = [
    {
        id: 'p1', title: 'Faith Lines', col: 1, span: 4, row: 1, body:
            `When masterpieces are made,
no one questions the faith
they simply open their hands
and give the artist their grace.

The screen doesn't separate,
the story, equally, holds us all
it's only us who build those walls
and then wonder why we fall.

Every faith ever written
spoke of love and light
we were the ones who misread it
and turned it into a fight.

Religion never asked for borders,
never drew that kind of a line
we split what was always whole
and called the broken, divine.` },

    {
        id: 'p2', title: 'I Love My Country', col: 3, span: 6, row: 2, body:
            `I love my country, India,
A land of beauty wide,
Of colors, faiths, and cultures
All living side by side.

We proudly follow small thinking,
Old rules that refuse to fade,
Where freedom feels conditional,
And fear is neatly laid.

I love my country, India,
Where care is mixed with blame,
Where every rule and restriction
Carries a girl's name.

They guard their girls with limits,
With shame wrapped up as love,
While sons are raised untouched,
Protected like gods above.

I love my country, India,
Where dreams wait for a ring,
Where life begins "after marriage,"
Before that— don't do a thing.

For how will husbands manage,
To live life as they planned?
How will they chase the dreams alone
Without a woman's hand?

I love my country, India,
Where questions ruin the plan,
To hold their fragile pride intact
And keep their title "man."

They need us quiet, serving,
Less valued than a name,
To protect their false superiority
In this unequal game.

I love my country, India!
And I say this without fear:
To love a place truly
Means to silence what is unfair.💔` },

    {
        id: 'p3', title: 'Where Sun Meets the Sea', col: 1, span: 6, row: 3, body:
            `Where sun meets the sea
That's where I'll be.
Between who I was
And whoever I'll be.

With questions I've held
Too long inside,
And pieces of me
That I couldn't hide.

I'll let them rest
With the falling light,
And watch them soften
Into the dark night.

The wave will hold
What I once knew,
And leave all behind
What still feels true.

I've carried echoes
I couldn't release,
Searching for quiet,
Or a moment of peace.

Here all the questions
Grow softer somehow,
No longer demanding
Their answers now.

Neither in the crowd,
Nor in the noise,
But in this stillness
I'll hear my own voice.

And in that silence
I'll finally see,
Where sun meets the sea
And becomes a part of me.

And if I change
Like skies that fade,
I'll let it happen
Untouched, unafraid.` },

    {
        id: 'p4', title: 'Am I Enough', col: 5, span: 5, row: 4, body:
            `Am I enough?
Am I enough?
For this place is too rough
Can't think far above
But dying for self love

I'm screaming inside
Too late but I am tied
Finding faults within
But it was you
Who didn't let me win

I was yours but never mine
Always pretending
To look just fine
I've unlocked all my fears
With eyes full of tears

I'm storming inside alone
Lost the girl I've known
Somewhere beyond this place
I want a never-ending space

Forming thoughts in me
A blurry vision, I can't see
Finding a reason for my soul
Maybe in parts or as a whole

I'm putting all my
Pieces together
Should I live?
Or maybe die rather?

Dreaming alone, how funny
Will I even reach my destiny?` },

    {
        id: 'p5', title: 'She Is', col: 2, span: 3, row: 5, body:
            `She is a mystery
Like unsolved fictions
She sets no boundaries
Yet too many restrictions

She is too capable
Empathising with all
She loves taking risks
But is scared to fall

She is an extremist
Always taking the higher side
She is a mix of emotions
Most of which is her pride

She is a dreamer
Who chases the stars
She finds the light
To her eternal scars

She's a complete mess
As beautifully imperfect
She is a little chaotic
But intends to do her best

She painted hope
Trying to pave a way
But now she finds hope
For herself, to get away

She is a hater
Best for herself
She is the lover
One would want for themself

She is that comfort
One would dream about
She is too modest
Thus, ideal for self doubt

She is the silence
No one could bear
She is the voice
One would die to hear

She is hers
No one could deny
She's over considerate
But unable to rely

She is the home
You'd look for all around
She is a desire, who's
Disappearing to be found❤️` },

    {
        id: 'p6', title: 'Whispers of Fate', col: 5, span: 5, row: 5, body:
            `Whispers of Fate?
Is fate even real?
Something I think along
No matter how cruel
It never proves me wrong

Existing to live?
Or existing to die?
Stuck between love & luck
I never fail to try

To give away the love
Or just to find mine
Do I need a forever
In my life, to outshine?

Fate brings happiness
Or sorrows to the alive
From what I've seen
Fate is difficult to survive

Is it really That cruel?
When they prefer to give up
Or is it just their belief,
They aren't capable enough!

Ever wondered before?
How luck can favour you?
Having fate in one's life
Brings out the best in you!

Fate can be cruel at times
Not necessarily all wrong
All we need is a little faith
And some time to get along.` },

    {
        id: 'p7', title: 'Not My Problem Anymore', col: 1, span: 5, row: 6, body:
            `I think I've seen this film before
And I didn't like the ending
I'm not my problem anymore
So why am I defending?

You told me I was wrong
I somehow thought it's true
Yet when I talked to myself,
The whole problem was you

You said you loved me
I almost thought you did
Then ever since you got close
I've given up the little kid

Was all of this even worth it?
I've asked myself everyday
Or was I just a game for you?
The most interesting one to play!` },

    {
        id: 'p8', title: 'In Afterlife', col: 4, span: 5, row: 7, body:
            `You hold me like I'm yours
Like I keep insisting
No pretence, just enough
Like I'm worth existing

I want to hold you too
But you keep moving away
The more I try, "in afterlife"
Is what you always say

Can't we stay here longer?
I kept asking for the same
"We will someday, I promise"
I wonder if I was to blame

I look into your eyes deep
Full of feelings, yet empty
I can see myself hiding there
How come I look more pretty?

"Stay please", I almost beg you
With tears filled in my eyes
You kiss me on my forehead,
Knowing that I hate goodbyes.` },

    {
        id: 'p9', title: 'Forever Need', col: 1, span: 4, row: 8, body:
            `You heal my heart
My mind, my soul
Fix me like it's
Your eternal goal

Love me on days when
I can't love myself
You being there
Is complete in itself

I met you when
I was nothing at all
Today with you I could
Turn down any fall

You made me better,
More loving indeed
I want you here as
My forever need!♡` },

    {
        id: 'p10', title: 'Me & You', col: 6, span: 3, row: 8, body:
            `Me nd you~
The moon in me
Finds the sky in you.
The light in me
Brightens the dark in you.

The love in me
Finds faith in you.
The youth in me
Feels safe with you.

The chaotic me
Finds peace in you.
The courage in me
Grows more with you.

The kid in me
Finds hope in you.
With all my heart
I believe in you.

The forever in me
Finds forever in you.
With you, alongside
I find me, in you.` },

    {
        id: 'p11', title: 'Fear of Phobia', col: 2, span: 5, row: 9, body:
            `Fear of phobia~
What's a fear?
I asked myself,
A drop of tear
That breaks oneself.

Fear of water
Fear of height
Each soul, indeed
Has a darker night.

Fear of storms
Fear of thunder
Who crafted the universe
And I start to wonder.

Fear of dark
Fear of losing
Multiple fears sometimes,
It is so.. confusing..

Fear of stage
Fear of breaking down
Don't worry my friend
You aren't
The only one in town.

Fear of emotions
Fear of being apart
Discourages each one
That I'll have to restart.

Fear of loneliness
Fear and anxiety
Sink our hearts deep
That we don't belong
In this society.

Fear of failure
You would agree
The most difficult one
To accept
Is the fear of being me!

The fear of love
And the fear of death
Makes a mortal count
Their every precious breath.

Phobia, they call it
I call it being unique.
I believe They're sick
Who think others are weak.

I think I have one too
Just like others do
Mine is "fear of phobia"
You should be scared too.` },

    {
        id: 'p12', title: 'Daydream', col: 7, span: 3, row: 10, body:
            `Daydream!?✨
I'm way too dreamy for this world
Is this even my place?
When sometimes I feel unheard
I believe I'm in a different space.

Sometimes a teenager,
Sometimes a kid.
Fantasizing all those adventures,
That I never did.

From loving too much,
To not loving at all.
I realised, I've grown up
When I gave away my doll.

The idea of my daydream
Is too far from my reality!
Fulfilling my wishes, I doubt
Do I even have that ability?

I wonder where this world
Is finally gonna take me?
The idea of my universe
Is too different from
What others see.` },

    {
        id: 'p13', title: 'Shades of Sky', col: 1, span: 5, row: 11, body:
            `The sky speaks in a thousand shades,
Be it any colour, it never fades.

Orange brings thrill & joy to all,
Just like the dawn painting the fall.

Yellow depicts the skyline,
Represents warmth & sunshine.

Blue like depths of serenity,
Also has a contrasting identity.

Pink is nurturing and nostalgic,
As if the sky is adorned with magic.

At times we discover its rare green lights,
Lucky are those who witness such nights.

Red flaunts anger, life & love,
Creating an elegant world above.

The sky speaks in a thousand shades,
Amidst the clouds in untrodden glades.` },

    {
        id: 'p14', title: 'Rain Shower', col: 6, span: 4, row: 11, body:
            `Rain shower on a sunny day
With my friends, I want to play
After my work, I step out for park.
It's just 4'o clock, but it soon got dark.

I put on my coat
And boots on my feet.
I put on my hat
And stroll down the street.

The rain falls down
From the clouds above.
Splashing in puddles
Is what I love.

I and my friends, play in clay
All coloured, with mud in grey.
Rain shower on a sunny day
With my friends, I love to play.` },
];

// More entries — same modal, listed instead of grid-placed (longer / different-script pieces).
const moreEntries = [
    {
        id: 'm1', title: 'तुम संभाल लोगे क्या?', body:
            `मैं रोती बहुत जल्दी हूँ
तुम संभाल लोगे क्या?
हस्ती बहुत खुल के हूँ
तुम ध्यान दोगे क्या?
प्यार बहुत करती हूँ
तुम प्यार से रखोगे क्या?
मगर खोने से डरती हूँ
तुम साथ रहोगे क्या?
गलतियों से बेखौफ हूँ
तुम साथ चलोगे क्या?
ना जीने से थोड़ा डरती हूँ
तुम जीना सिखाओगे क्या?
दुनिया के लिए कुछ अलग हूँ
तुम समझ जाओगे क्या?
सब खुद से करना चाहती हूँ
तुम मेरा साथ दोगे क्या?
मैं रोती बहुत जल्दी हूँ
तुम संभाल लोगे क्या..?` },

    {
        id: 'm2', title: 'Her Every Bit', body:
            `Something so pure
It fears of getting broken
Something so simple
Yet too much is spoken
Something so real
It's unbelievably true
How is she so perfect?
I wish I had a clue
Her existence itself
Makes it worth living
Her beauty, her innocence
Oh! She's so caring
Her calmness, her love
Makes her so pure
I love when she's a kid
But even more
When she's mature
She's a girl's girl,
A guy would die for
And yet she wanna be fixed
Even though she's a cure
She thinks it's real hard
To love with no limit
Yet I love her existence
Her, in her every bit.` },

    {
        id: 'm3', title: 'Deep When Lost', body:
            `Music is the art of thinking with sounds.
It captures my soul, making my heart pound.

Music is the key to everyone's heart,
It brightens the day,
With a new spark,
Making the negatives fall apart.

Music is a ray full of sunshine,
Bringing us joy with a glint of light.
Letting our inner child overtake,
The darkness of a lonely night.

Music is a cure to everyone's pain,
Bringing one, warmth with lots of grace.
Purifying the soul of a worthy being,
When all our efforts go in vain.

Music make you happy and help you succeed.
It hits you hard without any ache,
Listening to music isn't a mistake.

Music is the art of thinking with sounds.
It captures my heart, without any bounds.` },

    {
        id: 'm4', title: 'On Being Called Immature', body:
            `And when the people stop loving themselves, they call others immature. But how do I explain to someone who's never gotten excited about the silly things like I do? Who has never danced on old songs till they're deep into my nerves. Who has never been crazy whenever they get their favourite icecream. How do I explain this to someone who has never laughed too hard that they fall on the ground with their friends listening to a story they've heard over a million times? Someone who gets excited as soon as the weather changes and they can feel the wind in their hair while listening to the bollywood songs of 2000s????`
    },

    {
        id: 'm5', title: 'Bollywood Endings', body:
            `Kisi ko "I Hate Luv Storys" pasand hai?
Because I love that movie!
Kisi ko "Jaane Tu ya Jaane Na" pasand hai?
The most cringe ending possible in a Bollywood movie yet another favourite🤌
Because that's how I am..
I can hate that "airport wali ending when the guy comes riding a horse just in time to make her stay for him" and yet I would root with my all heart for them to get their "happily ever after" wali ending!🤍
I would call "Shiddat" a madness because why would one endure so much for a person they've known for only a couple months, knowing that they're destined for someone else?
And yet, when Jaggi dares all the impossibles for Kartika, my heart shatters for him. I still find myself wishing, with all my fingers crossed, for them to meet again—even though they never got be together.` },
];

// Articles — real link, no fabricated excerpt.
const articles = [
    { title: 'Silencing the Screams', source: 'vangatiblogpage.wordpress.com', date: 'Aug 2025', link: 'https://vangatiblogpage.wordpress.com/2025/08/16/silencing-the-screams/' },
];

// Posts — real links, titles built from each post's topic.
const posts = [
    { title: 'ATS Resume · Resume Tips · Career Growth', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_atsresume-resumetips-careergrowth-ugcPost-7429962655299395584-6mAb' },
    { title: 'Career Growth · Resume Tips · Job Search', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_careergrowth-resumetips-jobsearch-ugcPost-7432260783578832896-KTJu' },
    { title: 'Resume Tips · Career Growth · Professional Branding', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_resumetips-careergrowth-professionalbranding-ugcPost-7433710238735925248-pJ9I' },
    { title: 'Graphura · Internship Program · Career Growth', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_graphura-internshipprogram-careergrowth-ugcPost-7447823253965873152-w6O4' },
    { title: 'Everyone Talks About the Experience Gap', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_everyone-talks-about-the-experience-gap-ugcPost-7448556036359348224-dGNn' },
    { title: 'Not Every Opportunity Starts With a Salary', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_not-every-opportunity-starts-with-a-salary-ugcPost-7449919513833213953-4B-_' },
    { title: "Remote Internships Don't Fail You (Lack Of...)", link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_remote-internships-dont-fail-you-lack-of-ugcPost-7451837299224502272-ryW2' },
    { title: 'HR Interviews vs Hiring Manager Interviews', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_hr-interviews-and-hiring-manager-interviews-ugcPost-7452154522086297600-lYqC' },
    { title: 'That Internship Certificate — It Opens the...', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_that-internship-certificate-it-opens-the-ugcPost-7452536806962540544-5IR2' },
    { title: 'The Office Was Never the Point, the Work Was', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_the-office-was-never-the-point-the-work-ugcPost-7452766892806627329-a0jP' },
    { title: "Your Browser Console Isn't Against You", link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_your-browser-console-isnt-against-you-it-ugcPost-7453178526519709696-t02r' },
    { title: 'Starting Over Feels Like Progress', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_starting-over-feels-like-progress-improving-ugcPost-7453624634521858048-3kw3' },
    { title: "AI Made It Easier to Sound Smart — It Didn't...", link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_ai-made-it-easier-to-sound-smart-it-didn-ugcPost-7454347910206377984-EUyb' },
    { title: 'This Highlights a Shift Where Being Busy...', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_this-highlights-a-shift-where-being-busy-ugcPost-7454713763502428161-pgmp' },
    { title: 'Consuming Content Feels Like Growth, But...', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_consuming-content-feels-like-growth-but-ugcPost-7455127094235189248-R3iB' },
    { title: 'Practice With Purpose, Not Just Repetition', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_practicewithpurpose-notjustrepetition-levelupskills-ugcPost-7455419857086361601-gl_k' },
    { title: 'Relatable · Content Creation · Work Smart', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_relatable-contentcreation-worksmart-ugcPost-7455745650908053506-l_3Z' },
    { title: 'Career Growth · Career Advice · Internship Life', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_careergrowth-careeradvice-internshiplife-ugcPost-7460433651005124609-VW1P' },
    { title: 'Communication Strategy · Product Thinking · Storytelling', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_communicationstrategy-productthinking-storytelling-ugcPost-7463511271087415296-vUIw' },
    { title: 'Graphura · Async Work · Productivity', link: 'https://www.linkedin.com/posts/internship-in-graphura-india-private-limited_graphura-asyncwork-productivity-ugcPost-7463889227823489024-9wb-' },
];

const skills = ['[Figma]', '[Photoshop]', '[Procreate]', '[Illustrator]', '[HTML/CSS/JS]', '[Python]', '[React]', '[Notion]', '[Premiere Pro]', '[After Effects]', '[English]', '[Hindi]'];

// Explored — each category is a single entry.
// Tap an entry to see one complete description.

const explored = [
    {
        genre: 'Wanderlust',
        color: '#FFFDD0',
        description: '[A description of your experiences with travel, places you have visited, routes you have taken, and what stayed with you.]'
    },

    {
        genre: 'Slow Mornings',
        color: '#FFFDD0',
        description: '[A description of your slow mornings, rituals, routines, and the little things you enjoy.]'
    },

    {
        genre: 'Film & Frames',
        color: '#FFFDD0',
        description: '[A description of your interest in photography, films, visual storytelling, memorable shots, or moments you have captured.]'
    },

    {
        genre: 'Tarot & Stars',
        color: '#FFFDD0',
        description: '[A description of your interest in tarot, astrology, stars, readings, or the things you enjoy exploring around them.]'
    },

    {
        genre: 'Paper Trails',
        color: '#FFFDD0',
        description: '[A description of journals, letters, handwritten notes, collecting paper memories, or anything else that belongs here.]'
    },

    {
        genre: 'Open Mic',
        color: '#FFFDD0',
        description: '[A description of music, performances, singing, open mics, or the pieces you enjoy experiencing or performing.]'
    }
];
