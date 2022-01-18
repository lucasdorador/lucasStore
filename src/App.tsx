import { BrowserRouter as Router } from "react-router-dom";
import SrcRoutes from "./routes/srcRoutes";

const App: React.FC = () => (
  <Router>
    <SrcRoutes />
  </Router>
);

export default App;
