// create post action
export const createPost = (post) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      await firestore.collection('posts').add({
        ...post,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      dispatch({ type: 'CREATE_POST', post })
    } catch (error) {
      dispatch({ type: 'CREATE_POST_ERROR', error })
    }
  }
};