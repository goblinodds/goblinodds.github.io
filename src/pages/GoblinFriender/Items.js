import atmylimit from '../../assets/goblinFrienderIMGs/atmylimit.jpg';
import autismspeaks from '../../assets/goblinFrienderIMGs/autismspeaks.jpg';
import fightclub from '../../assets/goblinFrienderIMGs/fightclub.jpg';
import headempty from '../../assets/goblinFrienderIMGs/headempty.png';
import insane from '../../assets/goblinFrienderIMGs/insane.jpg';
import millet from '../../assets/goblinFrienderIMGs/millet.jpeg';
import onlyposting from '../../assets/goblinFrienderIMGs/onlyposting.png';
import picasso from '../../assets/goblinFrienderIMGs/picasso.jpeg';
import ronitbaranga from '../../assets/goblinFrienderIMGs/ronitbaranga.png';
import scorpios from '../../assets/goblinFrienderIMGs/scorpios.jpeg';
import starrynight from '../../assets/goblinFrienderIMGs/starrynight.jpeg';
import waterhouse from '../../assets/goblinFrienderIMGs/waterhouse.jpeg';

const Items = [
    {
        src: atmylimit,
        type: 'img',
        category: ['humor'],
        mood: 'like'
    },
    {
        src: autismspeaks,
        type: 'img',
        category: ['humor', 'interests', 'philosophy'],
        mood: 'like'
    },
    {
        src: fightclub,
        type: 'img',
        category: ['humor', 'philosophy'],
        mood: 'like'
    },
    {
        src: headempty,
        type: 'img',
        category: ['humor', 'visual', 'philosophy'],
        mood: 'like'
    },
    {
        src: insane,
        type: 'img',
        category: ['humor', 'visual', 'philosophy'],
        mood: 'like'
    },
    {
        src: onlyposting,
        type: 'img',
        category: ['humor', 'philosophy'],
        mood: 'like'
    },
    {
        src: ronitbaranga,
        type: 'img',
        category: ['visual'],
        mood: 'like'
    },
    {
        src: scorpios,
        type: 'img',
        category: ['humor', 'interests'],
        mood: 'dislike'
    },
    {
        name: 'GALAY Dosanko Shiisaa',
        src: 'https://www.youtube.com/embed/k1WLWsiJ6I0?clip=UgkxAaHWyldt1EXsA3rXN1W_7iiqo63pqJJv&amp;clipt=ENSNBRi4xwU',
        type: 'video',
        category: ['audio'],
        mood: 'like'
    },
    {
        name: 'sewing',
        type: 'text',
        category: ['interests'],
        mood: 'like'
    },
    {
        name: 'TOP 40s',
        type: 'text',
        category: ['audio'],
        mood: 'dislike'
    },
    {
        name: 'sunlight',
        type: 'text',
        category: ['interests'],
        mood: 'dislike'
    },
    {
        name: 'salsa dancing',
        type: 'text',
        category: ['interests'],
        mood: 'dislike'
    },
    {
        src: starrynight,
        type: 'img',
        category: ['visual'],
        mood: 'dislike'
    },
    {
        src: picasso,
        type: 'img',
        category: ['visual'],
        mood: 'dislike'
    },
    {
        src: waterhouse,
        type: 'img',
        category: ['visual'],
        mood: 'like'
    },
    {
        src: millet,
        type: 'img',
        category: ['visual'],
        mood: 'like'
    },
    {
        name: `“When you choose an action, you choose the consequences of that action. When you desire a consequence you had damned well better take the action that would create it.”`,
        type: 'text',
        category: ['philosophy'],
        mood: 'like'
    },
    {
        name: `“There is one thing, Emma, which a man can always do if he chooses, and that is his duty; not by manoeuvring and finessing, but by vigour and resolution."`,
        type: 'text',
        category: ['philosophy'],
        mood: 'like'
    },
    {
        name: `“It is nothing to die; it is dreadful not to live.”`,
        type: 'text',
        category: ['philosophy'],
        mood: 'dislike'
    }
]

export default Items;

/*
figure out how to add Youtube clips
<iframe width="560" height="315" src="https://www.youtube.com/embed/k1WLWsiJ6I0?clip=UgkxAaHWyldt1EXsA3rXN1W_7iiqo63pqJJv&amp;clipt=ENSNBRi4xwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/