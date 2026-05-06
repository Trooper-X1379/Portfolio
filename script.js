welcomeUser();

function welcomeUser() {
    alert("Welcome to my portfolio website!");
}

try {
    showMessage();
} catch (error) {
    console.log("Function expression cannot be called before definition");
}

const showMessage = function () {
    alert("This is a function expression");
};

document.getElementById("quizBtn").onclick = function () {
    let m1 = Number(prompt("Enter mark 1"));
    let m2 = Number(prompt("Enter mark 2"));
    let m3 = Number(prompt("Enter mark 3"));

    let total = m1 + m2 + m3;
    let avg = total / 3;

    alert("Total: " + total + "\nAverage: " + avg);
};

function collectSkills() {
    let count = Number(prompt("How many skills do you want to enter?"));
    let skills = [];

    for (let i = 0; i < count; i++) {
        let skill = prompt("Enter skill " + (i + 1));
        skills.push(skill);
    }

    alert("Skills entered:\n" + skills.join("\n"));
}

function checkGrade() {
    let score = Number(prompt("Enter your score"));
    let result = "";

    if (score >= 90) {
        result = "Excellent";
    } else if (score >= 75) {
        result = "Good";
    } else if (score >= 50) {
        result = "Average";
    } else {
        result = "Poor";
    }

    alert("Grade: " + result);
}