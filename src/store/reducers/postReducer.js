const initState = {
  posts: [
    { id: '1', 'title': 'marner needs to sign', 'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusamus?' },
    { id: '2', 'title': 'auston is the captain', 'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusamus?' },
    { id: '3', 'title': 'leafs will win the cup', 'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusamus?' }
  ]
}

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      console.log('created post', action.post)
  }
  return state
}

export default postReducer

