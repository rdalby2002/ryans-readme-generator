// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license = 'No license') {
    return '';
  } else if (data.license = 'Apache 2.0 License') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (data.license = 'BSD 3-Clause License') {
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
  } else if (data.license = 'BSD 2-Clause License') {
    return `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`;
  } else if (data.license = 'Boost Software License 1.0') {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  } else if (data.license = 'CC0') {
    return `![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`;
  } else if (data.license = 'Attribution 4.0 International') {
    return `![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)`;
  } else if (data.license = 'Attribution-ShareAlike 4.0 International') {
    return `![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)`;
  } else if (data.license = 'Attribution-NonCommercial 4.0 International') {
    return `![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)`;
  } else if (data.license = 'Attribution-NoDerivates 4.0 International') {
    return `![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)`;
  } else if (data.license = 'Attribution-NonCommmercial-ShareAlike 4.0 International') {
    return `![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)`;
  } else if (data.license = 'Attribution-NonCommercial-NoDerivatives 4.0 International') {
    return `![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)`;
  } else if (data.license = 'Eclipse Public License 1.0') {
    return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
  } else if (data.license = 'GNU GPL v3') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (data.license = 'GNU GPL v2') {
    return `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`;
  } else if (data.license = 'GNU AGPL v3') {
    return `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;
  } else if (data.license = 'GNU LGPL v3') {
    return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
  } else if (data.license = 'GNU FDL v1.3') {
    return `![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)`;
  } else if (data.license = 'The Hippocratic License 2.1') {
    return `![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)`;
  } else if (data.license = 'The Hippocratic License 3.0') {
    return `![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)`;
  } else if (data.license = 'IBM Public License Version 1.0') {
    return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`;
  } else if (data.license = 'ISC License (ISC)') {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  } else if (data.license = 'The MIT License') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (data.license = 'Mozilla Public License 2.0') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  } else if (data.license = 'Attribution License (BY)') {
    return `![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)`;
  } else if (data.license = 'Open Database License (ODbL)') {
    return `![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)`;
  } else if (data.license = 'Public Domain Dedication and License (PDDL)') {
    return `![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)`;
  } else if (data.license = 'The Perl License') {
    return `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)`;
  } else if (data.license = 'The Artistic License 2.0') {
    return `![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)`;
  } else if (data.license = 'SIL Open Font License 1.1') {
    return `![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)`;
  } else if (data.license = 'The Unlicense') {
    return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
  } else if (data.license = 'The Do What the F*ck You Want to Public License') {
    return `![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)`;
  } else if (data.license = 'The zlib/libpng License') {
    return `![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)`;
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license = 'No license') {
    return '';
  } else {
    return '- [License](#license)';
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license = 'No license') {
    return '';
  } else {
    return `##License

    This project is licensed under ${data.license}.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge()}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink()}
  - 
`;
}

module.exports = generateMarkdown;
