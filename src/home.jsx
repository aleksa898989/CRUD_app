import { Link } from "react-router-dom";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

const Home = () => {
  return (
    <MDBContainer className="text-center home-wrapper">
      <div id="overlay"></div>
      <MDBRow className="mt-5">
        <MDBCol md="12" className="d-flex flex-column">
          <Link to={"/posts"}>Posts</Link>
          <Link to={"/users"}>Users</Link>
          <Link to={"/add/posts/"}>Add post</Link>
          <Link to={"/edit/posts/"}>Edit post</Link>
          <Link to={"/delete/posts/"}>Delete post</Link>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
