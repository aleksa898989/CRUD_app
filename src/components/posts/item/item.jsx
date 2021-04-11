import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";

const Item = ({ item }) => {
  return (
    <>
      <MDBTable responsive>
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
            <td>{item.id}</td>
            <td>{item.userId}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default Item;
