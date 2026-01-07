// DOM Elements
const questionsContainer = document.getElementById("questionsContainer");
const nextbtn = document.getElementById("nextbtn");
const resultsContainer = document.getElementById("resultsContainer");
const startbtn = document.getElementById("startbtn");

// Start Quiz
startbtn.addEventListener("click", function () {
    startbtn.style.display = "none";
    nextbtn.style.display = "block";
    displayQuestion();
});

// Questions
const questions = [
    {
        question: `1 of 12: What motivates you most in an adventure?`,
        options: {
            A: `The thrill of the battle and proving my strength`,
            B: `Uncovering secrets and hidden knowledge`,
            C: `Helping those in need and protecting the weak`,
            D: `Amassing power and fortune`
        },
        answers: {
            A: { Barbarian: 2, Fighter: 1, Sorcerer: 1 },
            B: { Ranger: 2, Rogue: 1, Warlock: 1 },
            C: { Paladin: 2, Monk: 1, Cleric: 1, Druid: 1 },
            D: { Wizard: 2, Bard: 1 }
        }
    },
    {
        question: `2 of 12: When tough decisions arise...`,
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
            D: { Fighter: 2, Warlock: 1, Sorcerer: 1 }
        }
    },
    {
        question: `3 of 12: When others get hurt, you...`,
        options: {
            A: `Laugh, come on... it’s funny`,
            B: `Nothing, that seems like a them problem.`,
            C: `Avenge them as soon as possible`,
            D: `Anything I can to help them feel better`
        },
        answers: {
            A: { Rogue: 2, Sorcerer: 1, Fighter: 1 },
            B: { Ranger: 2, Warlock: 1, Wizard: 1 },
            C: { Paladin: 2, Monk: 1, Barbarian: 1 },
            D: { Cleric: 2, Druid: 1, Bard: 1 }
        }
    },
    {
        question: `4 of 12: The world is...`,
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
            D: { Sorcerer: 2, Bard: 1, Cleric: 1 }
        }
    },
    {
        question: `5 of 12: You and your friends are starving and near death! You...`,
        options: {
            A: `Pray to your Deity for assistance`,
            B: `Raid the nearest civilized area for food and anything else they've got`,
            C: `Track and hunt anything edible`,
            D: `Start foraging in the nearby forest`
        },
        answers: {
            A: { Cleric: 2, Paladin: 1, Warlock: 1 },
            B: { Barbarian: 2, Fighter: 1, Sorcerer: 1 },
            C: { Ranger: 2, Rogue: 1, Monk: 1 },
            D: { Druid: 2, Bard: 1, Wizard: 1 }
        }
    },
    {
        question: `6 of 12: What is your fighting style?`,
        options: {
            A: `I am a skilled warrior with martial weapons`,
            B: `I enjoy hand-to-hand combat`,
            C: `I attack from a distance`,
            D: `Fighting never provides lasting resolutions, we need peace through diplomacy`
        },
        answers: {
            A: { Fighter: 2, Paladin: 1 },
            B: { Monk: 2, Rogue: 1, Barbarian: 1 },
            C: { Wizard: 2, Ranger: 1, Warlock: 1, Sorcerer: 1 },
            D: { Bard: 2, Cleric: 1, Druid: 1 }
        }
    },
    {
        question: `7 of 12: You enter a large cavern with lit candle sconces on each wall and a large chandelier hanging in the center of the room. Directly beneath it is the evil cult you’ve been tracking. They are nearing the end of a summoning ritual to call even greater evil upon your world! You...`,
        options: {
            A: `Pull your party back! You’ll need a solid plan here.`,
            B: `Ready your weapons and rush into action`,
            C: `Drop the chandelier, crushing all enemies at once`,
            D: `Slip behind a pillar and start casting`
        },
        answers: {
            A: { Bard: 2, Druid: 1, Rogue: 1 },
            B: { Barbarian: 2, Monk: 1, Fighter: 1 },
            C: { Ranger: 2, Paladin: 1 },
            D: { Cleric: 2, Wizard: 1, Warlock: 1, Sorcerer: 1 }
        }
    },
    {
        question: `8 of 12: You and your party are relaxing at a tavern after a long day. You...`,
        options: {
            A: `Work the room! There could be some important nobles there.`,
            B: `Relax with as many ales as your constitution will allow`,
            C: `Check for valuables in the pockets of nearby patrons`,
            D: `Head for the game tables. You’re never one to turn down the challenge`
        },
        answers: {
            A: { Bard: 2, Wizard: 1, Cleric: 1 },
            B: { Sorcerer: 2, Barbarian: 1, Druid: 1, Monk: 1 },
            C: { Rogue: 2, Warlock: 1 },
            D: { Fighter: 2, Paladin: 1, Ranger: 1 }
        }
    },
    {
        question: `9 of 12: Where does your magic come from?`,
        options: {
            A: `My deity, of course`,
            B: `From the natural magical weave itself`,
            C: `It just comes to me, sometimes in surprising ways`,
            D: `Through diligent study and hard-work`
        },
        answers: {
            A: { Paladin: 2, Cleric: 2, Warlock: 2 },
            B: { Druid: 2, Monk: 1, Ranger: 1 },
            C: { Sorcerer: 2, Barbarian: 1, Fighter: 1 },
            D: { Wizard: 2, Bard: 2, Rogue: 1 }
        }
    },
    {
        question: `10 of 12: Why are you playing D&D?`,
        options: {
            A: `I need an escape from reality`,
            B: `I want to make new friends`,
            C: `I love the immersive, magical lore`,
            D: `I had nothing better to do`
        },
        answers: {
            A: { Sorcerer: 2, Paladin: 1, Cleric: 1 },
            B: { Bard: 2, Fighter: 1, Wizard: 1 },
            C: { Druid: 2, Monk: 1, Ranger: 1 },
            D: { Warlock: 2, Rogue: 1, Barbarian: 1 }
        }
    },
    {
        question: `11 of 12: How do you feel about rules?`,
        options: {
            A: `Creativity first`,
            B: `Guidelines help`,
            C: `Rules prevent chaos`,
            D: `Bend, don’t break`
        },
        answers: {
            A: { Bard: 2, Rogue: 1, Sorcerer: 1 },
            B: { Fighter: 2, Ranger: 1, Warlock: 1 },
            C: { Wizard: 2, Barbarian: 1, Cleric: 1 },
            D: { Paladin: 2, Druid: 1, Monk: 1 }
        }
    },
    {
        question: `12 of 12: How much prep will you do before gameplay?`,
        options: {
            A: `What prep?`,
            B: `Basics only`,
            C: `About an hour`,
            D: `Everything`
        },
        answers: {
            A: { Monk: 2, Rogue: 2, Barbarian: 1 },
            B: { Fighter: 2, Ranger: 1, Warlock: 1 },
            C: { Sorcerer: 2, Druid: 1, Paladin: 1 },
            D: { Wizard: 2, Cleric: 2, Bard: 2 }
        }
    }
];

// Scores
let scores = {
    Barbarian: 0, Bard: 0, Cleric: 0, Druid: 0,
    Fighter: 0, Monk: 0, Paladin: 0, Ranger: 0,
    Rogue: 0, Sorcerer: 0, Warlock: 0, Wizard: 0
};

let currentQuestionIndex = 0;

// Display Question
function displayQuestion() {
    const questionData = questions[currentQuestionIndex];
    questionsContainer.innerHTML = "";

    const questionText = document.createElement("h2");
    questionText.textContent = questionData.question;
    questionsContainer.appendChild(questionText);

    for (let key in questionData.options) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = key;

        label.appendChild(input);
        label.appendChild(document.createTextNode(` (${key}) ${questionData.options[key]}`));
        questionsContainer.appendChild(label);
        questionsContainer.appendChild(document.createElement("br"));
    }
}

// Handle Answer
function handleAnswer() {
    const selectedAnswer = document.querySelector(`input[name="answer"]:checked`);
    if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
    }

    const answerScores = questions[currentQuestionIndex].answers[selectedAnswer.value];
    for (const [cls, pts] of Object.entries(answerScores)) {
        scores[cls] += pts;
    }

    currentQuestionIndex++;
    currentQuestionIndex < questions.length ? displayQuestion() : showResult();
}

// Class Descriptions
const classDescriptions = {
    Barbarian: "Fierce, fearless, and fueled by raw power.",
    Bard: "Charismatic performers who wield magic through art.",
    Cleric: "Divine champions who heal and smite.",
    Druid: "Nature-bound shapeshifters and spellcasters.",
    Fighter: "Masters of combat and discipline.",
    Monk: "Martial artists guided by inner energy.",
    Paladin: "Holy warriors sworn to an oath.",
    Ranger: "Skilled hunters and survivalists.",
    Rogue: "Stealthy and precise opportunists.",
    Sorcerer: "Innate wielders of arcane power.",
    Warlock: "Pact-bound wielders of forbidden magic.",
    Wizard: "Scholars of the arcane."
};

// Video Links
const classVideoLinks = {
    Barbarian: "https://www.dungeonsnotdating.com/classaids/barbarian",
    Bard: "https://www.dungeonsnotdating.com/classaids/bard",
    Cleric: "https://www.dungeonsnotdating.com/classaids/cleric",
    Druid: "https://www.dungeonsnotdating.com/classaids/druid",
    Fighter: "https://www.dungeonsnotdating.com/classaids/fighter",
    Monk: "https://www.dungeonsnotdating.com/classaids/monk",
    Paladin: "https://www.dungeonsnotdating.com/classaids/paladin",
    Ranger: "https://www.dungeonsnotdating.com/classaids/ranger",
    Rogue: "https://www.dungeonsnotdating.com/classaids/rogue",
    Sorcerer: "https://www.dungeonsnotdating.com/classaids/sorcerer",
    Warlock: "https://www.dungeonsnotdating.com/classaids/warlock",
    Wizard: "https://www.dungeonsnotdating.com/classaids/wizard"
};

// Show Result
function showResult() {
    questionsContainer.innerHTML = "";
    nextbtn.style.display = "none";

    let bestClass = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
    );

    resultsContainer.style.display = "block";
    resultsContainer.innerHTML = `
        <h2>You are best suited to be a ${bestClass}!</h2>
        <p>${classDescriptions[bestClass]}</p>
        <p>
            <a href="${classVideoLinks[bestClass]}" target="_blank" rel="noopener">
                Watch videos about the ${bestClass} class
            </a>
        </p>
        <button id="retakeBtn">Retake Quiz</button>
    `;

    document.getElementById("retakeBtn").addEventListener("click", resetQuiz);
}

// Reset Quiz
function resetQuiz() {
    for (let key in scores) scores[key] = 0;
    currentQuestionIndex = 0;
    resultsContainer.style.display = "none";
    displayQuestion();
}

// Event Listener
nextbtn.addEventListener("click", handleAnswer);

