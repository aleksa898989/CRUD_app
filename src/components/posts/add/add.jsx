const AddPost = ({ title, body, userId }) => {
  const addPostFn = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      Headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <>
      <button onClick={addPostFn}>Add post</button>
    </>
  );
};

export default AddPost;
