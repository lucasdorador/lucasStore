import { BrowserRouter as Router } from "react-router-dom";
import SrcRoutes from "./routes/srcRoutes";
import Root from "./Root";

const App: React.FC = () => (
  <Root>
    <Router>
      <SrcRoutes />
    </Router>
  </Root>
);

export default App;
