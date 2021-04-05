import { MDBContainer } from "mdbreact";
import { useForm } from "react-hook-form";
const EditPost = ({ id, title, body, userId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({ data }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <>
      <MDBContainer className="mt-5 mb-5 text-center">
        <h3>Edit existing post</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            placeholder="body"
            {...register("body", { required: true, maxLength: 100 })}
          />
          <input
            type="text"
            placeholder="User id"
            {...register("userId", { required: true, maxLength: 100 })}
          />
          <input
            type="text"
            placeholder="ID"
            {...register("id", { required: true, maxLength: 80 })}
          />

          <input type="submit" />
        </form>
      </MDBContainer>
    </>
  );
};

export default EditPost;
