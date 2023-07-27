// add whatever parameters you deem necessary

// taking in two strings
// output needs to be true or false (boolean)

// we have the first string which will be the word
// the second string being the letters
// we are checking if the letters can make the word. 
// order does matter 


// example 1: 'hello' , 'hello world' = true

// filter hello world accoring to the wordStr 
// hello hello = true

// example 2: 'sing' , "string" = true

// example 3 'abc', 'abracadabra = true

// example 3 'abc', 'acb' = false 


function isSubsequence(word, letters) {

  if (word !== letters && word.length === letters.length) return false
  if (word.length > letters.length) return false;

  const wordObj = countLetters(word);
  const ltrsObj = countLetters(letters);

  console.log(wordObj)
  console.log(ltrsObj)

  for (let key in wordObj) {
	if (wordObj[key] > ltrsObj[key] || !ltrsObj[key]) return false;	  
  }

  return true;
}



function countLetters(string) {
  return string.split("").reduce((obj, letter) => {
    obj[letter] = (obj[letter] || 0) + 1;
    return obj;
  }, {});
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
console.log(isSubsequence('abcde', 'abrnjcqre')); // false (order matters)
console.log(isSubsequence("notasubstring", "banana")) // false
console.log(isSubsequence("almost", "almossssss")) // false

module.exports = { isSubsequence };
