const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      const message = {id: state.messages.length + 1, text: state.newMessageText}
      state.messages.push(message)
      state.newMessageText='';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;