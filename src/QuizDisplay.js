import $ from 'jquery';
import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
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

  } 
  
  _answeredQuestion(){

  }

  _finishedQuiz(){

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
      html = this._answeredQuestion();
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

