import { MDBContainer } from "mdbreact";
import Item from "./item";
import { Link } from "react-router-dom";

const Listing = ({ users }) => {
  return (
    <>
      <MDBContainer>
        <h1 className="text-center mb-5 mt-5">Users</h1>

        <Link className="mb-5" to={"/"}>
          Home
        </Link>
        {users?.map((item, index) => {
          return (
            <>
              <Link target={"__blank"} to={`/posts/user/${item.id}`}>
                <Item item={item} />
              </Link>
            </>
          );
        })}
      </MDBContainer>
    </>
  );
};

export default Listing;
