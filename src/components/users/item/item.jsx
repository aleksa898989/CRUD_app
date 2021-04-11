import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";

const Item = ({ item }) => {
  return (
    <>
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
            <td className="posts-and-users-listing-td">{item.id}</td>
            <td className="posts-and-users-listing-td">{item.name}</td>
            <td className="posts-and-users-listing-td">{item.phone}</td>
            <td className="posts-and-users-listing-td">{item.website}</td>
            <td className="posts-and-users-listing-td">{item.email}</td>
            <td className="posts-and-users-listing-td">
              {item.address.street}
            </td>
            <td className="posts-and-users-listing-td">{item.company.name}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default Item;
