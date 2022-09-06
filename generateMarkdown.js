



// generateMarkdown function populating the README.md document
function generateMarkdown(data) {
  console.log (data);
    return `<h1 align="center">${data.title} </h1>
  
![badge](https://img.shields.io/badge/license-${data.license}-blue)<br />
## Description
 ${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Issues](#issues)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Github](#github)
- [Email](#email)
## Installation
 ${data.installation}
## Issues
 ${data.issues} 
## Usage
 ${data.usage}
## License
![badge](https://img.shields.io/badge/license-${data.license}-blue)
<br />
This application is covered by the ${data.license} license. 
## Contribution
 ${data.contribution}
## Tests
 ${data.tests}
##Github
 ${data.github} 
## Email
 ${data.email}<br />
<br />
Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
<br />
 Email me with any questions: ${data.email}<br /><br />
_This README was generated with ❤️ by [README.md-Generator](https://timberhead.github.io/shall-we-play-a-game-seven/)_
    `;
  }
  
  module.exports = generateMarkdown;