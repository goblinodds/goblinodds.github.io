// gender: the profile's gender
// attracted: who the profile is attracted TO
/****************
 FORMATTING NOTES
*****************/
    // any filter (that doesn't get displayed) must be formatted as an ARRAY
    // if there's a filter for it, there must be a field there, or "includes" breaks
    // links MUST start with http:// or https://

const Profiles = [
    {
        name: 'lovetheusers',
        link: 'https://twitter.com/lovetheusers',
        gender: ['M'],
        attracted: ['F'],
        ldr: ['unspecified'],
        type: ['mono', 'poly'],
        loctype: ['unspecified'],
        location: 'North Carolina'
    },
    {
        name: 'orb',
        link: 'http://orbnet.net',
        gender: ['M'],
        attracted: ['F'],
        ldr: ['unspecified'],
        type: ['mono'],
        loctype: ['unspecified'],
    },
    {
        name: 'guilherme',
        link: 'https://t.co/aJ0C2FzDBK',
        twitter: 'https://twitter.com/_sulfUr0',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ldr: ['Y'],
        loctype: ['unspecified'],
        location: 'Sao Paolo'
    },
    {
        name: 'fractal authenticity',
        link: 'https://twitter.com/FractalAuth/status/1449966081490046977',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        notes: 'cishet / (mostly) monogamous / long distance is scary but maybe?',
        ldr: ['Y'],
        loctype: ['unspecified'],
        location: 'Colorado'
    },
    {
        name: 'yatharth',
        link: 'https://yatharth.brick.do/thread/yatharth-s-date-me-page-XDn9ywbjyl2L',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        twitter: 'https://twitter.com/AskYatharth',
        featuredTweet: 'https://twitter.com/AskYatharth/status/1384028089659707406',
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        location: 'Venice (Los Angeles)'

    },
    {
        name: 'joshua nelson',
        link: 'https://twitter.com/joshuayn514/status/1516414741547294728',
        gender: ['M'],
        attracted: ['F'],
        type: ['poly'],
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        location: 'Austin, TX'
    },
    {
        name: 'cris p. wicks',
        link: 'https://twitter.com/CrispyWicks',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        location: 'Chicago'
    },
    {
        name: 'pieratt',
        link: 'https://twitter.com/pieratttt',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        location: 'Boston(ish)'
    },
    {
        name: 'kumbuchaqueen',
        link: 'https://twitter.com/kumbuchaqueen/status/1531790619940560896',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ldr: ['unspecified'],
        loctype: ['unspecified'],
    },
    // TODO: UPDATE WITH ATTRACTED + TYPE
    {
        name: 'david kobilnyk',
        link: 'https://twitter.com/davidkobilnyk',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ldr: ['unspecified'],
        loctype: ['unspecified'],
    },
    {
        name: 'matthew skala',
        link: 'https://www.twitch.tv/matthewskala/',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ldr: ['unspecified'],
        loctype: ['unspecified'],
    },
    // TODO: UPDATE WITH ATTRACTED + TYPE
    {
        name: 'gustavo lacerda',
        link: 'https://docs.google.com/document/d/1khmwYjPD7cjIC6ssSdH2pYB9BfGCsKvjbrvZoGThkzc/edit?usp=sharing',
        gender: ['M'],
        attracted: ['unspecified'],
        type: ['unspecified'],
        ldr: ['unspecified'],
        loctype: ['unspecified'],
    },
    {
        name: 'john ohno',
        link: 'https://www.lord-enki.net/',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ldr: ['unspecified'],
        loctype: ['unspecified'],
    },
    {
        name: 'elli',
        link: 'https://timeinsensitive.life/date-me/',
        gender: ['M', 'NB'],
        type: ['unspecified'],
        attracted: ['unspecified'],
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        location: 'Massachusetts'
    },
    {
        name: 'rob hardy',
        link: 'https://crtr.link/s/rob',
        twitter: 'https://twitter.com/ungatedcreative',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'might be open to short-term long-distance',
        location: 'Tucson / actively looking for new places to move and put down roots'
    },
    {
        name: 'zmavli caimle',
        link: 'https://twitter.com/zmavli',
        gender: ['M'],
        attracted: ['M'],
        type: ['mono'],
        ldr: ['unspecified'],
        loctype: ['unspecified']
    },
    {
        name: 'wiskerz',
        link: 'https://wiskerz.me/date/',
        gender: ['M'],
        type: ['mono'],
        attracted: ['F'],
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        location: 'south of France'
    },
    {
        name: 'neil thawani',
        link: 'https://lioninawhat.com/love',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        notes: '(mostly) interested in women / (mostly) monogamous'
    },
    {
        name: 'aella',
        link: 'https://docs.google.com/document/d/1ircYicvNaC3-ijI1lMBL0xP5rvSKwlKpXepXO-tbH48/edit?usp=sharing',
        gender: ['F'],
        attracted: ['M'],
        type: ['poly'],
        ldr: ['unspecified'],
        loctype: ['unspecified']
    },
    {
        name: 'laura sofia',
        link: 'https://twitter.com/owlsarepurple',
        gender: ['F'],
        attracted: ['F', 'NB', 'M'],
        type: ['poly'],
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        location: 'Ivory Coast'
    },
    {
        name: 'jewel andraia',
        link: 'https://twitter.com/ALadyJewel',
        gender: ['F', 'NB'],
        attracted: ['F', 'NB', 'M'],
        type: ['poly'],
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        notes: 'if i don\'t communicate queer trans bi ADHD solo-poly by the end of the first date, i didn\'t overshare properly',
        location: 'Bay Area'
    },
    {
        name: 'patrick farley',
        link: 'https://patrickdfarley.com/contact/',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ldr: ['Y'],
        loctype: ['unspecified'],
        location: 'NYC'
    },
    {
        name: 'brooke',
        link: 'https://twitter.com/gptbrooke/status/1286058376489660416?s=20&t=FiL3NG0ZkSCvLnZoEKLwJQ',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono'],
        notes: 'if the right person comes along and they don\'t check some of those boxes then i will change my boxes',
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'California'
    },
    {
        name: 'josh mcmichael',
        link: 'https://twitter.com/jmcmichael',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        notes: 'interested in relationship as a container for growth, recovery, companionship, exploration',
        ldr: ['N'],
        loctype: ['unspecified'],
        location: 'St. Lous, MO'
    },
    {
        name: 'andrew',
        link: 'https://twitter.com/filomusus',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ldr: ['Y'],
        loctype: ['unspecified'],
        location: 'Ann Arbor, MI'
    },
    {
        name: 'bruno',
        link: 'https://twitter.com/bruno_wilhelm',
        gender: ['M'],
        attracted: ['F'],
        type: ['poly'],
        born: '1982',
        ldr: ['Y'],
        loctype: ['unspecified'],
        location: 'Cincinnati, OH'

    },
    {
        name: 'violet',
        link: 'https://twitter.com/violetvariant',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono'],
        born: '1984',
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Minneapolis'
    },
    {
        name: 'adam axolotl',
        link: 'https://twitter.com/calxolotl',
        gender: ['M'],
        attracted: ['F', 'NB', 'M'],
        type: ['mono', 'poly'],
        born: '1993',
        ldr: ['N'],
        loctype: ['fixed'],
        notes: 'physicist doing AI safety, seeking life partner, can tell you lots more via DM :)',
        location: 'SF Bay Area (Berkeley)'
    },
    {
        name: 'joyoptimizer',
        link: 'https://twitter.com/JoyOptimizer',
        gender: ['F'],
        attracted: ['F', 'NB'],
        type: ['mono'],
        ldr: ['Y'],
        loctype: ['unspecified']
    },
    {
        name: 'james',
        link: 'https://twitter.com/INTPhilosopher',
        gender: ['M'],
        attracted: ['F'],
        type: ['poly'],
        born: '1994',
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'will be traveling to the west coast in a month or two. no permanent or even semi-permanent residence in my future yet.',
        location: 'Plattsburgh, NY'
    },
    {
        name: 'ethan',
        link: 'https://twitter.com/EthanJKemp',
        gender: ['M'],
        attracted: ['F', 'NB'],
        type: ['mono'],
        born: '1997',
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Los Angeles / might be moving soon'
    },
    {
        name: 'chris cassano',
        link: 'https://guy.bz/',
        twitter: 'https://twitter.com/chriscassano',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        born: '1988',
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'blessed with default happy brain and boundless optimism.  i sing to my cat everyday.',
        location: 'SF Bay Area / Orlando, FL'
    },
    {
        name: 'bhargab',
        link: 'https://bhargab.com.np/posts/dating-profile/',
        twitter: 'https://twitter.com/bhrg3se',
        insta: 'https://www.instagram.com/mehawwwww/',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        born: '1995',
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Nepal'
    },
    {
        name: 'tess',
        link: 'https://twitter.com/xsphi',
        gender: ['F'],
        attracted: ['F', 'NB'],
        type: ['mono', 'poly'],
        born: '1997',
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'trans; tech; friendly',
        location: 'Portland, OR'
    },
    {
        name: 'catern',
        link: 'https://twitter.com/zcatern',
        gender: ['M'],
        attracted: ['F', 'NB', 'M'],
        born: '1994',
        type: ['mono', 'poly'],
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'NYC'
    },
    {
        name: 'suru!',
        link: 'https://twitter.com/13surur?t=2j8nCUYr8U5DRhWfxsprYQ&s=09',
        gender: ['F'],
        attracted: ['NB', 'M'],
        type: ['mono', 'poly'],
        born: '1998',
        ldr: ['Y'],
        loctype: ['unspecified'],
        location: 'Madison, WI at the moment'
    },
    {
        name: 'martin',
        link: 'https://twitter.com/mkhl',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ldr: ['unspecified'],
        loctype: ['fixed'],
        location: 'Germany'
    },
    {
        name: 'sophie',
        link: 'https://twitter.com/SyzygyCoiled',
        gender: ['F'],
        attracted: ['F', 'NB', 'M'],
        type: ['mono'],
        born: '1993',
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Qc'
    },
    {
        name: 'lex',
        link: 'https://twitter.com/doseofzero',
        gender: ['F'],
        attracted: ['F', 'NB', 'M'],
        type: ['mono', 'poly'],
        born: '2001',
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'open to monogamy and polyamory. long distance is kinda scary but im willing to try it out:) hoping to find a partner i can call both my best friend and lover',
        location: 'Quezon City, Philippines'
    },
    {
        name: 'harlan',
        link: 'https://twitter.com/harlanonym',
        gender: ['F'],
        attracted: ['F', 'M'],
        type: ['mono', 'poly'],
        born: '1997',
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Pittsburgh, PA / will probably move back to LA at some point'
    },
    {
        name: 'dan elton',
        link: 'https://www.okcupid.com/profile/delton137',
        gender: ['M'],
        attracted: ['F', 'NB'],
        type: ['mono', 'poly'],
        born: '1988',
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Boston, MA'
    },
    {
        name: 'jez',
        link: 'https://twitter.com/jezng',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        born: '1989',
        ldr: ['Y'],
        loctype: ['fixed'],
        notes: 'i identify as the D in D/s',
        location: 'NYC (actually Jersey City, but close)'
    },
    {
        name: 'sadmoonanalog',
        link: 'https://twitter.com/sadmoonanalog',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono', 'poly'],
        born: '1995',
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'avid lifter (🏋️‍♀️), amateur potter (🏺). writer by profession. mid-twenties, swolethicc, & greytribe. may not want kids but still wants to build together.',
        location: 'Austin, TX'
    },
    {
        name: 'christine',
        link: 'https://twitter.com/Lil0qui',
        gender: ['F'],
        attracted: ['NB', 'M'],
        type: ['mono', 'poly'],
        born: '1982',
        ldr: ['Y'],
        loctype: ['fixed'],
        notes: 'socialist, atheist, optimistic nihilist, spectrum member. into a wide variety of hobbies and esoterica like anime, video games, synthesizers, astronomy, scifi, programming, Magic, etc. no kids, no marriages, easy going. i lift and get outdoors sometimes.',
        location: 'Seattle'
    },
    {
        name: 'golgi',
        link: 'https://twitter.com/GolgiThePrince',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        born: '1998',
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Detroit, Michigan'
    },
    {
        name: 'torrel',
        link: 'https://twitter.com/dyn_westner',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        born: '1995',
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Germany'
    },
    {
        name: 'j.r.',
        link: 'https://twitter.com/kazundogohda',
        gender: ['M'],
        attracted: ['NB', 'M'],
        type: ['mono', 'poly'],
        born: '1989',
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'short term long distance okay; likely heading back to the Bay Area in April 2023',
        location: 'New Zealand'
    },
    {
        name: 'alex',
        link: 'https://twitter.com/aiactorcritic',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        born: '1991',
        ldr: ['Y'],
        loctype: ['fixed'],
        location: 'London, UK'
    },
// alex is #27
{
    name: 'kaixi',
    link: 'kaixiyang.com',
    twitter: 'https://twitter.com/kaixiyang_',
    gender: ['F'],
    attracted: ['M'],
    type: ['mono'],
    born: '1998',
    ldr: ['Y'],
    loctype: ['flexible'],
    notes: 'uhhhh 6 foot at least, and really gorgeous goofy ambitious and genius creative men onlyyyy',
    location: 'Bay Area / LA'
},
{
    name: 'renee',
    link: 'https://twitter.com/reneesolana',
    gender: ['F'],
    attracted: ['M'],
    type: ['mono'],
    born: '1989',
    ldr: ['Y'],
    loctype: ['fixed'],
    location: 'Chicago'
},
{
    name: 'kevin walker',
    link: 'https://twitter.com/Reccamn?t=7vJVKqKSLJPOI1Cu-mSXiA&s=09',
    gender: ['M'],
    attracted: ['F'],
    type: ['mono'],
    born: '1989',
    ldr: ['Y'],
    loctype: ['flexible'],
    notes: 'INFJ / sad about the past and worried for the future, but just living for tomorrow.',
    location: 'San Diego'
},
{
    name: 'ava',
    link: 'https://twitter.com/postc_vi',
    gender: ['F', 'NB'],
    attracted: ['F', 'NB', 'M'],
    type: ['mono', 'poly'],
    born: '2000',
    ldr: ['Y'],
    loctype: ['flexible'],
    location: 'Virginia'
},
{
    name: 'mercer',
    link: 'https://docs.google.com/document/d/1FUcf4P06yVo4bJB0lRYiq_gn-0cE0glo1YNAWO0jz4g/edit?usp=sharing',
    gender: ['M'],
    attracted: ['F'],
    type: ['mono', 'poly'],
    born: '1999',
    ldr: ['Y'],
    loctype: ['fixed'],
    location: 'NYC'
},
{
    name: 'delen',
    link: 'https://twitter.com/dheisman',
    gender: ['M'],
    attracted: ['F'],
    type: ['mono'],
    born: '1983',
    ldr: ['Y'],
    loctype: ['fixed'],
    notes: "i'm pretty cool",
    location: 'Philadelphia'
},
{
    name: 'shailja',
    link: 'https://twitter.com/shailja_0_',
    gender: ['F', 'NB'],
    attracted: ['F', 'NB'],
    type: ['mono'],
    born: '2002',
    ldr: ['Y'],
    loctype: ['fixed'],
    location: 'Mumbai'
},
{
    name: 'hek',
    link: 'https://twitter.com/hekatonsure',
    gender: ['M'],
    attracted: ['F', 'NB'],
    type: ['mono', 'poly'],
    born: '1998',
    ldr: ['Y'],
    loctype: ['flexible'],
    notes: 'i bounce up and down the WC all the time, looking to split living between LA and PNW - open to BC coastal. Freq. climber/hiker/camping/hang gliding.',
    location: 'West Coast'
}
// SUGGESTIONS
    // @zcatern: "show me a random person and open their DMs" or something button, to motivate interactions
]

export default Profiles;