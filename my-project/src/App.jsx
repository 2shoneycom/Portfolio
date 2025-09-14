import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Projects_main from "./routes/Project/Projects_main";
import Projects_detail from "./routes/Project/Projects_detail";
import Web_main from "./routes/Web/Web_main";
import Web_htmlcss from "./routes/Web/Web_html-css";
import Web_detail from "./routes/Web/Web_detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects_main />} />
        <Route path="/projects/:slug" element={<Projects_detail />} />
        <Route path="/web_courses" element={<Web_main />} />
        <Route path="/web_courses/html-css" element={<Web_htmlcss />} />
        <Route path="/web_courses/nodejs" element={<Web_main />} />
        <Route path="/web_courses/react" element={<Web_main />} />
        <Route path="/web_courses/html-css/:slug" element={<Web_detail />} />
      </Routes>
    </Router>
  );
}

export default App;
