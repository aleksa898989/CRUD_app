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
      .get(`https://jsonplaceholder.typicode.com${window.location.pathname}`)
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
            Back to post listing
          </Link>
        </div>
        <MDBTable>
          <MDBTableHead color="primary-color" textWhite>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Comment</th>
            </tr>
          </MDBTableHead>

          <MDBTableBody>
            <tr>
              <td>{data?.id}</td>
              <td>{data?.userId}</td>
              <td>{data?.title}</td>
              <td>{data?.body}</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </>
  );
};

export default SelectedPost;
