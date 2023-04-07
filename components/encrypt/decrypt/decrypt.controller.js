function decryptController(step, word) {
  try {
    let wordLower = word.toLowerCase();
    let finalWord = "";

    for (let n = 0; n < wordLower.length; n++) {
      let pastLetter = wordLower[n].charCodeAt(0) - step;
      if (pastLetter < 97) {
        let difference = 97 - pastLetter;
        pastLetter = 123 - difference;
      }
      finalWord = finalWord + String.fromCharCode(pastLetter);
    }
    return finalWord;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = decryptController;
