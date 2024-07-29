const fs = require('fs');
const inquirer = require('inquirer')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
 
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

const htmlNamedColors = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue",
    "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk",
    "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki",
    "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue",
    "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey",
    "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod",
    "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender",
    "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow",
    "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",
    "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine",
    "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",
    "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive",
    "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip",
    "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown",
    "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey",
    "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white",
    "whitesmoke", "yellow", "yellowgreen"
  ]; 

function userShapeQ(){
    return [
    {
        type: 'maxlength-input',
        name: 'text',
        message: "Let's make an svg! You can enter up to three characters of text:",
        maxLength: 3
    },
    {
        type: "input",
        message: "What color should the text be? Please give a keyword or hexcode.",
        name: "textcolor"
    },
    {
         type: "list",
         message: "What shape do you want?",
         name: "shape",
         choices: ["Circle","Triangle","Square"]
    },
    {
        type: "input",
        message: "What color should the shape be? Please give a keyword or hexcode.",
        name: "shapecolor"
    }
 ]};


// function getLicenseBadge(license) {
//     let licenseBadge;
//       if (license === "MIT License"){
//         licenseBadge = `[![Image showing badge for MIT License.](https://img.shields.io/badge/License-MIT_License-blue)](https://mit-license.org/)`
        

//           } else if (license === "Apache License 2.0"){
//             licenseBadge = `[![Image showing badge for Apache License 2.0](https://img.shields.io/badge/License-Apache_License_2.0-green)](https://www.apache.org/licenses/LICENSE-2.0)`
        
//           } else if (license === "BSD 3-Clause 'Revised'"){
//             licenseBadge = `[![Image showing badge for BSD 3-Clause 'Revised'](https://img.shields.io/badge/License-BSD_3Clause_Revised-yellow)](https://opensource.org/license/bsd-3-clause)`
        
//           } else if (license === "BSD 2-Clause 'Simplified'"){
//             licenseBadge = `[![Image showing badge for BSD 2-Clause 'Simplified'](https://img.shields.io/badge/License-BSD_2Clause_Simplified-pink)](https://opensource.org/license/bsd-2-clause)`
        
//           } else if (license === "ISC License"){
//             licenseBadge = `[![Image showing badge for ISC License](https://img.shields.io/badge/License-ISC_License-gray)](https://www.isc.org/licenses/)`
//           } else {licenseBadge = ""};
//           return licenseBadge;
//       };

async function init(){
    const questions = userShapeQ();
    const answers = await inquirer.prompt(questions);
    // answers.licenseBadge = getLicenseBadge(answers.license);
    const outputMD = svgOutput(answers);
    fs.writeFile('README.md', outputMD, (err) =>{
        if (err){
            console.error("The README could not be generated; please try again.")
        } else {
            console.log("README successfully generated from the information collected.")
        }
    })
};

init();


// function svgOutput(mdObj) {
//     const markdown = `# ${mdObj.title}
  
//     ## Table of Contents
//     - [Description](#description)
//     - [Installation](#installation)
//     - [Usage](#usage)
//     - [Contributing](#contributing)
//     - [Tests](#tests)
//     - [License](#license)
//     - [Credits](#credits)
//     - [Questions](#questions)
  
//     ## Description
//     ${mdObj.description}
  
//     ## Installation
//     ${mdObj.installation}
  
//     ## Usage
//     ${mdObj.usage}
  
//     ## Contributing
//     ${mdObj.contributing}
  
//     ## Tests
//     ${mdObj.tests}
    
//     ## Credits
//     ${mdObj.credits}
      
//     ## Questions
//     - [Check me out on Github!](https://www.github.com/${mdObj.github})
//     - [Email Me](mailto:${mdObj.email}?subject=Hello!)
  
//     ## License
//     ${mdObj.licenseBadge ? `${mdObj.licenseBadge}\n` : ''} This project is using the ${mdObj.license}. Please click the badge icon for more information, or refer directly to the LICENSE in the repo.
//   `
//   return markdown;
//   }