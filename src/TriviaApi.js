class TriviaApi {
  constructor() {
    this.useless = null;
  }
  //only want to get results.question, results.correct_answer, and results.incorrect_answers
  getQuestions() {
    return fetch('https://opentdb.com/api.php?amount=5')
      .then(res => res.json());
  }
}

export default TriviaApi;