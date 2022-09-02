// [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4)

// [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

// [Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide)


const inquier = require("inquier");
const fs = requier("fs");
const gerenatorMarkdown = require("./utils/geratorMarkdown.js");
console.log("Welcome to the coolest README generator");
console.log("Answer the following questions to generate a super high quality README for your project");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project",
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log("enter the title to continue");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "description",
        message: "What is the description of your project",
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log("enter the description to continue");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "installation",
        message: "How do you install your project",
        validate: your_installation => {
            if (your_installation) {
                return true;
            } else {
                console.log("enter the steps of the installatiion to continue");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "issues",
        message: "Are there issues to report for your project",
        validate: your_issues => {
            if (your_issues) {
                return true;
            } else {
                console.log("enter any issues to report to continue");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "usage",
        message: "How do you use your project",
        validate: your_usage => {
            if (your_usage) {
                return true;
            } else {
                console.log("enter the information for how to use your project to continue");
                return false;
            }
        }
    },

    {
        type: "checkbox",
        name: "license",
        message: "Choose the license that best fits your project",
        choices: ["MPL 2.0", "GNU", "Apache", "MIT", "None of the above"],
        validate: your_license => {
            if (your_license) {
                return true;
            } else {
                console.log("select a license for your project to continue");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "contribution",
        message: "How can users contribute to your project",
        validate: your_contribution => {
            if (your_contribution) {
                return true;
            } else {
                console.log("provide information for how to contribute to your project to continue");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "test",
        message: "How does the user test your project",
        validate: your_test => {
            if (your_test) {
                return true;
            } else {
                console.log("explain how to test your project to continue");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "github",
        message: "enter your github username (Required) for your project",
        validate: github_Input => {
            if (github_Input) {
                return true;
            } else {
                console.log("enter your github username to continue");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "email",
        message: "enter your email for users with questions about your README generator",
        validate: email_Input => {
            if (email_Input) {
                return true;
            } else {
                console.log("enter your email to continue");
                return false;
            }
        }
    },
   
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Nice Work!! You can preview your new README.md file");
    });
};

function init() {
    inquirer.prompt(question)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

init();