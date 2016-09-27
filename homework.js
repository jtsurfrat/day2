function findNum(word) {
    var newWord = word.replace(/\D/g, '');
    console.log(newWord);
    return newWord;
}
findNum("This is a sentence with 42");
findNum("hi 22");
