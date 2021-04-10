import { MDBContainer, MDBIcon } from "mdbreact";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import Notification from "layout/notification";

const AddPost = () => {
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
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
          response.json();
        })
        .then((json) => console.log(json));
    } catch (error) {
      console.log("!error ", error);
    }
  };
  console.log(errors);
  return (
    <>
      <MDBContainer className="mt-5 text-center mb-5 add-form-wrapper">
        <Link to={"/"}>
          <MDBIcon icon="home" />
        </Link>
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
            placeholder="body"
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
          {console.log(errors)}
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
