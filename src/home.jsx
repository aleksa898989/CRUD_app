import { Link } from "react-router-dom";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

const Home = () => {
  return (
    <MDBContainer className="text-center home-wrapper">
      <div id="overlay"></div>
      <MDBRow className="mt-5">
        <MDBCol md="12" className="d-flex flex-column">
          <Link to={"/posts"}>Posts Listing</Link>
          <Link to={"/add/posts/"}>Add new post</Link>
          <Link to={"/edit/posts/"}>Edit existing post</Link>
          <Link to={"/users"}>Users Listing</Link>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
