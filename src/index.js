import $ from 'jquery';
import Quiz from './Quiz';
import QuizDisplay from './QuizDisplay';

function main() {
  const quiz = new Quiz();
  window.quiz = quiz;
  // adding `q` to `window`, so you can examine it in console
  const quizDisplay = new QuizDisplay(quiz, '.display');
  //const quizStatus = new quizStatus(quiz, '.status');

}

$(main);

