import $ from 'jquery';
import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
  constructor(model, el) {
    super(model, el);
  }
  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
    };
  }

  _generateIntro() {
    return `
      <div>
        <p>
          Welcome to the Trivia Quiz
        </p>
        <p>
          Test your smarts and see how high you can score!
        </p>
      </div>
      <div class="buttons">
        <button class="start-quiz">Start Quiz</button>
      </div>
    `;
  }

  _activeQuestion(){
    return `
    <div>
      <h3>${this.model.getCurrentQuestion().text}</h3>
      <form>
        <input type="radio" value="${this.model.getCurrentQuestion().answers[[0]]}>${this.model.getCurrentQuestion().answers[[0]]}<br>
        <input type="radio" value="${this.model.getCurrentQuestion().answers[[1]]}>${this.model.getCurrentQuestion().answers[[1]]}<br>
        <input type="radio" value="${this.model.getCurrentQuestion().answers[[2]]}>${this.model.getCurrentQuestion().answers[[2]]}<br>
        <input type="radio" value="${this.model.getCurrentQuestion().answers[[3]]}>${this.model.getCurrentQuestion().answers[[3]]}<br>
        <button type="submit">Submit</button>
      </form>
    </div>
        `;
  } 
  
  _answeredQuestionCorrectly(){
    return `
    <div>
      <h3>${this.model.getCurrentQuestion().text}</h3>
      <p>You got it! The correct answer was:</p>
      <p>${this.model.getCurrentQuestion().correctAnswer}</p>
    </div>
    <button>Continue</button>
    `
  }

  _answeredQuestionIncorrectly(){
    return `
    <div>
      <h3>${this.model.getCurrentQuestion().text}</h3>
      <p>Sorry, that's incorrect.</p>
      <p>You answered:</p>
      <p>${this.model.getCurrentQuestion().userAnswer}</p>
      <p>The correct answer was:</p>
      <p>${this.model.getCurrentQuestion().correctAnswer}</p>
    </div>
    <button>Continue</button>
    `
  }

  _finishedQuiz(){
    return `
    <div>
      <h3>Good job!</h3>
      <p>Your final score was ${this.model.score} out of 5.</p>
      <p>That's a new high score!</p>
      <button>Play Again</button>
      `
  }

  template() {
    let html = '';
    
    if (this.model.asked.length === 0) {
      // Quiz has not started
      html = this._generateIntro();
    }
    //if asking a question display the question and answer choices 
    if (this.model.getCurrentQuestion().userAnswer === null){
      html = this._activeQuestion();
    }

    //if user answered question then display feedback
    if(this.model.getCurrentQuestion().userAnswer) {
      if (this.model.getCurrentQuestion().getAnswerStatus() === 1) {
        html = this._answeredQuestionCorrectly();
      }
      else {
        html = this._answeredQuestionIncorrectly();
      }
    }

    //if finished quiz display results  
    if (this.model.unasked.length === 0){
      html = this._finishedQuiz();
    }
    
    return html;
  }

  handleStart() {
    this.model.startNewGame();
  }
}

export default QuizDisplay;

