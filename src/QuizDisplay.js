import $ from 'jquery';
import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
  constructor(model, el) {
    super(model, el);
    this.isAnswering = null;
  }

  //event handlers
  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
      'submit .question-form': 'handleSubmitAnswer',
      'click .next-question': 'handleNextQuestion'
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
      <form class="question-form">
      <div class="answers">
        <input type="radio" name="answer" value="${this.model.getCurrentQuestion().answers[[0]]}" required>${this.model.getCurrentQuestion().answers[[0]]}<br>
        <input type="radio" name="answer" value="${this.model.getCurrentQuestion().answers[[1]]}" >${this.model.getCurrentQuestion().answers[[1]]}<br>
        <input type="radio" name="answer" value="${this.model.getCurrentQuestion().answers[[2]]}">${this.model.getCurrentQuestion().answers[[2]]}<br>
        <input type="radio" name="answer" value="${this.model.getCurrentQuestion().answers[[3]]}">${this.model.getCurrentQuestion().answers[[3]]}<br>
        <div class="buttons">
        <button class="submit-question" type="submit">Submit</button>
        </div>
        </div>
        </form>
    </div>
        `;
  } 
  
  _answeredQuestionCorrectly(){
    return `
    <div>
      <h3>${this.model.getCurrentQuestion().text}</h3>
      <p>You got it! The correct answer was:</p>
      <p class="right">${this.model.getCurrentQuestion().correctAnswer}</p>
    </div>
    <div class="buttons">
    <button class="next-question">Continue</button>
    </div>
    `;
  }

  _answeredQuestionIncorrectly(){
    return `
    <div>
      <h3>${this.model.getCurrentQuestion().text}</h3>
      <p>Sorry, that's incorrect.</p>
      <p>You answered:</p>
      <p class="wrong">${this.model.getCurrentQuestion().userAnswer}</p>
      <p>The correct answer was:</p>
      <p class="right">${this.model.getCurrentQuestion().correctAnswer}</p>
    </div>
    <div class="buttons">
    <button class="next-question">Continue</button>
    </div>
    `;
  }

  _finishedQuiz(){
    if(this.model.isHighScore){
      return `
    <div>
      <h3>Good job!</h3>
      <p>Your final score was ${this.model.score} out of 5.</p>
      <p>That's a new high score!</p>
      <div class="buttons">
      <button class="start-quiz" >Play Again</button>
      </div>
      `;
    }else {
      return `
      <div>
        <h3>Good job!</h3>
        <p>Your final score was ${this.model.score} out of 5.</p>
        <div class="buttons">
        <button class="start-quiz" >Play Again</button>
        </div>
        `;
    }
  }

  template() {
    let html = '';
    
    if (this.model.asked.length === 0) {
      // Quiz has not started
      html = this._generateIntro();
    }
    //if asking a question display the question and answer choices

    else if (this.model.getCurrentQuestion()) {
      if (this.model.getCurrentQuestion().userAnswer === null){
        html = this._activeQuestion();
      }

      //if user answered question then display feedback
      else if(this.model.getCurrentQuestion().userAnswer) {

        if (this.model.getCurrentQuestion().getAnswerStatus() === 1) {
          html = this._answeredQuestionCorrectly();
        }
        else {
          html = this._answeredQuestionIncorrectly();
        }
      }
    }

    //if finished quiz display results  
    else if (this.model.unasked.length === 0){
      html = this._finishedQuiz();
    }
    
    return html;
  }

  handleStart() {
    this.model.startGame();
  }

  handleNextQuestion(){
    this.model.nextQuestion();
  }

  handleSubmitAnswer(event){
    event.preventDefault();
    let answerChoice = $(`input[name='answer']:checked`).val();
    this.model.answerCurrentQuestion(answerChoice);
  }
}

export default QuizDisplay;

