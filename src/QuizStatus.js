import Renderer from './lib/Renderer';

class QuizStatus extends Renderer {
  constructor(model, el){
    super(model, el);
  }
  template() {
    let html = '';
    // return some HTML here, utilizing `this.model`
    return `
      <div>
      <span class="score">Score: ${this.model.score}</span>
      <span class="high-score">High Score: ${this.model.highScore()}</span>
      <span class="progress">Progress: ${this.model.activeState()}</span>
      </div>
    `;
  }
}

export default QuizStatus;
