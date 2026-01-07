const questionsContainer = document.getElementById("questionsContainer");
const nextbtn = document.getElementById("nextbtn");
const resultsContainer = document.getElementById("resultsContainer");
const startbtn = document.getElementById("startbtn");

startbtn.addEventListener("click", function () {
    startbtn.style.display = "none";
    nextbtn.style.display = "block";
    displayQuestion();
});

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
            A: `Pray to your Diety for assistance`,
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
            B: `ready your weapons and rush into action, attacking the closest cultist`,
            C: `Look for a way to drop the chandelier, crushing all enemies at once`,
            D: `Already know the perfect spell so you slip behind a pillar and start casting`
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
        question: `9 of 12: Where does your magical ability come from?`,
        options: {
            A: `My Deity, of course`,
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
            B: `I just want to make new friends`,
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
        question: `11 of 12: Do you like to learn and follow rules?`,
        options: {
            A: `Rules are a barrier to creativity`,
            B: `Rules are great guidelines to get things going`,
            C: `Without the ruleset, things would quickly slip into chaos`,
            D: `Rules can be bent but never broken`
        },
        answers: {
            A: { Bard: 2, Rogue: 1, Sorcerer: 1 },
            B: { Fighter: 2, Ranger: 1, Warlock: 1 },
            C: { Wizard: 2, Barbarian: 1, Cleric: 1 },
            D: { Paladin: 2, Druid: 1, Monk: 1 }
        }
    },
    {
        question: `12 of 12: How long will you spend prepping for gameplay?`,
        options: {
            A: `I need to prep?`,
            B: `I’ll make sure I understand my character sheet and have dice.`,
            C: `About an hour`,
            D: `However long it takes to understand all my actions, items, spells, etc.`
        },
        answers: {
            A: { Monk: 2, Rogue: 2, Barbarian: 1 },
            B: { Fighter: 2, Ranger: 1, Warlock: 1 },
            C: { Sorcerer: 2, Druid: 1, Paladin: 1 },
            D: { Wizard: 2, Cleric: 2, Bard: 2 }
        }
    },
];

// Answer Handling

let scores = {
    Barbarian: 0, Bard: 0, Cleric: 0, Druid: 0, Fighter: 0, Monk: 0, Paladin: 0, Ranger: 0, Rogue: 0, Sorcerer: 0, Warlock: 0, Wizard: 0
};

let currentQuestionIndex = 0;

// Show questions

function displayQuestion() {
    console.log("Displaying question", currentQuestionIndex);
    const questionData = questions[currentQuestionIndex];

    questionsContainer.innerHTML = "";

    const questionText = document.createElement("h2");
    questionText.textContent = questionData.question;
    questionsContainer.appendChild(questionText);

    for (let key in questionData.options) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = `radio`;
        input.name = `answer`;
        input.value = key;

        label.appendChild(input);
        label.appendChild(document.createTextNode(`(${key}) ${questionData.options[key]}`));
        questionsContainer.appendChild(label);
        questionsContainer.appendChild(document.createElement("br"));
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
const classDescriptions = {
    Barbarian: "Fierce, fearless, and fueled by raw power, Barbarians charge headfirst into danger. You thrive on adrenaline, instinct, and unbreakable determination.",
    Bard: "A charismatic performer and jack-of-all-trades, Bards wield music and magic with style. You inspire allies, confuse foes, and charm your way through any situation.",
    Cleric: "Devoted to a higher power, Clerics blend divine magic with battlefield presence. You heal, protect, and smite evil—all in service of your deity.",
    Druid: "Attuned to the natural world, Druids wield primal magic and shape-shifting abilities. You balance wisdom with wild instinct.",
    Fighter: "Disciplined, skilled, and versatile, Fighters excel in any combat scenario. You rely on precision, technique, and strategy.",
    Monk: "Masters of discipline and martial arts, Monks channel inner energy (ki) to move with grace and strike with power.",
    Paladin: "A sworn oath guides you as you combine divine power with martial strength. You are a protector, judge, and beacon of hope.",
    Ranger: "Quiet, perceptive, and deadly at range, Rangers thrive in exploration and survival. You track your foes and strike from afar.",
    Rogue: "Quick-thinking and cunning, Rogues excel in stealth, trickery, and precision. You know how to strike where it counts.",
    Sorcerer: "Magic flows through your veins, wild and instinctual. Sorcerers wield raw arcane power fueled by emotion and innate talent.",
    Warlock: "Warlocks draw power from a mysterious patron. Resourceful and bold, you unlock forbidden magic in exchange for a pact.",
    Wizard: "The ultimate scholars of the arcane, Wizards study tirelessly to master magic. You rely on intellect, planning, and unmatched spell versatility."
};

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
    Sorceror: "https://www.dungeonsnotdating.com/classaids/sorcerer",
    Warlock: "https://www.dungeonsnotdating.com/classaids/warlock",
    Wizard: "https://www.dungeonsnotdating.com/classaids/wizard"
};

// Show Results

function showResult() {
    questionsContainer.innerHTML = "";
    nextbtn.style.display = "none";

    let highestScore = 0;
    let bestClass = "";

    for (const [className, score] of Object.entries(scores)) {
        if (score > highestScore) {
            highestScore = score;
            bestClass = className;
        }
    }

    if (!bestClass) {
        resultsContainer.innerHTML = `<h2>Something went wrong. Please try again.</h2>`;
        return;
    }

    const description = classDescriptions[bestClass] || "";

    resultsContainer.style.display = "block";
    resultsContainer.innerHTML = `
        <h2>You are best suited to be a ${bestClass}!</h2>
        <p>${description}</p>
    `;
}
const videoLink = classVideoLinks[bestClass];

resultsContainer.innerHTML = `
    <h2>You are best suited to be a ${bestClass}!</h2>
    <p>
        <a href="${videoLink}" target="_blank" rel="noopener">
            Watch videos about the ${bestClass} class
        </a>
    </p>
    <button id="retakeBtn">Retake Quiz</button>
`;


scores = {
    Barbarian: 0, Bard: 0, Cleric: 0, Druid: 0, Fighter: 0, Monk: 0, Paladin: 0, Ranger: 0, Rogue: 0, Sorcerer: 0, Warlock: 0, Wizard: 0

};

currentQuestionIndex = 0;

resultsContainer.style.display = "block";
resultsContainer.innerHTML = `
    <h2>You are best suited to be a ${bestClass}!</h2>
    <button id="retakeBtn">Retake Quiz</button>
`;

document.getElementById("retakeBtn").addEventListener("click", resetQuiz);

// Reset Quiz
function resetQuiz() {
    // Reset scores
    for (let key in scores) {
        scores[key] = 0;
    }

    // Reset question index
    currentQuestionIndex = 0;

    // Reset UI
    resultsContainer.style.display = "none";
    resultsContainer.innerHTML = "";
    startbtn.style.display = "none";
    nextbtn.style.display = "block";

    displayQuestion();
}

// Event Listener
nextbtn.addEventListener("click", handleAnswer);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("userForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const userName = document.getElementById("name").value;

        const message = document.createElement("p");
        message.textContent = `Thank you for subscribing, ${userName}!`
        message.style.fontWeight = `bold`;
        message.style.color = `green`;
        message.style.marginTop = `10px`;

        const form = document.getElementById("userForm");
        form.replaceWith(message);
    });
});
