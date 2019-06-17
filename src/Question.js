class Question{
  constructor(text, correctAnswer, wrongAnswers){
    this.text = text;
    this.correctAnswer=correctAnswer;
    wrongAnswers.push(correctAnswer);
    this.answers = wrongAnswers;
    this.userAnswer = null;
  }

  submitAnswer (answer) {
    this.userAnswer = answer;
    return this.answerStatus();
    //answer string... sets the userAnswer prop 
    //(elistner in seperate file that calls this to capture the users answer)
  }
  //submitAnswer will be called in another function(file) to display result
  
  answerStatus() {
    if (this.userAnswer === null){
      return -1;
    }
    if (this.userAnswer === this.correctAnswer){
      return 1;
    }
    else {
      return 0;
    }
    //integer corresponding to the state of the question (uses api response)
    //-1: unanswered, 0: answered incorrectly, 1: answered correctly
  }
}

export default Question;