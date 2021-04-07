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
    <>
      <MDBContainer className="mt-5">
        <h1 className="mb-5 text-center">Users</h1>
        <Link to={"/"}>
          <MDBIcon icon="home" />
        </Link>
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
            {data?.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item?.id}</td>
                    <td>{item?.userId}</td>
                    <td>{item?.title}</td>
                    <td>{item?.body}</td>
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

export default SelectedUser;
