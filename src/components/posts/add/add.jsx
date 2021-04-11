import { MDBContainer, MDBIcon } from "mdbreact";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Notification from "layout/notification";
import { Redirect } from "react-router-dom";

const AddPost = ({
  shouldRedirect,
  message,
  response,
  showNotification,
  setResponse,
  setMessage,
  setShowNotification,
  setShouldRedirect,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
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
        .then((response) => {
          setResponse(response);
          setMessage(response.status);
          setShowNotification(true);
          setTimeout(() => {
            setShouldRedirect(true);
          }, 4000);
          response.json();
        })
        .then((json) => console.log(json));
    } catch (error) {
      console.log("!error ", error);
    }
  };
  if (shouldRedirect) return <Redirect to="/" />;
  return (
    <>
      <MDBContainer className="mt-5 text-center mb-5 add-form-wrapper">
        <div className="d-flex flex-row align-items-center">
          <Link to={"/"}>
            <MDBIcon icon="home" />
          </Link>
          <Link style={{ marginLeft: "5rem" }} to={"/posts"}>
            Back to post listing
          </Link>
        </div>
        <h2>Add New post</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
          <input
            name="title"
            className={`${
              errors && errors?.title?.type === "required" ? "required" : ""
            }`}
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
          />
          {errors && errors?.title?.type === "required" && (
            <label className="required-label" htmlFor="title">
              This field is required!
            </label>
          )}
          <input
            name="body"
            type="text"
            placeholder="Body"
            className={`${
              errors && errors?.body?.type === "required" ? "required" : ""
            }`}
            {...register("body", { required: true })}
          />
          {errors && errors?.body?.type === "required" && (
            <label className="required-label" htmlFor="body">
              This field is required!{" "}
            </label>
          )}
          <input
            name="userId"
            type="number"
            placeholder="User id"
            className={`${
              errors && errors?.userId?.type === "required" ? "required" : ""
            }`}
            {...register("userId", { required: true })}
          />
          {errors && errors?.userId?.type === "required" && (
            <label htmlFor="userId" className="required-label">
              This field is required and must be number!
            </label>
          )}
          <input type="submit" className="submit-btn" />
        </form>
        {showNotification && (
          <Notification
            title={`${response.ok ? "Success!" : "Error"}`}
            message={`Server responded with status: ${message}`}
          />
        )}
      </MDBContainer>
    </>
  );
};

export default AddPost;
