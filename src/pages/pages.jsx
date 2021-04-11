import { Switch, Route } from "react-router-dom";
import Listing from "components/posts";
import SelectedPost from "components/posts/selected";
import SelectedUser from "components/users/selected";
import ListingUsers from "components/users";
import Home from "../home";
import AddPost from "components/posts/add";
import EditPost from "components/posts/edit";
import DeletePost from "components/posts/delete";

const Pages = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />{" "}
        <Route path="/posts" exact component={Listing} />{" "}
        <Route path="/users" exact component={ListingUsers} />{" "}
        <Route path={"/posts/:id"} exact component={SelectedPost} />
        <Route path={`/posts/user/:id`} exact component={SelectedUser} />
        <Route path={`/edit/posts/`} exact component={EditPost} />
        <Route path={`/add/posts/`} exact component={AddPost} />
        <Route path={`/delete/posts/`} exact component={DeletePost} />
      </Switch>
    </>
  );
};

export default Pages;
