class Quiz{
  unasked = [/*'question1', 'question2'*/];
  asked = [/*'question1', 'question2'*/];
  score = //integer;
  scoreHistory = [/*array of integers*/];
  active = /*true or false*/; 


  startQuiz (){
    //after hitting start button start displaying questions
    //populate unasked question with 5 questions (into the array)
    //active to true

    //call api and take data from api to populate unasked array with 5 questions
    //create 5 instances of questions calling the questions class
  };

  nextQuestion (){
    //shift a question from unasked to asked array 
    //change score value
  }



  finishedQuiz (){
    //store score into scoreHistory
    //active to false
  }


}