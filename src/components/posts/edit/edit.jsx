import { MDBContainer, MDBIcon } from "mdbreact";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const EditPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({ data }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    } catch (error) {
      console.log("!error", error);
    }
  };

  return (
    <>
      <MDBContainer className="mt-5 mb-5 text-center edit-form-wrapper">
        <Link to={"/"}>
          <MDBIcon icon="home" />
        </Link>
        <h2>Edit existing post</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            placeholder="Body"
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

          <input type="submit" className="submit-btn" />
        </form>
      </MDBContainer>
    </>
  );
};

export default EditPost;
