import { MDBContainer, MDBIcon } from "mdbreact";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Notification from "layout/notification";
import { Redirect } from "react-router-dom";

const EditPost = ({
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
      fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
        method: "PUT",
        body: JSON.stringify({ data }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          setResponse(response);
          setMessage(response.status);
          setShowNotification(true);
          if (response.ok) {
            setTimeout(() => {
              setShouldRedirect(true);
            }, 4000);
          }
          response.json();
        })
        .then((json) => console.log(json));
    } catch (error) {
      console.log(error);
      console.log("!error", error);
    }
  };

  if (shouldRedirect) return <Redirect to="/" />;
  return (
    <>
      <MDBContainer className="mt-5 mb-5 text-center edit-form-wrapper">
        <div className="d-flex flex-row align-items-center">
          <Link to={"/"}>
            <MDBIcon icon="home" />
          </Link>
          <Link style={{ marginLeft: "5rem" }} to={"/posts"}>
            Posts listing
          </Link>
        </div>
        <h2>Edit existing post</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true, maxLength: 80 })}
            className={`${
              errors && errors?.title?.type === "required" ? "required" : ""
            }`}
          />
          {errors && errors?.title?.type === "required" && (
            <label className="required-label" htmlFor="title">
              This field is required!
            </label>
          )}
          <input
            type="text"
            placeholder="Body"
            className={`${
              errors && errors?.body?.type === "required" ? "required" : ""
            }`}
            {...register("body", { required: true, maxLength: 100 })}
          />
          {errors && errors?.body?.type === "required" && (
            <label className="required-label" htmlFor="body">
              This field is required!{" "}
            </label>
          )}
          <input
            type="number"
            placeholder="User id"
            className={`${
              errors && errors?.userId?.type === "required" ? "required" : ""
            }`}
            {...register("userId", { required: true, maxLength: 100 })}
          />
          {errors && errors?.userId?.type === "required" && (
            <label htmlFor="userId" className="required-label">
              This field is required and must be number!
            </label>
          )}
          <input
            type="number"
            placeholder="Post id"
            {...register("id", { required: true, maxLength: 80 })}
            className={`${
              errors && errors?.id?.type === "required" ? "required" : ""
            }`}
          />
          {errors && errors?.id?.type === "required" && (
            <label htmlFor="id" className="required-label">
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

export default EditPost;
