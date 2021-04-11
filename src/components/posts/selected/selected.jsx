import { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import { Link } from "react-router-dom";

const SelectedPost = () => {
  const [selected, setSelected] = useState();
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com${window.location.pathname}/comments`
      )
      .then((res) => {
        const selected = res.data;
        setSelected({ selected });
      });
  }, []);
  let data = selected?.selected;
  return (
    <>
      <MDBContainer className="mt-5">
        <div className="d-flex flex-row align-items-center">
          <Link to={"/"}>
            <MDBIcon icon="home" />
          </Link>
          <Link style={{ marginLeft: "5rem" }} to={"/posts"}>
            Posts listing
          </Link>
        </div>
        <MDBTable>
          <MDBTableHead color="primary-color" textWhite>
            <tr>
              <th>Post ID</th>
              <th>ID</th>
              <th>Email</th>
              <th>Name</th>
              <th>Comment</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data?.map(({ postId, id, email, name, body }) => {
              return (
                <>
                  <tr>
                    <td>{postId}</td>
                    <td>{id}</td>
                    <td>{email}</td>
                    <td>{name}</td>
                    <td>{body}</td>
                  </tr>
                </>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </>
  );
};

export default SelectedPost;
