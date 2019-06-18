import Renderer from './lib/Renderer';

class QuizStatus extends Renderer {
  constructor(model, el){
    super(model, el);
  }
  template() {
    let html = '';
    console.log(this.model.active);
    // return some HTML here, utilizing `this.model`
    return `
      <div>
      Score: ${this.model.score}
      High Score: ${this.model.highScore()}
      Progress: ${this.model.activeState()}
      </div>
    `;
  }
}

export default QuizStatus;
