// gender: the profile's gender
// attracted: who the profile is attracted TO
/****************
 FORMATTING NOTES
*****************/
// any filter (that doesn't get displayed) must be formatted as an ARRAY
// if there's a filter for it, there must be a field there, or "includes" breaks
// links MUST start with http:// or https://

//
// ENTRIES
//

// KICKSTARTER FORMAT
// <iframe src="url/widget/card.html?v=2" width="220" height="420" frameborder="0" scrolling="no"></iframe>
// KO-FI format
// kofi

const Profiles = [
    {
        name: 'kendric tonn',
        twitter: 'https://twitter.com/kendrictonn',
        website: 'https://www.kendrictonn.com/',
        platform: ['website'],
        category: ['art']
    },
    {
        name: 'reg',
        twitter: 'https://twitter.com/Actualwebutante',
        website: 'https://oldprosonline.org/',
        platform: ['website'],
        category: ['activism']
    },
    {
        name: 'octavia nouzen',
        patreon: 'https://www.patreon.com/nouzens',
        twitter: 'https://twitter.com/SlimePriestess',
        website: 'https://voidgoddess.org/',
        cashapp: 'https://cash.app/queerslimepriestess',
        venmo: 'https://account.venmo.com/u/slimepriestess',
        platform: ['patreon', 'cashapp', 'venmo', 'website'],
        category: ['art', 'fiction', 'community', 'blogging', 'games']
    },
    {
        name: 'ray doraisamy',
        twitter: 'https://twitter.com/forshaper',
        website: 'https://raydoraisamy.com/',
        category: ['blogging', 'community', 'art']
    }
]

export default Profiles;