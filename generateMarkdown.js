// This function creates a return for a license badge based on user input of said license. If no license is selected, becomes an empty string.
function renderLicenseBadge(data) {
  switch (data.badge[0]) {
    case "Apache":
      url = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      break;
    case "Boost":
      url = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]";
      break;
    case "BSD-2":
      url = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]";
      break;
    case "BSD-3":
      url = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
      break;
    case "CC":
      url = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)]";
      break;
    case "Eclipse":
      url = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]";
      break;
    case "GNU":
      url = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;
    case "IBM":
      url = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]";
      break;
    case "ISC":
      url = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
      break;
    case "MIT":
      url = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "Mozilla":
      url = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
      break;
    case "PERL":
      url = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]";
      break;
    case "SIL":
      url = "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)]";
      break;
    case "Unlicense":
      url = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
      break;
    case "Zlib":
      url = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]";
      break;
    default:
      url = "";
  }
  return url;
}

// This function creates license link from selected license badge if any.
function renderLicenseLink(data) {
  switch (data.badge[0]) {
    case "Apache":
      response = "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost":
      response = "(https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "BSD-2":
      response = "(https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "BSD-3":
      response = "(https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "CC":
      response = "(http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Eclipse":
      response = "(https://opensource.org/licenses/EPL-1.0)";
      break;
    case "GNU":
      response = "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "IBM":
      response = "(https://opensource.org/licenses/IPL-1.0)";
      break;
    case "ISC":
      response = "(https://opensource.org/licenses/ISC)";
      break;
    case "MIT":
      response = "(https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla":
      response = "(https://opensource.org/licenses/MPL-2.0)";
      break;
    case "PERL":
      response = "(https://opensource.org/licenses/Artistic-2.0)";
      break;
    case "SIL":
      response = "(https://opensource.org/licenses/OFL-1.1)";
      break;
    case "Unlicense":
      response = "(http://unlicense.org/)";
      break;
    case "Zlib":
      response = "(https://opensource.org/licenses/Zlib)";
      break;
    default:
      response = "";
  }
  return response;
}

// This function retrieves the license section of README
function renderLicenseSection(data) {
  let render = ` ${renderLicenseBadge(data)}${renderLicenseLink(data)}`;
  return render;
}

// This function generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  # Table of Contents:
  <ol>
  <li><a href="#descriptor">Descriptor</a></li>

  <li><a href="#install">Install</a></li>
  
  <li><a href="#use">Use</a></li>
  
  <li><a href="#encourage">Encourage</a></li>
  
  <li><a href="#practice">Practice</a></li>
  
  <li><a href="#questions">Questions</a></li>
  
  <li><a href="#badge">Badge</a></li>
  </ol>

  # Descriptor:
    ${data.descriptor}

  # Install:
    ${data.install}

  # Use:
    ${data.use}
  
  # Encourage:
    ${data.encourage}

  # Practice:
    ${data.practice}

  # Questions:
    For more information on this and other applications please visit: 
    www.github.com/${data.profile}
    Or for direct inquiries and comments please visit:
    ${data.contact}

  # Badge:
    ${renderLicenseSection(data)}
`;
}

module.exports = generateMarkdown;