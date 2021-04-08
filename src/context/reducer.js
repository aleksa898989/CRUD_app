// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        }),
      };
    case "REMOVE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => {
          return post.id !== action.payload;
        }),
      };
    case "ADD_USER":
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case "EDIT_USER":
      const updateUser = action.payload;
      const updateUsers = state.users.map((user) => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      });
      break;
    case "EDIT_POST":
      const updatePost = action.payload;
      const updatePosts = state.posts.map((post) => {
        if (post.id === updatePost.id) {
          return updatePost;
        }
        return post;
      });
      return {
        ...state,
        users: updateUsers,
        posts: updatePosts,
      };

    default:
      return state;
  }
};
