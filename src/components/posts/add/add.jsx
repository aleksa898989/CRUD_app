import { MDBContainer } from "mdbreact";
import { useForm } from "react-hook-form";

const AddPost = ({ title, body, userId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        data,
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
      <MDBContainer className="mt-5 text-center mb-5">
        <h2>Add New post</h2>
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
            {...register("usedId", { required: true, maxLength: 100 })}
          />

          <input type="submit" />
        </form>
      </MDBContainer>
    </>
  );
};

export default AddPost;
