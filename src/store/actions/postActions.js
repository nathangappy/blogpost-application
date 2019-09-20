// create post action
export const createPost = (post) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();
      await firestore.collection('posts').add({
        ...post,
        authorFirstName: 'Nathan',
        authorLastName: 'Gappy',
        createdAt: new Date()
      })
      dispatch({ type: 'CREATE_POST', post })
    } catch (error) {
      dispatch({ type: 'CREATE_POST_ERROR', error })
    }
  }
};