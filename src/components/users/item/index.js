import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";

const Item = ({ item }) => {
  return (
    <MDBTable responsive>
      <MDBTableHead color="primary-color" textWhite>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Email</th>
          <th>Address</th>
          <th>Company</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.phone}</td>
          <td>{item.website}</td>
          <td>{item.email}</td>
          <td>{item.address.street}</td>
          <td>{item.company.name}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};

export default Item;
