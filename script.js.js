const fs = require('fs');
const animalsTextFile = fs.readFileSync("animals.txt", "utf8");
const animal = animalsTextFile.split("\n");
const verbsTextFile = fs.readFileSync("regular verbs.txt", "utf8");
const verb = verbsTextFile.split("\n");
const adjectivesTextFile = fs.readFileSync("adjectives.txt", "utf8");
const adjective = adjectivesTextFile.split("\n");
const nounsTextFile = fs.readFileSync("nouns.txt", "utf8");
const noun = nounsTextFile.split("\n");
const conjunctions = ['and', 'but', 'or', 'yet'];
const randomItem = (arr) => {
    let item = arr[Math.floor(Math.random()*arr.length)];
    return item;
}
const randomSentence = ['The', randomItem(animal), randomItem(animal), randomItem(verb) + 's', 'the', 
randomItem(adjective), randomItem(noun), randomItem(conjunctions), 'it', randomItem(verb) + 's', 'the', randomItem(adjective), 
randomItem(noun)]
console.log(randomSentence.join(' ') + '.');
// to come: html file