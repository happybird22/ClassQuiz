const questionsContainer = document.getElementById("questionsContainer");
const nextbtn = document.getElementById("nextbtn");
const resultsContainer = document.getElementById("resultsContainer");

const questions = [
    {
        question: `What motivates you most in an adventure?`,
        options: {
            A: `The thrill of the battle and proving my strength`,
            B: `Uncovering secrets and hidden knowledge`,
            C: `Helping those in need and protecting the weak`,
            D: `Amassing power and fortune`
        },
        answers: {
            A: { Barbarian: 2, Fighter: 1, Sorceror: 1 },
            B: { Ranger: 2, Rogue: 1, Warlock: 1 },
            C: { Paladin: 2, Monk: 1, Cleric: 1, Druid: 1 },
            D: { Wizard: 2, Bard: 1 }
        }
    },
    {
        question: `When tough decisions arise...`,
        options: {
            A: `I have strong convictions that I make heard`,
            B: `I keep my cards close to my chest`,
            C: `I am agreeable to anything, within reason`,
            D: `I go with the flow, no matter what`
        },
        answers: {
            A: { Bard: 2, Paladin: 1, Cleric: 1 },
            B: { Rogue: 2, Wizard: 1, Barbarian: 1 },
            C: { Druid: 2, Monk: 1, Ranger: 1 },
            D: { Fighter: 2, Warlock: 1, Sorceror: 1 }
        }
    },
    {
        question: `When others get hurt, you...`,
        options: {
            A: `Laugh, come on... it’s funny`,
            B: `Nothing, that seems like a them problem.`,
            C: `Avenge them as soon as possible`,
            D: `Anything I can to help them feel better`
        },
        answers: {
            A: { Rogue: 2, Sorceror: 1, Fighter: 1 },
            B: { Ranger: 2, Warlock: 1, Wizard: 1 },
            C: { Paladin: 2, Monk: 1, Barbarian: 1 },
            D: { Cleric: 2, Druid: 1, Bard: 1 }
        }
    },
    {
        question: `The world is...`,
        options: {
            A: `a terrifying place to be feared`,
            B: `a powerful place to be conquered`,
            C: `a beautiful place to be explored`,
            D: `a magical place to be harnessed`
        },
        answers: {
            A: { Warlock: 2, Rogue: 1, Paladin: 1 },
            B: { Wizard: 2, Barbarian: 1, Fighter: 1 },
            C: { Druid: 2, Ranger: 1, Monk: 1 },
            D: { Sorceror: 2, Bard: 1, Cleric: 1 }
        }
    },
    {
        question: `You and your friends are starving and near death! You...`,
        options: {
            A: `Pray to your Diety for assistance`,
            B: `Raid the nearest civilized area for food and anything else they've got`,
            C: `Track and hunt anything edible`,
            D: `Start foraging in the nearby forest`
        },
        answers: {
            A: { Cleric: 2, Paladin: 1, Warlock: 1 },
            B: { Barbarian: 2, Fighter: 1, Sorceror: 1 },
            C: { Ranger: 2, Rogue: 1, Monk: 1 },
            D: { Druid: 2, Bard: 1, Wizard: 1 }
        }
    },
    {
        question: `What is your fighting style?`,
        options: {
            A: `I am a skilled warrior with martial weapons`,
            B: `I enjoy hand-to-hand combat`,
            C: `I attack from a distance`,
            D: `Fighting never provides lasting resolutions, we need peace through diplomacy`
        },
        answers: {
            A: { Fighter: 2, Paladin: 1 },
            B: { Monk: 2, Rogue: 1, Barbarian: 1 },
            C: { Wizard: 2, Ranger: 1, Warlock: 1, Sorceror: 1 },
            D: { Bard: 2, Cleric: 1, Druid: 1 }
        }
    },
    {
        question: `You enter a large cavern with lit candle scones on each wall and a large chandelier hanging in the center of the room. Directly beneath it is the evil cult you’ve been tracking. They are nearing the end of a summoning ritual to call even greater evil upon your world! You...`,
        options: {
            A: `Pull your party back! You’ll need a solid plan here.`,
            B: `ready your weapons and rush into action, attacking the closest cultist`,
            C: `Look for a way to drop the chandelier, crushing all enemies at once`,
            D: `Already know the perfect spell so you slip behind a pillar and start casting`
        },
        answers: {
            A: { Bard: 2, Druid: 1, Rogue: 1 },
            B: { Barbarian: 2, Monk: 1, Fighter: 1 },
            C: { Ranger: 2, Paladin: 1 },
            D: { Cleric: 2, Wizard: 1, Warlock: 1, Sorceror: 1 }
        }
    },
    {
        question: `You and your party are relaxing at a tavern after a long day. You...`,
        options: {
            A: `Work the room! There could be some important nobles there.`,
            B: `Relax with as many ales as your constitution will allow`,
            C: `Check for valuables in the pockets of nearby patrons`,
            D: `Head for the game tables. You’re never one to turn down the challenge`
        },
        answers: {
            A: { Bard: 2, Wizard: 1, Cleric: 1 },
            B: { Sorceror: 2, Barbarian: 1, Druid: 1, Monk: 1 },
            C: { Rogue: 2, Warlock: 1 },
            D: { Fighter: 2, Paladin: 1, Ranger: 1 }
        }
    },
    {
        question: `Where does your magically ability come from?`,
        options: {
            A: `My Deity, of course`,
            B: `From the natural magical weave itself`,
            C: `It just comes to me, sometimes in surprising ways`,
            D: `Through diligent study and hard-work`
        },
        answers: {
            A: { Paladin: 2, Cleric: 2, Warlock: 2 },
            B: { Druid: 2, Monk: 1, Ranger: 1 },
            C: { Sorceror: 2, Barbarian: 1, Fighter: 1 },
            D: { Wizard: 2, Bard: 2, Rogue: 1 }
        }
    },
    {
        question: `Why are you playing D&D?`,
        options: {
            A: `I need an escape from reality`,
            B: `I just want to make new friends`,
            C: `I love the immersive, magical lore`,
            D: `I had nothing better to do`
        },
        answers: {
            A: { Sorceror: 2, Paladin: 1, Cleric: 1 },
            B: { Bard: 2, Fighter: 1, Wizard: 1 },
            C: { Druid: 2, Monk: 1, Ranger: 1 },
            D: { Warlock: 2, Rogue: 1, Barbarian: 1 }
        }
    },
    {
        question: `Do you like to learn and follow rules?`,
        options: {
            A: `Rules are a barrier to creativity`,
            B: `Rules are great guidelines to get things going`,
            C: `Without the ruleset, things would quickly slip into chaos`,
            D: `Rules can be bent but never broken`
        },
        answers: {
            A: { Bard: 2, Rogue: 1, Sorceror: 1 },
            B: { Fighter: 2, Ranger: 1, Warlock: 1 },
            C: { Wizard: 2, Barbarian: 1, Cleric: 1 },
            D: { Paladin: 2, Druid: 1, Monk: 1 }
        }
    },
    {
        question: `How long will you spend prepping for gameplay?`,
        options: {
            A: `I need to prep?`,
            B: `I’ll make sure I understand my character sheet and have dice.`,
            C: `About an hour`,
            D: `However long it takes to understand all my actions, items, spells, etc.`
        },
        answers: {
            A: { Monk: 2, Rogue: 2, Barbarian: 1 },
            B: { Fighter: 2, Ranger: 1, Warlock: 1 },
            C: { Sorceror: 2, Druid: 1, Paladin: 1 },
            D: { Wizard: 2, Cleric: 2, Bard: 2 }
        }
    },
];

// Answer Handling

let scores = {
    Barbarian: 0, Bard: 0, Cleric: 0, Druid: 0, Fighter: 0, Monk: 0, Paladin: 0, Ranger: 0, Rogue: 0, Sorceror: 0, Warlock: 0, Wizard: 0
};

let currentQuestionIndex = 0;

// Show questions

function displayQuestion() {
    console.log("Displaying question", currentQuestionIndex);
    const questionData = questions[currentQuestionIndex];

    questionContainer.innerHTML = "";

    const questionText = document.createElement("h2");
    questionText.textContent = questionData.question;
    questionContainer.appendChild(questionText);

    for (let key in questionData.options) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = `radio`;
        input.name = `answer`;
        input.value = key;

        label.appendChild(input);
        label.appendChild(document.createTextNode(`(${key}) ${questionData.options[key]}`));
        questionContainer.appendChild(label);
        questionContainer.appendChild(document.createElement("br"));
    }

    nextbtn.style.display = "block";
}

function handleAnswer() {
    const selectedAnswer = document.querySelector(`input[name="answer"]:checked`);

    if (!selectedAnswer) {
        alert(`Please select an answer to proceed.`);
        return;
    }

    let chosenLetter = selectedAnswer.value;
    let questionData = questions[currentQuestionIndex];

    const selectedScores = questionData.answers[chosenLetter];

    for (const [className, points] of Object.entries(selectedScores)) {
        scores[className] += points;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

// Show Results

function showResult() {
    questionContainer.innerHTML = "";
    nextbtn.style.display = "none";

    let highestScore = 0;
    let bestClass = "";

    for (const [className, score] of Object.entries(scores)) {
        if (score > highestScore) {
            highestScore = score;
            bestClass = className;
        }
    }
    
    resultsContainer.innerHTML = `<h2>You are best suited to be a ${bestClass}!</h2>`;
}



scores = {
    Barbarian: 0, Bard: 0, Cleric: 0, Druid: 0, Fighter: 0, Monk: 0, Paladin: 0, Ranger: 0, Rogue: 0, Sorceror: 0, Warlock: 0, Wizard: 0

};

currentQuestionIndex = 0;
// Event Listener
nextbtn.addEventListener("click", handleAnswer);

displayQuestion();

// function handleAnswer(selection, questionData) {
//     const selectedScores = questionData.answers[selection];

//     for (const [className, points] of Object.entries(selectedScores)) {
//         scores[className] += points;
//     }
// }

// function handleAnswer() {
//     const selectedAnswer = document.querySelector(`input[name="answer"]:checked`);

//     if (selectedAnswer) {
//         let chosenLetter = selectedAnswer.value;
//         let currentQuestion = questions[currentQuestionIndex];

//         userAnswers.push(currentQuestion.answers[chosenLetter]);

//         currentQuestionIndex++;

//         if (currentQuestionIndex < questions.lenght) {
//             displayQuestion();
//         } else {
//             showResult();
//         }
//     }
// }

