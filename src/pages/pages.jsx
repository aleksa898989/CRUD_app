import { Switch, Route } from "react-router-dom";
import Listing from "components/posts";
import SelectedPost from "components/posts/selected";
import SelectedUser from "components/users/selected";
import ListingUsers from "components/users";
import Home from "../home";

const Pages = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />{" "}
        <Route path="/posts" exact component={Listing} />{" "}
        <Route path="/users" exact component={ListingUsers} />{" "}
        <Route path={"/posts/:id"} exact component={SelectedPost} />
        <Route path={`/posts/user/:id`} exact component={SelectedUser} />
      </Switch>
    </>
  );
};

export default Pages;
