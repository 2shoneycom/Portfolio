import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Projects_main from "./routes/Project/Projects_main";
import Projects_detail from "./routes/Project/Projects_detail";
import Web_main from "./routes/Web/Web_main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects_main />} />
        <Route path="/projects/:slug" element={<Projects_detail />} />
        <Route path="/web_courses" element={<Web_main />} />
      </Routes>
    </Router>
  );
}

export default App;
