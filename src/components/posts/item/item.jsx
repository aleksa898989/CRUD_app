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
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td className="posts-and-users-listing-td">{item.id}</td>
            <td className="posts-and-users-listing-td">{item.userId}</td>
            <td className="posts-and-users-listing-td">{item.title}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default Item;
