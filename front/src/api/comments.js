const commentsData = {
  1: [{ id: 1, author: 'User1', content: 'Great post!', date: '2023-10-07' }],
  2: [],
  3: [],
  4: [],
  5: [],
  6: []
};

export const getCommentsByPostId = (postId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(postId, commentsData[postId]);
      resolve(commentsData[postId] || []);
    }, 100);
  });
};

export const addCommentToPost = (postId, comment) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!commentsData[postId]) {
        commentsData[postId] = [];
      }
      //commentsData[postId].push(comment);
      console.log(comment);
      resolve(comment);
    }, 100);
  });
};