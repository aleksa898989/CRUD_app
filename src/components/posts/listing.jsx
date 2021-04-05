import { MDBContainer } from "mdbreact";
import Item from "./item";
import { Link } from "react-router-dom";

const Listing = ({ posts }) => {
  return (
    <>
      <MDBContainer>
        <h1 className="text-center mb-5 mt-5">Posts</h1>

        <Link className="mb-5" to={"/"}>
          Home
        </Link>
        {posts?.map((item, index) => {
          return (
            <>
              <Link target={"__blank"} to={`/posts/${item.id}`}>
                <Item item={item} />;
              </Link>
            </>
          );
        })}
      </MDBContainer>
    </>
  );
};

export default Listing;
