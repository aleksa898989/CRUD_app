import { MDBCol, MDBRow, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <h1>Welcome</h1>
      <MDBRow className="mt-5">
        <MDBCol md="6">
          <Link to={"/posts"}>Posts Listing</Link>
        </MDBCol>
        <MDBCol md="6">
          <Link to={"/users"}>Users Listing</Link>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
