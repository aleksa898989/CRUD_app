import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";

const Item = ({ item }) => {
  return (
    <>
      <MDBTable>
        <MDBTableHead color="primary-color" textWhite>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Website</th>
            <th>email</th>
            <th>Address</th>
            <th>Company</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.username}</td>
            <td>{item.website}</td>
            <td>{item.email}</td>
            <td>{item.company.name}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default Item;
