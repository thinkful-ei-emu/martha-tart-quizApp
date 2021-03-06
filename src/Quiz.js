import Question from './Question';
import TriviaApi from './TriviaApi';
import Model from './lib/Model';

class Quiz extends Model  {
  static QUIZ_LENGTH = 5; 
  static NUMBER_RIGHT = 0;
  constructor() {
    super();

    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.asked = [];
    this.active = false;

    // TASK: Add more props here per the exercise
    this.score = 0;
    this.scoreHistory = [];
    
    this.isHighScore = false;
    
  }

  finishQuiz(){
    if (this.score > this.highScore()){
      this.isHighScore = true;
    }
    this.scoreHistory.push(this.score);
    this.active = false;
  }

  highScore(){
    let highScore = 0;
    if (this.scoreHistory.length === 0){
      return highScore;
    }else {
    highScore = Math.max(...this.scoreHistory);
    return highScore;
    }
  }

  activeState(){
    if (this.active === false){
      return 'Inactive';
    }else {
      return `${this.asked.length} of ${this.QUIZ_LENGTH}`;
    }
  }

  // Example method:
  startGame(length) {
    this.unasked = [];
    this.asked = [];
    this.active = false;
    this.score = 0;
    this.isHighScore = false;
    if (length) {
      this.QUIZ_LENGTH = length;
    }
    this.NUMBER_RIGHT = 0;

    const triviaApi = new TriviaApi();
    triviaApi.fetchQuestions(this.QUIZ_LENGTH)
      .then(data => {
        data.results.forEach(questionData => {
          this.unasked.push(new Question(questionData));
          this.nextQuestion();
          this.active = true;
          this.update();
        });
      })
      .catch(err => console.log(err.message));

  }

  getCurrentQuestion() {
    return this.asked[0];
  }

  nextQuestion() {
    const currentQ = this.getCurrentQuestion();
    //first question
    if (currentQ && currentQ.getAnswerStatus() === -1) {
      return false;
    }

    this.asked.unshift(this.unasked.pop());

    let quizLength = Number(this.QUIZ_LENGTH)
    let length = this.asked.length;
    if(this.asked.length == quizLength+1){
      this.finishQuiz();
    }

    this.update();
    return true;
  }

  increaseScore() {
    this.NUMBER_RIGHT ++;
    this.update();   
  }

  answerCurrentQuestion(answerText) {
    const currentQ = this.getCurrentQuestion();
    // Cannot find current question, so fail to answer
    if (!currentQ) return false;
    // Current question has already been answered, so refuse to submit new answer    
    if (currentQ.getAnswerStatus() !== -1) return false;

    // Otherwise, submit the answer
    currentQ.submitAnswer(answerText);

    // If correct, increase score
    if (currentQ.getAnswerStatus() === 1) {
      this.increaseScore();
    
    }
    this.score = Math.ceil((this.NUMBER_RIGHT/this.asked.length)*100);
    this.update();
    return true;
  }
}

export default Quiz;