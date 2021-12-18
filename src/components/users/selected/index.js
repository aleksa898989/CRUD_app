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

const SelectedUser = () => {
  let id = window.location.pathname;
  let lastChar = id.substr(id.length - 1);
  const [selected, setSelected] = useState();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${lastChar}`)
      .then((res) => {
        const selected = res.data;
        setSelected({ selected });
      });
  }, []);
  let data = selected?.selected;
  return (
    <MDBContainer className="mt-5">
      <h1 className="mb-5 text-center">Users</h1>
      <div className="d-flex flex-row align-items-center">
        <Link to={"/"}>
          <MDBIcon icon="home" />
        </Link>
        <Link style={{ marginLeft: "5rem" }} to={"/users"}>
          Users listing
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
          {data?.map(({ id, userId, title, body }) => {
            return (
              <>
                <tr>
                  <td>{id}</td>
                  <td>{userId}</td>
                  <td>{title}</td>
                  <td>{body}</td>
                </tr>
              </>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
};

export default SelectedUser;
