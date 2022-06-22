const state = {
  owner: {
    name: 'Alexey',
    lastName: 'Ponomarev',
    dayOfBirth: 19,
    monthOfBirth: 10,
    yearOfBirth: 1996,
    city: 'Magnitogorsk',
    country: 'Russia',
    education: 'Ural Federal University'
  },
  pages: {
    profilePage: {
      posts: [
        {id: 1, text: 'It was a good day!', likeCount: 3},
        {id: 2, text: "What's happening?", likeCount: 6},
        {id: 3, text: 'Yeeeaaaaaaaaaaa', likeCount: 11},
        {id: 4, text: 'Hello, world!', likeCount: 14}
      ]
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
      ]
    }
  }
}

export default state