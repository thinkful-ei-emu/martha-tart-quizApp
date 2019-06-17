import TriviaApi from './TriviaApi';
import Question from './Question';

class Quiz {
  constructor() {
    this.unasked = [];
    this.asked = [];
    this.score = 0;
    this.scoreHistory = [];
    this.active = true;
  }

  startQuiz (){
    const triviaApi1 = new TriviaApi();
    //after hitting start button start displaying questions
    //populate unasked question with 5 questions (into the array)
    //active to true

    //call api and take data from api to populate unasked array with 5 questions
    //create 5 instances of questions calling the questions class
    
    const questionData = triviaApi1.getQuestions()
      .then(jsonData => {
        for (let i = 0; i < 5; i++) {
          let thisQuestion = jsonData.results[i];
          let question = new Question(thisQuestion.question, thisQuestion.correct_answer, thisQuestion.incorrect_answers);
          this.unasked.push(question);
        }
      });
      console.log(questionData);
      console.log(this.unasked);
    // results.forEach(question => {
    //   question
    // })
    
  }

  nextQuestion (){
    //shift a question from unasked to asked array 
    //change score value
  }



  finishedQuiz (){
    //store score into scoreHistory
    //active to false
  }


}

export default Quiz;