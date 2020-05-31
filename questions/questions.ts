export const JSQuestions = [
  {
    questionText:
      "In JavaScript, which method returns a new array based on the results of running a specfied action on each element in the original array?",
    choices: [
      {
        text: "map",
        correct: true,
      },
      {
        text: "reduce",
        correct: false,
      },
      {
        text: "forEach",
        correct: false,
      },
      {
        text: "transform",
        correct: false,
      },
    ],
  },
  {
    questionText:
      "In CSS, what is the order of the box model from the inside out?",
    choices: [
      {
        text: "Content, Padding, Border, Margin",
        correct: true,
      },
      {
        text: "Content, Margin, Border, Padding",
        correct: false,
      },
      {
        text: "Content, Border, Padding, Margin",
        correct: false,
      },
      {
        text: "Padding, Content, Border, Margin",
        correct: false,
      },
    ],
  },
  {
    questionText: "Which of the following is not a type in JavaScript?",
    choices: [
      {
        text: "integer",
        correct: true,
      },
      {
        text: "number",
        correct: false,
      },
      {
        text: "string",
        correct: false,
      },
      {
        text: "boolean",
        correct: false,
      },
    ],
  },
  {
    questionText: "Which unit in CSS is based on the size of the screen width?",
    choices: [
      {
        text: "vx",
        correct: false,
      },
      {
        text: "sw",
        correct: false,
      },
      {
        text: "vw",
        correct: true,
      },
      {
        text: "%",
        correct: false,
      },
    ],
  },
  {
    questionText: "In Node.js, how do you import a module using CommonJS?",
    choices: [
      {
        text: "const t = include('f')",
        correct: false,
      },
      {
        text: "const t = require('f')",
        correct: true,
      },
      {
        text: "const t = import('f')",
        correct: false,
      },
      {
        text: "import t from 'f'",
        correct: false,
      },
    ],
  },
  {
    questionText: "In what order are margin and padding defined in CSS",
    choices: [
      {
        text: "Top, Right, Bottom, Left",
        correct: true,
      },
      {
        text: "Right, Bottom, Left, Top",
        correct: false,
      },
      {
        text: "Top, Bottom, Left, Right",
        correct: false,
      },
      {
        text: "Left, Right, Top, Bottom",
        correct: false,
      },
    ],
  },
  {
    questionText:
      "Which of the following is invalid JavaScript for importing from a module?",
    choices: [
      {
        text: "import * as n2, { t } from './f.js'",
        correct: false,
      },
      {
        text: "import n, { t as t2 } from './f.js'",
        correct: false,
      },
      {
        text: "import n, { t } from './f.js'",
        correct: false,
      },
      {
        text: "import {default as n2, t} from './f.js'",
        correct: true,
      },
    ],
  },
  {
    questionText: "What is the result of 100 / 0 in JavaScript?",
    choices: [
      {
        text: "NaN",
        correct: false,
      },
      {
        text: "0",
        correct: false,
      },
      {
        text: "it throws an error",
        correct: false,
      },
      {
        text: "Infinity",
        correct: true,
      },
    ],
  },
  {
    questionText:
      "What is the correct way for checking the variable x if its of type NaN in JavaScript?",
    choices: [
      {
        text: "isNaN(x)",
        correct: true,
      },
      {
        text: "x == NaN",
        correct: false,
      },
      {
        text: "x === NaN",
        correct: false,
      },
      {
        text: "isNumber(x)",
        correct: false,
      },
    ],
  },
  {
    questionText:
      "What is the correct way for checking the variable x exists and has a value of '5'?",
    choices: [
      {
        text: "typoef x !== 'undefined' && x === '5'",
        correct: true,
      },
      {
        text: "x !== null && x !== undefined && x === '5'",
        correct: false,
      },
      {
        text: "typeof x !== null && typeof x !== undefined && x === '5'",
        correct: false,
      },
      {
        text: "x !== undefiend && x !== null && x === '5'",
        correct: false,
      },
    ],
  },
  {
    questionText: "Which of the following is false?",
    choices: [
      {
        text: "'' == false",
        correct: false,
      },
      {
        text: "NaN == NaN",
        correct: true,
      },
      {
        text: "false === false",
        correct: false,
      },
      {
        text: "null == undefined",
        correct: false,
      },
    ],
  },
  {
    questionText: "How do you name a grid line in CSS?",
    choices: [
      {
        text: "grid-template-columns: 1fr [name]",
        correct: true,
      },
      {
        text: "grid-template-columns: 1fr <name>",
        correct: true,
      },
      {
        text: "grid-template-columns: 1fr (name)",
        correct: false,
      },
      {
        text: "grid-template-columns: [1fr], [name]",
        correct: false,
      },
    ],
  },
  {
    hasCode: true,
    questionText: `
    What does this function return when you pass in 2?
    `,
    codeText: `function f(x) {
        x++;
        (x = x - 3) && ++x;
        return x--;
    }`,
    choices: [
      {
        text: "1",
        correct: false,
      },
      {
        text: "2",
        correct: false,
      },
      {
        text: "0",
        correct: true,
      },
      {
        text: "-1",
        correct: false,
      },
    ],
  },
].map((question, index) => {
  shuffle(question.choices);
  return {
    id: index,
    ...question,
  };
});

function shuffle(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
