import React from 'react';
import './GoblinFriender.css';
import { useState } from 'react';
import Items from '../../components/GoblinFriender/Items.js';

// TODO make a single array of all categories and refactor???
let scores = { philosophy: 0, humor: 0, interests: 0, audio: 0, visual: 0 }
let maxScores = { philosophy: 40, humor: 30, interests: 10, audio: 10, visual: 10 }
// number of items in each category
let categoryCounts = { philosophy: 0, humor: 0, interests: 0, audio: 0, visual: 0 }

function categoryCount() {
    // iterates over all Items
    for (let i = 0; i < Items.length; i++) {
        // iterates over the 'category' array
        for (let i2 = 0; i2 < Items[i].category.length; i2++) {
          let category = Items[i].category[i2];
          categoryCounts[category] += 1;
        }
    }
}

categoryCount();

let randomIndex = Math.floor(Math.random() * Items.length);

const admonitions = [
    'RUDE',
    'excuse me,,',
    'HEY',
    'do u mind',
    'never speak to me or my son again',
    'this is the opposite of what i requested',
    'ha ha very funny',
    'i see what u did there',
    'i can do this all day',
    'try that again and see what happens',
    'say that to my face',
    'jk haha press the ☹ button',
    'goddamnit',
    'ok i get it ur ungovernable'
];

const instruction = `tell me how u feel about this series of images and sounds and words and i'll tell u how well we would get along`

export default function GoblinFriender() {

    // displays page content (Instructions, Quiz, or Results)
    const [currentPhase, setCurrentPhase] = useState('instructions');
    // displays instruction or admonition
    const [currentInstruction, setCurrentInstruction] = useState(instruction);
    // displays an ITEM for evaluation
    const [currentItem, setCurrentItem] = useState(Items[randomIndex]);

    function Instructions() {
        return (
            <div className='item'>
                <p>{currentInstruction}</p>
                <p>(press the ☺ button to continue)</p>
            </div>
        );
    }

    function Quiz() {
        if (currentItem.type === 'img') {
            return (
                <Image />
            );
        } else if (currentItem.type === 'video') {
            return (
                <Video />
            );
        } else if (currentItem.type === 'text') {
            return (
                <Text />
            );
        }
    }

    function Image() {
        return (
            <img className='item' src={currentItem.src}></img>
        );
    }

    function Text() {
        return (
            <div className='item' id='itemText'>{currentItem.name}</div>
        );
    }

    function Video() {
        return (
            <iframe className='item' src={currentItem.src} title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        );
    }


    function Results() {
        return (
            <div className='item'>you are {finalScore()}% compatible with goblin!</div>
        );
    }

    function pointChange(userChoice) {
        // iterates over the current item's category array
        for (let i = 0; i < currentItem.category.length; i++) {
            // current item's current category
            // expect a string like 'humor'
            const category = currentItem.category[i];
            // total possible score in a category divided by number of items in that category
            const deviation = maxScores[category] / categoryCounts[category];
            // if user's opinion is compatible, gain points
            if (currentItem.mood === userChoice) {
                scores[category] += deviation;
            }
        }
    }

    function nextItem() {
        // if there are 2 or more items remaining
        // (if there's only 1 item remaining you don't need to remove it from the array)
        if (Items.length > 1) {
            // remove current item from array
            Items.splice(randomIndex, 1);
            // generate a new random index
            randomIndex = Math.floor(Math.random() * Items.length);
            // display a random item
            setCurrentItem(Items[randomIndex]);
            // at end of quiz, show results
        } else {
            setCurrentPhase('results');
        }
    }

    function like() {
        if (currentPhase === 'quiz') {
            pointChange('like');
            nextItem();
        // moves from Instructions to Quiz
        } else if (currentPhase === 'instructions') {
            setCurrentPhase('quiz');
        }
    }

    function dislike() {
        // displays next item
        if (currentPhase === 'quiz') {
            nextItem();
            // insists you choose "like" to move on
        } else if (currentPhase === 'instructions') {
            const randomAdmonition = admonitions[Math.floor(Math.random() * admonitions.length)];
            setCurrentInstruction(randomAdmonition);
        }
    }

    function LikeButton() {
        return (
            <button className='button like' onClick={like}>☺</button>
        )
    }

    function DislikeButton() {
        return (
            <button className='button dislike' onClick={dislike}>☹</button>
        )
    }

    const finalScore = () => {
        // iterate over scores
        // if a given category is < 0 then it = 0
        for (let key in scores) {
            if (scores[key] < 0) {
              scores[key] = 0;
            }
          }
        return Math.round(scores.philosophy + scores.humor + scores.interests + scores.audio + scores.visual);
    }

    return (
        <div>
            <h1>GOBLIN FRIENDER (WIP)</h1>
            <div className='wrapper'>
                <div className='buttons'>
                    {(currentPhase !== 'results') && <LikeButton />}
                </div>
                <div id='content'>
                    {(currentPhase === 'instructions' && <Instructions />) || (currentPhase === 'quiz' && <Quiz />) || (currentPhase === 'results' && <Results />)}
                </div>
                <div className='buttons'>
                    {(currentPhase !== 'results') && <DislikeButton />}
                </div>
            </div>
        </div>
    );

};

// HELPER FUNCTIONS (lowercase) and COMPONENTS (uppercase)