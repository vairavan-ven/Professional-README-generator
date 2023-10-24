// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
      'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      'Apache 2.0': '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
      'GPL 3.0': '![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)',
      'None': ''
  };
  return licenseBadges[license] || '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://opensource.org/licenses/GPL-3.0',
    'None': ''
};
return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license !== 'None') {
    return `
## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license. ${renderLicenseBadge(license)}
`;
}
return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}

  ## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can reach out to me via GitHub or email:
- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.email}

`;
}

module.exports = generateMarkdown;
