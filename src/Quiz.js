import Question from './Question';
import TriviaApi from './TriviaApi';
import Model from './lib/Model';

class Quiz extends Model  {
  static DEFAULT_QUIZ_LENGTH = 5; 
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
    
  }

  // Example method:
  startGame() {
    this.unasked = [];
    this.asked = [];
    this.active = false;
    this.score = 0;

    const triviaApi = new TriviaApi();
    triviaApi.fetchQuestions(5)
      .then(data => {
        data.results.forEach(questionData => {
          console.log('weve gotten questions')
          this.unasked.push(new Question(questionData));
          this.nextQuestion();
          this.active = true;
          console.log(this.active);
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
    this.update();

    return true;
  }

  increaseScore() {
    this.score++; 
    this.update();   
  }

  answerCurrentQuestion(answerText) {
    console.log('weve answered a question!');
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
    this.update();
    return true;
  }
}

export default Quiz;