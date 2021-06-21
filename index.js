// Following packages & files are needed for this application to work properly
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");
const inquirer = require("inquirer");

// Here are a set of prompts that require user input to complete
inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your application?:",
    },
    {
      type: "input",
      name: "descriptor",
      message: "How would you best describe your application?:",
    },
    {
      type: "input",
      name: "install",
      message: "What are the installation requirements for successful use of application?:",
    },
    {
      type: "input",
      name: "use",
      message: "What are your instructions for the user to get the desired result of your application?:",
    },
    {
      type: "input",
      name: "encourage",
      message: "List your suggestions here for those that may want to contribute to your application.:",
    },
    {
      type: "input",
      name: "practice",
      message: "What are your test builds/ideas for this application?:",
    },
    {
      type: "input",
      name: "profile",
      message: "Type in your profile name here (for example www.github.com/yourprofilenamehere):",
    },
    {
      type: "input",
      name: "contact",
      message: "Type in email address of your choosing here:",
    },
    {
      type: "checkbox",
      name: "badge",
      message: "What kind of licence would you like on the application? (if you do not want any, select none.",
      choices: ["Apache", "Boost", "BSD-2", "BSD-3", "CC", "Eclipse", "GNU", "IBM", "ISC", "MIT", "Mozilla", "PERL", "SIL", "Unlicense", "Zlib", "none"],
    },
  ])
  .then((data) => {
  // This let statement generates markdown for console.log(data)
    let readmeInput = generateMarkdown(data);
    
    fs.writeFile("README.md", readmeInput, (err) =>
      err ? console.log(err) : console.log("README.md successfully created")
    );
  });