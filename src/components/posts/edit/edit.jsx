const EditPost = ({ id, title, body, userId }) => {
  const editPostFn = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <>
      <button className="ml-5" onClick={editPostFn}>
        Submit edit
      </button>
    </>
  );
};

export default EditPost;
