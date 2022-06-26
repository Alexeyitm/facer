const store = {
  _state: {
    owner: {
      name: 'Alexey',
      lastName: 'Ponomarev',
      dayOfBirth: 19,
      monthOfBirth: 10,
      yearOfBirth: 1996,
      city: 'Magnitogorsk',
      country: 'Russia',
      education: 'Ural Federal University',
      avatar: 'https://i.postimg.cc/Dfr7KgKg/avatar.jpg',
      background: 'https://i.postimg.cc/ncnpVDFt/background.jpg',
      friends: [
        {id: 1, name: 'David', lastName: 'Kvataniya', avatar: 'https://i.postimg.cc/CMRTCgK2/david.jpg'},
        {id: 2, name: 'Dima', lastName: 'Petrov', avatar: 'https://i.postimg.cc/8z8y68FL/dima.jpg'},
        {id: 3, name: 'Vasya', lastName: 'Nesterov', avatar: 'https://i.postimg.cc/jjxBDV9Z/dimych.jpg'},
        {id: 4, name: 'Ivan', lastName: 'Ivanov', avatar: 'https://i.postimg.cc/sfNH3Gs6/ivan.jpg'},
        {id: 5, name: 'Katya', lastName: 'Fedotova', avatar: 'https://i.postimg.cc/fLgCW1nt/katya.jpg'},
        {id: 6, name: 'Kolya', lastName: 'Sugrey', avatar: 'https://i.postimg.cc/7hFN07Lq/kolya.jpg'},
        {id: 7, name: 'Nikita', lastName: 'Sobol', avatar: 'https://i.postimg.cc/yY0GnYCL/nikita.jpg'},
        {id: 8, name: 'Olya', lastName: 'Mamina', avatar: 'https://i.postimg.cc/tCnSJRgX/olya.jpg'},
        {id: 9, name: 'Petr', lastName: 'Yan', avatar: 'https://i.postimg.cc/mgR5nfbB/petr.jpg'},
        {id: 10, name: 'Petya', lastName: 'Zaytcev', avatar: 'https://i.postimg.cc/wvtfN9kc/petya.jpg'},
        {id: 11, name: 'Sasha', lastName: 'Yakovleva', avatar: 'https://i.postimg.cc/FHZB5WRc/sasha.jpg'},
        {id: 12, name: 'Vlad', lastName: 'Yashin', avatar: 'https://i.postimg.cc/BZK7QQbJ/vlad.jpg'},
      ]
    },
    pages: {
      profilePage: {
        posts: [
          {id: 1, text: 'It was a good day!', likeCount: 3},
          {id: 2, text: "What's happening?", likeCount: 6},
          {id: 3, text: 'Yeeeaaaaaaaaaaah', likeCount: 11},
          {id: 5, text: 'This is not big deal', likeCount: 1},
          {id: 6, text: 'Just look like a cat', likeCount: 23},
          {id: 7, text: 'One more important post', likeCount: 43},
          {id: 8, text: 'Important post', likeCount: 77},
          {id: 9, text: 'Yeezy-Breeze', likeCount: 19},
          {id: 10, text: 'Good mooooorning, Vietnam!', likeCount: 66},
          {id: 11, text: 'Hello, world!', likeCount: 14}
        ],
        newPostText: ''
      },
      dialogsPage: {
        users: [
          {id: 1, name: 'Petya'},
          {id: 2, name: 'Ivan'},
          {id: 3, name: 'Kolya'},
          {id: 4, name: 'Dima'},
          {id: 5, name: 'Olya'},
          {id: 6, name: 'Vlad'},
          {id: 7, name: 'Nikita'},
          {id: 8, name: 'Katya'},
          {id: 9, name: 'Sasha'},
          {id: 10, name: 'Dimych'},
          {id: 11, name: 'Petr'},
          {id: 12, name: 'David'}
        ],
        messages: [
          {id: 1, text: 'Hello'},
          {id: 2, text: 'Yes'},
          {id: 3, text: 'No'},
          {id: 4, text: 'Read'},
          {id: 5, text: 'Sleep'},
          {id: 6, text: 'Speak'},
          {id: 7, text: 'crazyyyyyy'},
          {id: 8, text: 'nothing'},
          {id: 9, text: 'whats ap'},
          {id: 10, text: 'nothing else'}
        ],
        newMessageText: ''
      }
    }
  },
  getState() {
    return this._state;
  },
  addPost() {
    const post = {id: this._state.pages.profilePage.posts.length + 2, text: this._state.pages.profilePage.newPostText, likeCount: 0}
    this._state.pages.profilePage.posts.push(post)
    this._state.pages.profilePage.newPostText='';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.pages.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    const message = {id: this._state.pages.dialogsPage.messages.length + 1, text: this._state.pages.dialogsPage.newMessageText}
    this._state.pages.dialogsPage.messages.push(message)
    this._state.pages.dialogsPage.newMessageText='';
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.pages.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  _callSubscriber() {
    console.log('State changed');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;