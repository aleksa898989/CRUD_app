import { MDBCol, MDBRow, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <h1>Welcome</h1>
      <MDBRow className="mt-5">
        <MDBCol md="6" className="d-flex flex-column">
          <Link to={"/posts"}>Posts Listing</Link>
          <Link to={"/add/posts/"}>Add new post</Link>
          <Link to={"/edit/posts/"}>Edit existing post</Link>
        </MDBCol>
        <MDBCol md="6">
          <Link to={"/users"}>Users Listing</Link>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
