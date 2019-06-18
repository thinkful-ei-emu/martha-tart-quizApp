import $ from 'jquery';
import Quiz from './Quiz';
import QuizDisplay from './QuizDisplay';

function main() {
  const q = new Quiz();
  window.q = q;
    // adding `q` to `window`, so you can examine it in console
  const quizDisplay = new QuizDisplay();
  quizDisplay.handleStart(q, '.display');
}

$(main);

