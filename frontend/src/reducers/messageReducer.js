import { handleActions } from 'redux-actions';

const InitialState = {
    // mock-up data
    messages : [
        {
          "id": 55747,
          "handle": "Kaitlyn.Barton32",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marclgonzales/128.jpg",
          "timestamp": "2019-01-02T05:07:54.048Z",
          "source": "Twitter",
          "content": "Delectus facilis nisi consequatur numquam consequatur temporibus minima. Quaerat et id et asperiores alias inventore repellat qui. Laudantium at ut temporibus. Architecto delectus modi consequatur. Velit labore fuga iusto.",
          "score": 26,
          "meta": {
            "isStarred": false,
            "isTrashed": false
          }
        },
        {
          "id": 55070,
          "handle": "Jamar89",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/Stievius/128.jpg",
          "timestamp": "2018-04-03T06:40:56.003Z",
          "source": "Twitter",
          "content": "Quia ut molestiae ipsum. Impedit deleniti rerum doloribus. At repellat adipisci delectus neque distinctio iusto nulla. Occaecati sed quam dolorum. Aut ut quibusdam sunt. Magni velit ut repellat voluptatem.",
          "score": 61,
          "meta": {
            "isStarred": true,
            "isTrashed": false
          }
        }
      ]
}
export default handleActions({}, InitialState)
  