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
        location: 'North Carolina'
    },
    {
        name: 'orb',
        link: 'http://orbnet.net',
        gender: ['M'],
        attracted: ['F'],
        ldr: ['unspecified'],
        type: ['mono']
    },
    {
        name: 'guilherme',
        link: 'https://t.co/aJ0C2FzDBK',
        twitter: 'https://twitter.com/_sulfUr0',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ldr: ['Y'],
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
        location: 'Venice (Los Angeles)'

    },
    {
        name: 'joshua nelson',
        link: 'https://twitter.com/joshuayn514/status/1516414741547294728',
        gender: ['M'],
        attracted: ['F'],
        type: ['poly'],
        ldr: ['unspecified'],
        location: 'Austin, TX'
    },
    {
        name: 'cris p. wicks',
        link: 'https://twitter.com/CrispyWicks',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ldr: ['unspecified'],
        location: 'Chicago'
    },
    {
        name: 'pieratt',
        link: 'https://twitter.com/pieratttt',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ldr: ['unspecified'],
        location: 'Boston(ish)'
    },
    {
        name: 'kumbuchaqueen',
        link: 'https://twitter.com/kumbuchaqueen/status/1531790619940560896',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ldr: ['unspecified']
    },
    // TODO: UPDATE WITH ATTRACTED + TYPE
    {
        name: 'david kobilnyk',
        link: 'https://twitter.com/davidkobilnyk',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ldr: ['unspecified']
    },
    {
        name: 'matthew skala',
        link: 'https://www.twitch.tv/matthewskala/',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ldr: ['unspecified']
    },
    // TODO: UPDATE WITH ATTRACTED + TYPE
    {
        name: 'gustavo lacerda',
        link: 'https://docs.google.com/document/d/1khmwYjPD7cjIC6ssSdH2pYB9BfGCsKvjbrvZoGThkzc/edit?usp=sharing',
        gender: ['M'],
        attracted: ['unspecified'],
        type: ['unspecified'],
        ldr: ['unspecified']
    },
    {
        name: 'john ohno',
        link: 'https://www.lord-enki.net/',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ldr: ['unspecified']
    },
    // TODO: UPDATE WITH ATTRACTED + TYPE
    {
        name: 'elli',
        link: 'https://timeinsensitive.life/date-me/',
        gender: ['M', 'NB'],
        type: ['unspecified'],
        attracted: ['unspecified'],
        ldr: ['unspecified'],
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
    },
    {
        name: 'wiskerz',
        link: 'https://wiskerz.me/date/',
        gender: ['M'],
        type: ['mono'],
        attracted: ['F'],
        ldr: ['unspecified'],
        location: 'south of France'
    },
    {
        name: 'neil thawani',
        link: 'https://lioninawhat.com/love',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ldr: ['unspecified'],
        notes: '(mostly) interested in women / (mostly) monogamous'
    },
    {
        name: 'aella',
        link: 'https://docs.google.com/document/d/1ircYicvNaC3-ijI1lMBL0xP5rvSKwlKpXepXO-tbH48/edit?usp=sharing',
        gender: ['F'],
        attracted: ['M'],
        type: ['poly'],
        ldr: ['unspecified']
    },
    {
        name: 'laura sofia',
        link: 'https://twitter.com/owlsarepurple',
        gender: ['F'],
        attracted: ['F', 'NB', 'M'],
        type: ['poly'],
        ldr: ['unspecified'],
        location: 'Ivory Coast'
    },
    {
        name: 'jewel andraia',
        link: 'https://twitter.com/ALadyJewel',
        gender: ['F', 'NB'],
        attracted: ['F', 'NB', 'M'],
        type: ['poly'],
        ldr: ['unspecified'],
        notes: '"if i don\'t communicate queer trans bi ADHD solo-poly by the end of the first date, i didn\'t overshare properly"',
        location: 'Bay Area'
    },
    {
        name: 'patrick farley',
        link: 'https://patrickdfarley.com/contact/',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ldr: ['Y'],
        location: 'NYC'
    },
    {
        name: 'brooke',
        link: 'https://twitter.com/gptbrooke/status/1286058376489660416?s=20&t=FiL3NG0ZkSCvLnZoEKLwJQ',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono'],
        notes: '"if the right person comes along and they don\'t check some of those boxes then i will change my boxes"',
        ldr: ['Y'],
        location: 'California / location flexible'
    },
    {
        name: 'josh mcmichael',
        link: 'https://twitter.com/jmcmichael',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        notes: 'interested in relationship as a container for growth, recovery, companionship, exploration',
        ldr: ['N'],
        location: 'St. Lous, MO'
    },
    {
        name: 'andrew',
        link: 'https://twitter.com/filomusus',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ldr: ['Y'],
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
        location: 'Minneapolis / flexible'
    },
    {
        name: 'adam axolotl',
        link: 'https://twitter.com/calxolotl',
        gender: ['M'],
        attracted: ['F', 'NB', 'M'],
        type: ['mono', 'poly'],
        born: '1993',
        ldr: ['N'],
        notes: 'physicist doing AI safety, seeking life partner, can tell you lots more via DM :)',
        location: 'SF Bay Area (Berkeley)'
        // location FIXED, not flexible
    },
    {
        name: 'joyoptimizer',
        link: 'https://twitter.com/JoyOptimizer',
        gender: ['F'],
        attracted: ['F', 'NB'],
        type: ['mono'],
        ldr: ['Y']
    },
    {
        name: 'james',
        link: 'https://twitter.com/INTPhilosopher',
        gender: ['M'],
        attracted: ['F'],
        type: ['poly'],
        born: '1994',
        ldr: ['Y'],
        notes: 'will be traveling to the west coast in a month or two. no permanent or even semi-permanent residence in my future yet.',
        location: 'Plattsburgh, NY / flexible'
    },
    {
        name: 'ethan',
        link: 'https://twitter.com/EthanJKemp',
        gender: ['M'],
        attracted: ['F', 'NB'],
        type: ['mono'],
        born: '1997',
        ldr: ['Y'],
        location: 'Los Angeles / might be moving soon / flexible'
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
        notes: 'blessed with default happy brain and boundless optimism.  i sing to my cat everyday.',
        location: 'SF Bay Area / Orlando, FL / flexible'
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
        location: 'Nepal / flexible'
    },
    {
        name: 'sophie',
        link: 'https://twitter.com/xsphi',
        gender: ['F'],
        attracted: ['F', 'NB'],
        type: ['mono', 'poly'],
        born: '1997',
        ldr: ['Y'],
        notes: 'trans; tech; friendly',
        location: 'Portland, OR / flexible'
    },
    {
        name: 'catern',
        link: 'https://twitter.com/zcatern',
        gender: ['M'],
        attracted: ['F', 'NB', 'M'],
        born: '1994',
        type: ['mono', 'poly'],
        ldr: ['Y'],
        location: 'NYC / flexible'
    },
    {
        name: 'suru!',
        link: 'https://twitter.com/13surur?t=2j8nCUYr8U5DRhWfxsprYQ&s=09',
        gender: ['F'],
        attracted: ['NB', 'M'],
        type: ['mono', 'poly'],
        born: '1998',
        ldr: ['Y'],
        location: 'Madison, WI at the moment'
    },
    {
        name: 'martin',
        link: 'https://twitter.com/mkhl',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ldr: ['unspecified'],
        location: 'Germany'
        // location FIXED
    }


    // {
    //     name: 'harlan',
    //     link: 'https://twitter.com/harlanonym',
    //     gender: ['F'],
    //     attracted: ['F', 'M'],
    //     type: ['mono', 'poly'],
    //     born: '1997',
    //     ldr: ['Y'],
    //     location: 'Pittsburgh, PA / will probably move back to LA at some point / flexible'
    // }

// waiting to confirm
    // doseofzero #15
    // SyzygyCoiled #16
    // harlan #19

// SUGGESTIONS
    // @zcatern: "show me a random person and open their DMs" or something button, to motivate interactions

]

export default Profiles;