const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      const post = {id: state.posts.length + 2, text: state.newPostText, likeCount: 0}
      state.posts.push(post)
      state.newPostText='';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;