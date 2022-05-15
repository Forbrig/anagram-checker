import { anagramChecker } from "./anagram-checker";

const input = [
  "rope",
  "pore",
  "repo",
  "red rum",
  "murder",
  "listen",
  "silent",
  "endeavour",
];

/*
[
  ['rope', 'pore', 'repo'],
  ['red rum', 'murder'],
  ['listen', 'silent'],
  ['endeavour'],
]
*/

const input2 = ["monk", "konm", "nkom", "bbc", "cbb", "dell", "ledl", "llde"];

/*
[
  [ 'monk', 'konm', 'nkom' ],
  [ 'bbc', 'cbb' ],
  [ 'dell', 'ledl', 'llde' ]
]
*/

console.log(anagramChecker(input2));
