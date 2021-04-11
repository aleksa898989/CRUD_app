import { MDBContainer, MDBIcon } from "mdbreact";
import Item from "./item";
import { Link } from "react-router-dom";

const Listing = ({ users }) => {
  return (
    <>
      <MDBContainer>
        <h1 className="text-center mb-5 mt-5">Users Listing</h1>
        <Link to={"/"}>
          <MDBIcon icon="home" />
        </Link>
        {users?.map((item) => {
          return (
            <>
              <Link target={"_blank"} to={`/posts/user/${item.id}`}>
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
