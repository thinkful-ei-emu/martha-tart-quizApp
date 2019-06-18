import $ from 'jquery';
import Quiz from './Quiz';
import QuizDisplay from './QuizDisplay';
import QuizStatus from './QuizStatus';
import './index.css'

function main() {
  const quiz = new Quiz();
  window.quiz = quiz;
  // adding `q` to `window`, so you can examine it in console
  const quizDisplay = new QuizDisplay(quiz, '.display');
  const quizStatus = new QuizStatus(quiz, '.status');

}

$(main);

