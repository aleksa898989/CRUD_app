import { Switch, Route } from "react-router-dom";
import Listing from "components/posts";
import SelectedPost from "components/posts/selected";
import SelectedUser from "components/users/selected";
import ListingUsers from "components/users";

const Pages = () => {
  let selectedUserPath = window.location.href;
  let selectedPostPath = `${window.location.pathname}`;

  return (
    <>
      <Switch>
        <Route path="/" exact component={Listing} />{" "}
        <Route path="/users" exact component={ListingUsers} />{" "}
        {/* FIX THIS selected post path gazi ovo drugo i nikad ne udje u komponentu jer uvek renderuje SelectedPost */}
        <Route path={selectedPostPath} exact component={SelectedPost} />
        <Route path={selectedUserPath} exact component={SelectedUser} />
      </Switch>
    </>
  );
};

export default Pages;
