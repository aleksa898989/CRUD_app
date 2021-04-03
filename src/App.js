import { BrowserRouter as Router } from "react-router-dom";
import Pages from "pages/pages";
import "./main.scss";

const App = () => {
  return (
    <div>
      <Router>
        <Pages />
      </Router>
    </div>
  );
};

export default App;
