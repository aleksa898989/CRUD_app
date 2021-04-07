import { MDBContainer, MDBIcon } from "mdbreact";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddPost = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
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
    } catch (error) {
      console.log("!error ", error);
    }
  };

  return (
    <>
      <MDBContainer className="mt-5 text-center mb-5 add-form-wrapper">
        <Link to={"/"}>
          <MDBIcon icon="home" />
        </Link>
        <h2>Add New post</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
          />
          <input
            type="text"
            placeholder="body"
            {...register("body", { required: true })}
          />
          <input
            type="text"
            placeholder="User id"
            {...register("usedId", { required: true })}
          />

          <input type="submit" className="submit-btn" />
        </form>
      </MDBContainer>
    </>
  );
};

export default AddPost;
