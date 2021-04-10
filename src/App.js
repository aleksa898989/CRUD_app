import { BrowserRouter as Router } from "react-router-dom";
import Pages from "pages/pages";
import "./main.scss";

const App = () => {
  return (
    <Router>
      <Pages />
    </Router>
  );
};

export default App;
