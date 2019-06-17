class Question{
  constructor(text, correctAnswer, wrongAnswers){
    this.text = text;
    this.correctAnswer=correctAnswer;
    wrongAnswers.push(correctAnswer);
    this.answers = wrongAnswers;
    this.userAnswer = null;
  }



  submitAnswer (answer) {
    //answer string... setst the userAnswer prop (elistner in seperate file that calls this to capture the users answer)
  };
  
  answerStatus() {
    //if, if, then 

    return //integer corresponding to the state of the question (uses api response)
    //-1: unanswered, 0: answered incorrectly, 1: answered correctly
  };

}

export default Question;