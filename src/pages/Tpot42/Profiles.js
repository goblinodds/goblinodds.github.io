// gender: the profile's gender
// attracted: who the profile is attracted TO
/****************
 FORMATTING NOTES
*****************/
// any filter (that doesn't get displayed) must be formatted as an ARRAY
// if there's a filter for it, there must be a field there, or "includes" breaks
// links MUST start with http:// or https://


//
// AGE ESTIMATOR
//
// TODO break out the approx age function that's used in both of these

function ageBracket(born) {
    // current year
    let date = new Date().getFullYear();
    // approximate age based on birth year
    let age = date - born;

    if (age < 30) {
        return '<30'
    } else if (age >40) {
        return '>40'
    } else {
        return '30-40'
    }
}

// TODO refactor this using modulo
function ageDisplay(born) {
    // current year
    let date = new Date().getFullYear();
    // approximate age based on birth year
    let age = date - born;

    // no minors allowed, no ancients expected
    if (age < 18 || age > 99) {
        return '(this entry is broken, please notify goblin)';
    }

    return `${earlyMidLate(age)} ${decade(age)}`;
}

const earlyMidLate = (age) => {

    let secondDigit = age.toString()[1];

    if (secondDigit <= 3) {
        return 'early';
    } else if (secondDigit >= 4 && secondDigit <= 6) {
        return 'mid';
    } else {
        return 'late';
    }

}

const decade = (age) => {
    if (age < 20) {
        return 'teens';
    } else {
        // returns the first digit of the listed age
        return age.toString()[0] + '0s';
    }
}

//
// ENTRIES
//

const Profiles = [
    {
        name: 'lovetheusers',
        link: 'https://twitter.com/lovetheusers',
        gender: ['M'],
        attracted: ['F'],
        ldr: ['unspecified'],
        type: ['mono', 'poly'],
        ageBracket: 'unspecified',
        loctype: ['unspecified'],
        location: 'North Carolina',
        continent: ['North America']
    },
    {
        name: 'orb',
        link: 'http://orbnet.net',
        gender: ['M'],
        attracted: ['F'],
        ldr: ['unspecified'],
        type: ['mono'],
        ageBracket: 'unspecified',
        loctype: ['unspecified'],
        continent: ['unspecified']
    },
    {
        name: 'guilherme',
        link: 'https://t.co/aJ0C2FzDBK',
        twitter: 'https://twitter.com/_sulfUr0',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ageBracket: 'unspecified',
        ldr: ['Y'],
        loctype: ['unspecified'],
        location: 'Sao Paolo',
        continent: ['South America']
    },
    {
        name: 'fractal authenticity',
        link: 'https://twitter.com/FractalAuth/status/1449966081490046977',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ageBracket: 'unspecified',
        notes: 'cishet / (mostly) monogamous / long distance is scary but maybe?',
        ldr: ['Y'],
        loctype: ['unspecified'],
        location: 'Colorado',
        continent: ['North America']
    },
    {
        name: 'yatharth',
        link: 'https://yatharth.brick.do/thread/yatharth-s-date-me-page-XDn9ywbjyl2L',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ageBracket: 'unspecified',
        twitter: 'https://twitter.com/AskYatharth',
        featuredTweet: 'https://twitter.com/AskYatharth/status/1384028089659707406',
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        location: 'Venice (Los Angeles)',
        continent: ['North America']

    },
    {
        name: 'joshua nelson',
        link: 'https://twitter.com/joshuayn514/status/1516414741547294728',
        gender: ['M'],
        attracted: ['F'],
        type: ['poly'],
        ageBracket: 'unspecified',
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        location: 'Austin, TX',
        continent: ['North America']
    },
    {
        name: 'cris p. wicks',
        link: 'https://twitter.com/CrispyWicks',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ageBracket: 'unspecified',
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        location: 'Chicago',
        continent: ['North America']
    },
    {
        name: 'pieratt',
        link: 'https://twitter.com/pieratttt',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageBracket: 'unspecified',
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        location: 'Boston(ish)',
        continent: ['North America']
    },
    {
        name: 'kumbuchaqueen',
        link: 'https://twitter.com/kumbuchaqueen/status/1531790619940560896',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ageBracket: 'unspecified',
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        continent: ['unspecified']
    },
    // TODO: UPDATE WITH ATTRACTED + TYPE
    {
        name: 'david kobilnyk',
        link: 'https://twitter.com/davidkobilnyk',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ageBracket: 'unspecified',
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        continent: ['unspecified']
    },
    {
        name: 'matthew skala',
        link: 'https://www.twitch.tv/matthewskala/',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageBracket: 'unspecified',
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        continent: ['unspecified']
    },
    {
        name: 'gustavo lacerda',
        link: 'https://docs.google.com/document/d/1khmwYjPD7cjIC6ssSdH2pYB9BfGCsKvjbrvZoGThkzc/edit?usp=sharing',
        gender: ['M'],
        attracted: ['unspecified'],
        type: ['unspecified'],
        ageBracket: 'unspecified',
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        continent: ['unspecified']
    },
    {
        name: 'john ohno',
        link: 'https://www.lord-enki.net/',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ageBracket: 'unspecified',
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        continent: ['unspecified']
    },
    {
        name: 'elli',
        link: 'https://timeinsensitive.life/date-me/',
        gender: ['M', 'NB'],
        type: ['unspecified'],
        ageBracket: 'unspecified',
        attracted: ['unspecified'],
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        location: 'Massachusetts',
        continent: ['North America']
    },
    {
        name: 'rob hardy',
        link: 'https://crtr.link/s/rob',
        twitter: 'https://twitter.com/ungatedcreative',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageBracket: 'unspecified',
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'might be open to short-term long-distance',
        location: 'Tucson / actively looking for new places to move and put down roots',
        continent: ['North America']
    },
    {
        name: 'zmavli caimle',
        link: 'https://twitter.com/zmavli',
        gender: ['M'],
        attracted: ['M'],
        type: ['mono'],
        ageBracket: 'unspecified',
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        continent: ['unspecified']
    },
    {
        name: 'wiskerz',
        link: 'https://wiskerz.me/date/',
        gender: ['M'],
        type: ['mono'],
        ageBracket: 'unspecified',
        attracted: ['F'],
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        location: 'south of France',
        continent: ['Europe']
    },
    {
        name: 'neil thawani',
        link: 'https://lioninawhat.com/love',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageBracket: 'unspecified',
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        continent: ['unspecified'],
        notes: '(mostly) interested in women / (mostly) monogamous'
    },
    {
        name: 'aella',
        link: 'https://docs.google.com/document/d/1ircYicvNaC3-ijI1lMBL0xP5rvSKwlKpXepXO-tbH48/edit?usp=sharing',
        gender: ['F'],
        attracted: ['M'],
        type: ['poly'],
        ageBracket: 'unspecified',
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        continent: ['unspecified']
    },
    {
        name: 'laura sofia',
        link: 'https://twitter.com/owlsarepurple',
        gender: ['F'],
        attracted: ['F', 'NB', 'M'],
        type: ['poly'],
        ageBracket: 'unspecified',
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        location: 'Ivory Coast',
        continent: ['Africa']
    },
    {
        name: 'jewel andraia',
        link: 'https://twitter.com/ALadyJewel',
        gender: ['F', 'NB'],
        attracted: ['F', 'NB', 'M'],
        type: ['poly'],
        ageBracket: 'unspecified',
        ldr: ['unspecified'],
        loctype: ['unspecified'],
        notes: 'if i don\'t communicate queer trans bi ADHD solo-poly by the end of the first date, i didn\'t overshare properly',
        location: 'Bay Area',
        continent: ['North America']
    },
    {
        name: 'patrick farley',
        link: 'https://patrickdfarley.com/contact/',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ageBracket: 'unspecified',
        ldr: ['Y'],
        loctype: ['unspecified'],
        location: 'NYC',
        continent: ['North America']
    },
    {
        name: 'brooke',
        link: 'https://twitter.com/gptbrooke/status/1286058376489660416?s=20&t=FiL3NG0ZkSCvLnZoEKLwJQ',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono'],
        ageBracket: 'unspecified',
        notes: 'if the right person comes along and they don\'t check some of those boxes then i will change my boxes',
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'California',
        continent: ['North America']
    },
    {
        name: 'josh mcmichael',
        link: 'https://twitter.com/jmcmichael',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ageBracket: 'unspecified',
        notes: 'interested in relationship as a container for growth, recovery, companionship, exploration',
        ldr: ['N'],
        loctype: ['unspecified'],
        location: 'St. Lous, MO',
        continent: ['North America']
    },
    {
        name: 'andrew',
        link: 'https://twitter.com/filomusus',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageBracket: 'unspecified',
        ldr: ['Y'],
        loctype: ['unspecified'],
        location: 'Ann Arbor, MI',
        continent: ['North America']
    },
    {
        name: 'bruno',
        link: 'https://twitter.com/bruno_wilhelm',
        gender: ['M'],
        attracted: ['F'],
        type: ['poly'],
        ageDisplay: `${ageDisplay(1982)}`,
        ageBracket: `${ageBracket(1982)}`,
        ldr: ['Y'],
        loctype: ['unspecified'],
        location: 'Cincinnati, OH',
        continent: ['North America']
    },
    {
        name: 'violet',
        link: 'https://twitter.com/violetvariant',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1984)}`,
        ageBracket: `${ageBracket(1984)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Minneapolis',
        continent: ['North America']
    },
    {
        name: 'adam axolotl',
        link: 'https://twitter.com/calxolotl',
        gender: ['M'],
        attracted: ['F', 'NB', 'M'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1993)}`,
        ageBracket: `${ageBracket(1993)}`,
        ldr: ['N'],
        loctype: ['fixed'],
        notes: 'physicist doing AI safety, seeking life partner, can tell you lots more via DM :)',
        location: 'SF Bay Area (Berkeley)',
        continent: ['North America']
    },
    {
        name: 'joyoptimizer',
        link: 'https://twitter.com/JoyOptimizer',
        gender: ['F'],
        attracted: ['F', 'NB'],
        type: ['mono'],
        ageBracket: 'unspecified',
        ldr: ['Y'],
        loctype: ['unspecified'],
        continent: ['unspecified']
    },
    {
        name: 'james',
        link: 'https://twitter.com/INTPhilosopher',
        gender: ['M'],
        attracted: ['F'],
        type: ['poly'],
        ageDisplay: `${ageDisplay(1994)}`,
        ageBracket: `${ageBracket(1994)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'will be traveling to the west coast in a month or two. no permanent or even semi-permanent residence in my future yet.',
        location: 'Plattsburgh, NY',
        continent: ['North America']
    },
    {
        name: 'ethan',
        link: 'https://twitter.com/EthanJKemp',
        gender: ['M'],
        attracted: ['F', 'NB'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1997)}`,
        ageBracket: `${ageBracket(1997)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Los Angeles / might be moving soon',
        continent: ['North America']
    },
    {
        name: 'chris cassano',
        link: 'https://guy.bz/',
        twitter: 'https://twitter.com/chriscassano',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1988)}`,
        ageBracket: `${ageBracket(1988)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'blessed with default happy brain and boundless optimism.  i sing to my cat everyday.',
        location: 'SF Bay Area / Orlando, FL',
        continent: ['North America']
    },
    {
        name: 'bhargab',
        link: 'https://bhargab.com.np/posts/dating-profile/',
        twitter: 'https://twitter.com/bhrg3se',
        insta: 'https://www.instagram.com/mehawwwww/',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1995)}`,
        ageBracket: `${ageBracket(1995)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Nepal',
        continent: ['Asia']
    },
    {
        name: 'tess',
        link: 'https://twitter.com/xsphi',
        gender: ['F'],
        attracted: ['F', 'NB'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1997)}`,
        ageBracket: `${ageBracket(1997)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'trans; tech; friendly',
        location: 'Portland, OR',
        continent: ['North America']
    },
    {
        name: 'catern',
        link: 'https://twitter.com/zcatern',
        gender: ['M'],
        attracted: ['F', 'NB', 'M'],
        ageDisplay: `${ageDisplay(1994)}`,
        ageBracket: `${ageBracket(1994)}`,
        type: ['mono', 'poly'],
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'NYC',
        continent: ['North America']
    },
    {
        name: 'suru!',
        link: 'https://twitter.com/13surur?t=2j8nCUYr8U5DRhWfxsprYQ&s=09',
        gender: ['F'],
        attracted: ['NB', 'M'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1998)}`,
        ageBracket: `${ageBracket(1998)}`,
        ldr: ['Y'],
        loctype: ['unspecified'],
        location: 'Madison, WI at the moment',
        continent: ['North America']
    },
    {
        name: 'martin',
        link: 'https://twitter.com/mkhl',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageBracket: 'unspecified',
        ldr: ['unspecified'],
        loctype: ['fixed'],
        location: 'Germany',
        continent: ['Europe']
    },
    {
        name: 'sophie',
        link: 'https://twitter.com/SyzygyCoiled',
        gender: ['F'],
        attracted: ['F', 'NB', 'M'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1993)}`,
        ageBracket: `${ageBracket(1993)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Qc',
        continent: ['North America']
    },
    {
        name: 'lex',
        link: 'https://twitter.com/doseofzero',
        gender: ['F'],
        attracted: ['F', 'NB', 'M'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(2001)}`,
        ageBracket: `${ageBracket(2001)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'open to monogamy and polyamory. long distance is kinda scary but im willing to try it out :) hoping to find a partner i can call both my best friend and lover',
        location: 'Quezon City, Philippines',
        continent: ['Asia']
    },
    {
        name: 'harlan',
        link: 'https://twitter.com/harlanonym',
        gender: ['F'],
        attracted: ['F', 'M'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1997)}`,
        ageBracket: `${ageBracket(1997)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Pittsburgh, PA / will probably move back to LA at some point',
        continent: ['North America']
    },
    {
        name: 'dan elton',
        link: 'https://www.okcupid.com/profile/delton137',
        gender: ['M'],
        attracted: ['F', 'NB'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1988)}`,
        ageBracket: `${ageBracket(1988)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Boston, MA',
        continent: ['North America']
    },
    {
        name: 'jez',
        link: 'https://twitter.com/jezng',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1989)}`,
        ageBracket: `${ageBracket(1989)}`,
        ldr: ['Y'],
        loctype: ['fixed'],
        notes: 'i identify as the D in D/s',
        location: 'NYC (actually Jersey City, but close)',
        continent: ['North America']
    },
    {
        name: 'sadmoonanalog',
        link: 'https://twitter.com/sadmoonanalog',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1995)}`,
        ageBracket: `${ageBracket(1995)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'avid lifter (🏋️‍♀️), amateur potter (🏺). writer by profession. mid-twenties, swolethicc, & greytribe. may not want kids but still wants to build together.',
        location: 'Austin, TX',
        continent: ['North America']
    },
    {
        name: 'christine',
        link: 'https://twitter.com/Lil0qui',
        gender: ['F'],
        attracted: ['NB', 'M'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1982)}`,
        ageBracket: `${ageBracket(1982)}`,
        ldr: ['Y'],
        loctype: ['fixed'],
        notes: 'socialist, atheist, optimistic nihilist, spectrum member. into a wide variety of hobbies and esoterica like anime, video games, synthesizers, astronomy, scifi, programming, Magic, etc. no kids, no marriages, easy going. i lift and get outdoors sometimes.',
        location: 'Seattle',
        continent: ['North America']
    },
    {
        name: 'golgi',
        link: 'https://twitter.com/GolgiThePrince',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1998)}`,
        ageBracket: `${ageBracket(1998)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Detroit, Michigan',
        continent: ['North America']
    },
    {
        name: 'torrel',
        link: 'https://twitter.com/dyn_westner',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1995)}`,
        ageBracket: `${ageBracket(1995)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Germany',
        continent: ['Europe']
    },
    {
        name: 'j.r.',
        link: 'https://twitter.com/kazundogohda',
        gender: ['M'],
        attracted: ['NB', 'M'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1989)}`,
        ageBracket: `${ageBracket(1989)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'short term long distance okay; likely heading back to the Bay Area in April 2023',
        location: 'New Zealand',
        continent: ['Oceania']
    },
    {
        name: 'alex',
        link: 'https://twitter.com/aiactorcritic',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1991)}`,
        ageBracket: `${ageBracket(1991)}`,
        ldr: ['Y'],
        loctype: ['fixed'],
        location: 'London, UK',
        continent: ['Europe']
    },
    {
        name: 'kaixi',
        link: 'https://kaixiyang.com/',
        twitter: 'https://twitter.com/kaixiyang_',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1998)}`,
        ageBracket: `${ageBracket(1998)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'uhhhh 6 foot at least, and really gorgeous goofy ambitious and genius creative men onlyyyy',
        location: 'Bay Area / LA',
        continent: ['North America']
    },
    {
        name: 'renee',
        link: 'https://twitter.com/reneesolana',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1989)}`,
        ageBracket: `${ageBracket(1989)}`,
        ldr: ['Y'],
        loctype: ['fixed'],
        location: 'Chicago',
        continent: ['North America']
    },
    {
        name: 'kevin walker',
        link: 'https://twitter.com/Reccamn?t=7vJVKqKSLJPOI1Cu-mSXiA&s=09',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1989)}`,
        ageBracket: `${ageBracket(1989)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'INFJ / sad about the past and worried for the future, but just living for tomorrow.',
        location: 'San Diego',
        continent: ['North America']
    },
    {
        name: 'mercer',
        link: 'https://docs.google.com/document/d/1FUcf4P06yVo4bJB0lRYiq_gn-0cE0glo1YNAWO0jz4g/edit?usp=sharing',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1999)}`,
        ageBracket: `${ageBracket(1999)}`,
        ldr: ['Y'],
        loctype: ['fixed'],
        location: 'NYC',
        continent: ['North America']
    },
    {
        name: 'delen',
        link: 'https://twitter.com/dheisman',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1983)}`,
        ageBracket: `${ageBracket(1983)}`,
        ldr: ['Y'],
        loctype: ['fixed'],
        notes: "i'm pretty cool",
        location: 'Philadelphia',
        continent: ['North America']
    },
    {
        name: 'shailja',
        link: 'https://twitter.com/shailja_0_',
        gender: ['F', 'NB'],
        attracted: ['F', 'NB'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(2002)}`,
        ageBracket: `${ageBracket(2002)}`,
        ldr: ['Y'],
        loctype: ['fixed'],
        location: 'Mumbai',
        continent: ['Asia']
    },
    {
        name: 'hek',
        link: 'https://twitter.com/hekatonsure',
        gender: ['M'],
        attracted: ['F', 'NB'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1998)}`,
        ageBracket: `${ageBracket(1998)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'i bounce up and down the WC all the time, looking to split living between LA and PNW - open to BC coastal. Freq. climber/hiker/camping/hang gliding.',
        location: 'West Coast',
        continent: ['North America']
    },
    {
        name: 'braverius',
        link: 'https://twitter.com/braverius',
        gender: ['M'],
        attracted: ['F', 'NB', 'M'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1993)}`,
        ageBracket: `${ageBracket(1993)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: '~Seattle',
        continent: ['North America']
    },
    {
        name: 'graham bessellieu',
        link: 'https://sites.google.com/view/cgbessellieu-dating/home',
        gender: ['NB', 'M'],
        attracted: ['F', 'NB'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1988)}`,
        ageBracket: `${ageBracket(1988)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Central NJ',
        continent: ['North America']
    },
    {
        name: 'chris',
        link: 'https://twitter.com/mosephos',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1993)}`,
        ageBracket: `${ageBracket(1993)}`,
        ldr: ['N'],
        loctype: ['fixed'],
        location: 'NYC',
        continent: ['North America']
    },
    {
        name: 'tiger',
        link: 'https://twitter.com/kafkamacchiato',
        gender: ['F'],
        attracted: ['F', 'NB'],
        type: ['poly'],
        ageDisplay: `${ageDisplay(1991)}`,
        ageBracket: `${ageBracket(1991)}`,
        ldr: ['Y'],
        loctype: ['fixed'],
        notes: 'post-op trans woman who missed out on her teenage years and now wants to fuck around',
        location: 'Gothenburg, Sweden',
        continent: ['Europe']
    },
    {
        name: 'brian',
        link: 'https://twitter.com/LagodaBrian',
        gender: ['M'],
        attracted: ['F', 'NB'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1992)}`,
        ageBracket: `${ageBracket(1992)}`,
        ldr: ['Y'],
        loctype: ['fixed'],
        notes: `i love my (in-person) job, but, one way or another, i imagine i'll be free to move someday.`,
        location: 'Metro DC (Northern Virginia',
        continent: ['North America']
    },
    {
        name: 'matthew',
        link: 'https://twitter.com/Robin_ChillJams',
        gender: ['M'],
        attracted: ['F', 'NB'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1989)}`,
        ageBracket: `${ageBracket(1989)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: `into left wing politics (though i am a bit idiosyncratic, see my tweets), lover of music (house/techno/ambient really any kind of electronic music). i tend to be a cynical but optimistic person. open to a lot of things but i am primary looking for a loving monogamous relationship.`,
        location: 'East Tennessee',
        continent: ['North America']
    },
    {
        name: 'haarball',
        link: 'https://twitter.com/haarball_',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1986)}`,
        ageBracket: `${ageBracket(1986)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Oslo, Norway',
        continent: ['Europe']
    },
    {
        name: 'daniel',
        link: 'https://twitter.com/dangmartin1',
        gender: ['M'],
        attracted: ['M'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1994)}`,
        ageBracket: `${ageBracket(1994)}`,
        ldr: ['N'],
        loctype: ['flexible'],
        notes: 'physicist in tech, likes lots of things, fun to talk to',
        location: 'Oxford, UK',
        continent: ['Europe']
    },
    {
        name: 'sofy',
        link: 'https://claritysofy.com/',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1988)}`,
        ageBracket: `${ageBracket(1988)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        notes: 'i’m working on a date me doc atm. but in a nutshell i’m looking for a life partner, someone to go on a secular spiritual journey and build an amazing life together filled with love, books and mutual growth and support',
        location: 'Bay Area',
        continent: ['North America']
    },
    {
        name: 'observer of suns',
        link: 'https://twitter.com/ObserverSuns',
        featuredTweet: 'https://twitter.com/ObserverSuns/status/1444757512259915781',
        gender: ['M'],
        attracted: ['F', 'NB'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1999)}`,
        ageBracket: `${ageBracket(1999)}`,
        ldr: ['N'],
        loctype: ['fixed'],
        notes: 'i’m a graduate student in computer science!',
        location: 'US East Coast (DM for details)',
        continent: ['North America']
    },
    {
        name: 'arin',
        link: 'https://twitter.com/arin_spanner',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(2000)}`,
        ageBracket: `${ageBracket(2000)}`,
        ldr: ['Y'],
        loctype: ['fixed'],
        notes: `transitioning to blockchain developer. / owns every kind of chapstick. / default optimism. / weeeeeeeeeeee`,
        location: 'Stanford, CA',
        continent: ['North America']
    },
    {
        name: 'jeffrey ladish',
        link: 'https://jeffreyladish.com/dateme',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1991)}`,
        ageBracket: `${ageBracket(1991)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'SF Bay Area',
        continent: ['North America']
    },
    {
        name: 'catherio',
        link: 'https://cather.io/dateme',
        gender: ['F'],
        attracted: ['F', 'NB', 'M'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1990)}`,
        ageBracket: `${ageBracket(1990)}`,
        ldr: ['N'],
        loctype: ['flexible'],
        location: 'Berkeley',
        continent: ['North America']
    },
    {
        name: 'tiffinWA',
        email: 'tell325 AT wgu DOT edu',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1980)}`,
        ageBracket: `${ageBracket(1980)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Washington state',
        continent: ['North America']
    },
    {
        name: 'naia',
        link: 'https://twitter.com/nbouscal',
        gender: ['F'],
        attracted: ['F', 'NB', 'M'],
        type: ['poly'],
        ageDisplay: `${ageDisplay(1990)}`,
        ageBracket: `${ageBracket(1990)}`,
        ldr: ['Y'],
        loctype: ['fixed'],
        location: ['London'],
        continent: ['Europe']
    },
    {
        name: 'kayla',
        link: 'https://twitter.com/Estimatrix',
        gender: ['F'],
        attracted: ['F'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1974)}`,
        ageBracket: `${ageBracket(1974)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Red Bank, New Jersey',
        continent: ['North America']
    },
    {
        name: 'btoh',
        link: 'https://twitter.com/btohtoh',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1998)}`,
        ageBracket: `${ageBracket(1998)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'London, UK (but from Singapore)',
        continent: ['Europe']
    },
    {
        name: 'jade',
        link: 'https://jadecastillo.squarespace.com/',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1997)}`,
        ageBracket: `${ageBracket(1997)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: ['Texas/NY'],
        continent: ['North America']
    },
    {
        name: 'johnson',
        link: 'https://twitter.com/justavagrant_',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1993)}`,
        ageBracket: `${ageBracket(1993)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Seattle, France, unknown',
        continent: ['North America', 'Europe']
    },
    {
        name: 'dan k',
        link: 'https://twitter.com/Yozarian22',
        gender: ['M'],
        attracted: ['F', 'NB'],
        type: ['poly'],
        ageDisplay: `${ageDisplay(1988)}`,
        ageBracket: `${ageBracket(1988)}`,
        ldr: ['Y'],
        loctype: ['fixed'],
        location: 'Austin',
        continent: ['North America'],
        notes: 'regular in the Texas burner community',
    },
    {
        name: 'maryam',
        link: 'https://twitter.com/MaryamAli_Khan',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1995)}`,
        ageBracket: `${ageBracket(1995)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Oxford',
        continent: ['Europe'],
        notes: `psychologist doing moral psyc, here for a long-ish time. i make great playlists for everything (really), i think i'm funny, and i have great taste but sometimes i drink huel.`
    },
    {
        name: 'mindfroth',
        link: 'https://twitter.com/mindfroth',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1982)}`,
        ageBracket: `${ageBracket(1982)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Portland, OR',
        continent: ['North America']
    },
    {
        name: 'shreeda',
        link: 'https://cheerful-marmoset-af5.notion.site/Date-Me-09842fd0b938499fbbf82dfb8953e747',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1995)}`,
        ageBracket: `${ageBracket(1995)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Austin, Texas',
        continent: ['North America']
    },
    {
        name: 'hormeze',
        link: 'https://hormeze.com/',
        twitter: 'https://twitter.com/hormeze',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1995)}`,
        ageBracket: `${ageBracket(1995)}`,
        ldr: ['N'],
        loctype: ['fixed'],
        location: 'Berkeley',
        continent: ['North America'],
        notes: 'currently not a face account but u can dm me for pics'
    },
    {
        name: 'leah prime',
        link: 'https://twitter.com/leahprime',
        gender: ['F'],
        attracted: ['M'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(1986)}`,
        ageBracket: `${ageBracket(1986)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'NY CO … independent',
        continent: ['North America'],
        notes: 'three cats, many books'
    },
    {
        name: 're',
        link: 'https://twitter.com/Actualwebutante',
        gender: ['F'],
        attracted: ['F', 'NB', 'M'],
        type: ['mono', 'poly'],
        ageDisplay: `${ageDisplay(1995)}`,
        ageBracket: `${ageBracket(1995)}`,
        ldr: ['Y'],
        loctype: ['flexible'],
        location: 'Washington DC',
        continent: ['North America']
    },
    {
        name: 'max',
        link: 'https://drive.google.com/file/d/1asj142baA-CqW9-MDZmiclXCBkSuKB2X/view?usp=sharing',
        twitter: 'https://twitter.com/absurdlymax',
        gender: ['M'],
        attracted: ['F'],
        type: ['mono'],
        ageDisplay: `${ageDisplay(2001)}`,
        ageBracket: `${ageBracket(2001)}`,
        ldr: ['Y']
    }

    // max is 61

    // SUGGESTIONS
        // brian: "I thought the sentence-based interface was less confusing than the new one that just has gender lists in two places."
        // @zcatern: "show me a random person and open their DMs" or something button, to motivate interactions
]

export default Profiles;