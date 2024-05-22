#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1. How do you install TypeScript locally to a project?",
        choices: ["npm install -g", "npm install typescript", "npm typescript install", "npm install typescript -g"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2. Which npm package manager command is used to initialize a new package.json file?",
        choices: ["npm init", "npm create", "npm new", "npm generate"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3. What is a README file in a GitHub repository?",
        choices: ["A file containing instructions for using the code", "A file containing the code itself", "A file containing comments about the code", "A file containing images and screenshots"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4. Which feature is not present in both JavaScript and TypeScript?",
        choices: ["Static typing", "Dynamic typing", "Interfaces", "Classes"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5. What does the cd command do in the command prompt?",
        choices: ["Creates a new directory", "Deletes a file Changes", "Changes the current directory", "Copies files"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "npm install typescript":
        console.log("1.Correct!");
        ++score;
        break;
    default:
        console.log("1.Incorrect");
}
switch (quiz.question_2) {
    case "npm init":
        console.log("2.Correct!");
        ++score;
        break;
    default:
        console.log("2.Incorrect");
}
switch (quiz.question_3) {
    case "A file containing instructions for using the code":
        console.log("3.Correct!");
        ++score;
        break;
    default:
        console.log("3.Incorrect");
}
switch (quiz.question_4) {
    case "Static typing":
        console.log("4.Correct!");
        ++score;
        break;
    default:
        console.log("4.Incorrect");
}
switch (quiz.question_5) {
    case "Changes the current directory":
        console.log("5.Correct!");
        ++score;
        break;
    default:
        console.log("5.Incorrect");
}
console.log(`score: ${score}`);
