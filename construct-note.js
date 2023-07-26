// add whatever parameters you deem necessary

// ensure we can create the msg from the given letters
// what that means is we need to se if the letters in the ltrs string
// could make the same message as the message string

// my initial thoughts are counting the letters within each string
//after we have acheived a count of each letter i assume ill need to
// somehow check the values against each other maybe something
// like check if msg has a count of this letter and so forth
// could accpmplish this by check key values and ensuring
// value is greater than or equal to the value

// we are gonna have to make sure that we return true or false
// depending whether the letters string could construct the message
// string or not

// here are some good examples i can think of starting with
// example 1: msg = "run" letters = "grunt" return true
// example 2: msg = "fan" letters = "antman" return false
// example 3: msg = "go" letters = "" return false

function constructNote(msg, ltrs) {
  if (ltrs.length < msg.length) return false;

  const msgObj = countLetters(msg);
  const ltrsObj = countLetters(ltrs);

  for (let key in msgObj) if (msgObj[key] > ltrsObj[key]) return false;

  return true;
}

function countLetters(string) {
  let obj = {};
  for (let ltrs of string) !obj[ltrs] ? (obj[ltrs] = 1) : (obj[ltrs] += 1);
  return obj;
}

module.exports = { constructNote };
