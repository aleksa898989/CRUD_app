import { MDBContainer, MDBIcon } from "mdbreact";
import Item from "./item";
import { Link } from "react-router-dom";

const Listing = ({ posts }) => {
  return (
    <>
      <MDBContainer>
        <h1 className="text-center mb-5 mt-5">Posts Listing</h1>

        <div className="d-flex flex-row align-items-center">
          <Link to={"/"}>
            <MDBIcon icon="home" />
          </Link>
          <Link style={{ marginLeft: "5rem" }} to={"/add/posts/"}>
            Add post
          </Link>
          <Link style={{ marginLeft: "5rem" }} to={"/edit/posts/"}>
            Edit post
          </Link>
        </div>
        {posts?.map((item) => {
          return (
            <>
              <Link target={"_blank"} to={`/posts/${item.id}`}>
                <Item key={item?.id} item={item} />;
              </Link>
            </>
          );
        })}
      </MDBContainer>
    </>
  );
};

export default Listing;
