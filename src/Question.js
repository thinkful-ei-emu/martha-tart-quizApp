class Question{
  text = ''; //Question text
  answers = ['', '']; //Array of strings, all possible answers for that question (each answer is unique)
  correctAnswer = '';  //string that matches one of the answers in the above array 
  userAnswer = ''; //answer provided by the user (on a click)


  submitAnswer (answer) {
    //answer string... setst the userAnswer prop (elistner in seperate file that calls this to capture the users answer)
  };
  
  answerStatus() {
    //if, if, then 

    return //integer corresponding to the state of the question (uses api response)
    //-1: unanswered, 0: answered incorrectly, 1: answered correctly
  };

}