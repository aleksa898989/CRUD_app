import { MDBContainer, MDBIcon, MDBRow, MDBCol } from "mdbreact";
import Item from "./item";
import { Link } from "react-router-dom";

const Listing = ({ posts }) => {
  return (
    <>
      <MDBContainer>
        <h1 className="text-center mb-5 mt-5">Posts Listing</h1>
        <MDBRow className="d-flex flex-row align-items-center justify-content-center text-center">
          <MDBCol md="3" className="mb-2">
            <Link to={"/"}>
              <MDBIcon icon="home" />
            </Link>
          </MDBCol>
          <MDBCol md="3" className="mb-2">
            <Link to={"/add/posts/"}>Add post</Link>
          </MDBCol>
          <MDBCol md="3" className="mb-2">
            <Link to={"/edit/posts/"}>Edit post</Link>
          </MDBCol>
          <MDBCol md="3" className="mb-2">
            <Link to={"/delete/posts/"}>Delete Post</Link>
          </MDBCol>
        </MDBRow>
        {posts?.map((item) => {
          return (
            <>
              <Link target={"_blank"} to={`/posts/${item.id}`}>
                <Item key={item?.id} item={item} />
              </Link>
            </>
          );
        })}
      </MDBContainer>
    </>
  );
};

export default Listing;
