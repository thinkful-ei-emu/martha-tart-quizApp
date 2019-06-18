
class TriviaApi {

  fetchQuestions(count) {
    const BASE_URL = 'https://opentdb.com/api.php?amount=5';
    // const url = new URL(TriviaApi.BASE_URL);
    // url.searchParams.set('amount', count);
    console.log(BASE_URL);
    return fetch(BASE_URL)
      .then(res => {
        // if non-2xx response, reject promise with status text
        if (!res.ok) {
          return Promise.reject({ message: res.statusText });
        }
        // Otherwise, parse the json body
        return res.json();
      })
      .then(data => {
        // if JSON message holds code above 0, reject promise with message
        if (data.response_code !== 0) {
          return Promise.reject({ message: `API returned error code: ${data.response_code}. Try a different request.`});
        }

        // Otherwise, success! Return the data to automatically resolve the promise successfully.
        console.log(data);
        return data;
      });
  }
}

export default TriviaApi;
