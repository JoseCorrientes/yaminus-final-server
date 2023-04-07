function encryptController(step, word) {
  try {
    let wordLower = word.toLowerCase();
    let finalWord = "";
    for (let n = 0; n < wordLower.length; n++) {
      let futureLetter = parseInt(wordLower[n].charCodeAt(0)) + step;
      if (futureLetter > 122) {
        let difference = futureLetter - 122;
        futureLetter = 96 + difference;
      }
      finalWord = finalWord + String.fromCharCode(futureLetter);
    }
    return finalWord;
  } catch (e) {
    return `Error ${e}`;
  }
}

module.exports = encryptController;
