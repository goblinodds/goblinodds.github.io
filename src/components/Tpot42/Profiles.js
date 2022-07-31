// gender: the profile's gender
// attracted: who the profile is attracted TO

const Profiles = [
    {
        name: 'lovetheusers',
        link: 'https://twitter.com/lovetheusers',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly']
    },
    {
        name: 'orb',
        link: 'http://orbnet.net',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono']
    },
    {
        name: 'guilherme',
        link: 'https://t.co/aJ0C2FzDBK',
        twitter: 'https://twitter.com/_sulfUr0',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        location: 'Sao Paolo / long distance ok'
    },
    {
        name: 'fractal authenticity',
        link: 'https://twitter.com/FractalAuth/status/1449966081490046977',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        notes: 'cishet / (mostly) monogamous / long distance is scary but maybe?',
        location: 'Colorado'
    },
    // TODO: UPDATE WITH ATTRACTED + TYPE
    {
        name: 'yatharth',
        link: 'https://yatharth.brick.do/thread/yatharth-s-date-me-page-XDn9ywbjyl2L',
        gender: ['M'],
        type: ['unspecified'],
        twitter: 'https://twitter.com/AskYatharth',
        featuredTweet: 'https://twitter.com/AskYatharth/status/1384028089659707406',
        location: 'Venice (Los Angeles)'

    },
    {
        name: 'joshua nelson',
        link: 'https://twitter.com/joshuayn514/status/1516414741547294728',
        gender: ['M'],
        attracted: ['F'],
        type: ['poly'],
        location: 'Austin, TX'
    },
    {
        name: 'cris p. wicks',
        link: 'https://twitter.com/CrispyWicks',
        gender: ['M'],
        type: ['mono', 'poly'],
        location: 'Chicago'
    },
    {
        name: 'pieratt',
        link: 'https://twitter.com/pieratttt',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        location: 'Boston(ish)'
    },
    {
        name: 'kumbuchaqueen',
        link: 'https://twitter.com/kumbuchaqueen/status/1531790619940560896',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
    },
    // TODO: UPDATE WITH ATTRACTED + TYPE
    {
        name: 'david kobilnyk',
        link: 'https://twitter.com/davidkobilnyk',
        gender: ['M'],
        type: ['unspecified']
    },
    {
        name: 'matthew skala',
        link: 'https://www.twitch.tv/matthewskala/',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono']
    },
    // TODO: UPDATE WITH ATTRACTED + TYPE
    {
        name: 'gustavo lacerda',
        link: 'https://docs.google.com/document/d/1khmwYjPD7cjIC6ssSdH2pYB9BfGCsKvjbrvZoGThkzc/edit?usp=sharing',
        gender: ['M'],
        type: ['unspecified']
    },
    {
        name: 'john ohno',
        link: 'https://www.lord-enki.net/',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly']
    },
    // TODO: UPDATE WITH ATTRACTED + TYPE
    {
        name: 'elli',
        link: 'https://timeinsensitive.life/date-me/',
        gender: ['M', 'NB'],
        type: ['unspecified'],
        location: 'Massachusetts'
    },
    // TODO: UPDATE WITH ATTRACTED + TYPE
    {
        name: 'rob hardy',
        link: 'https://crtr.link/s/rob',
        twitter: 'https://twitter.com/ungatedcreative',
        gender: ['M'],
        type: ['unspecified']
    },
    {
        name: 'zmavli caimle',
        link: 'https://twitter.com/zmavli',
        gender: ['M'],
        attracted: ['M'],
        type: ['mono'],
        // TODO: can delete this note once the filter is up
        notes: 'interested in men'
    },
    {
        name: 'wiskerz',
        link: 'https://wiskerz.me/date/',
        gender: ['M'],
        type: ['mono'],
        attracted: ['F'],
        // TODO: can delete this note once the filter is up
        notes: 'interested in women',
        location: 'south of France'
    },
    {
        name: 'neil thawani',
        link: 'https://lioninawhat.com/love',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        notes: '(mostly) interested in women / (mostly) monogamous'
    },
    {
        name: 'aella',
        link: 'https://docs.google.com/document/d/1ircYicvNaC3-ijI1lMBL0xP5rvSKwlKpXepXO-tbH48/edit?usp=sharing',
        gender: ['F'],
        attracted: ['M'],
        type: ['poly']
    },
    {
        name: 'laura sofia',
        link: 'https://twitter.com/owlsarepurple',
        gender: ['F'],
        attracted: ['F', 'NB', 'M'],
        type: ['poly'],
        location: 'Ivory Coast'
    },
    {
        name: 'jewel andraia',
        link: 'https://twitter.com/ALadyJewel',
        gender: ['F', 'NB'],
        attracted: ['F', 'NB', 'M'],
        type: ['poly'],
        notes: '"if i don\'t communicate queer trans bi ADHD solo-poly by the end of the first date, i didn\'t overshare properly"',
        location: 'Bay Area'
    },
    {
        name: 'patrick farley',
        link: 'https://patrickdfarley.com/contact/',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        location: 'NYC / long distance ok'
    },
    {
        name: 'brooke',
        link: 'https://twitter.com/gptbrooke/status/1286058376489660416?s=20&t=FiL3NG0ZkSCvLnZoEKLwJQ',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono'],
        notes: 'long distance ok / location flexible',
        location: 'California',
        notes: '"if the right person comes along and they don\'t check some of those boxes then i will change my boxes"'
    },
    {
        name: 'josh mcmichael',
        link: 'twitter.com/jmcmichael',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        notes: 'interested in relationship as a container for growth, recovery, companionship, exploration',
        location: 'St. Lous, MO / no long distance'
    },
    {
        name: 'andrew',
        link: 'https://twitter.com/filomusus',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        notes: 'long distance ok',
        location: 'Ann Arbor, MI / long distance ok'
    },
    {
        name: 'bruno',
        link: 'https://twitter.com/bruno_wilhelm',
        gender: ['M'],
        attracted: ['F'],
        type: ['poly'],
        born: '1982',
        location: 'Cincinnati, OH / long distance ok'

    },
    {
        name: 'violet',
        link: 'https://twitter.com/violetvariant',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono'],
        born: '1984',
        location: 'Minneapolis / flexible / long distance ok'
    }
]

export default Profiles;