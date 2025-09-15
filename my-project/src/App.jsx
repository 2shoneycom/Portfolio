import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Projects_main from "./routes/Project/Projects_main";
import Projects_detail from "./routes/Project/Projects_detail";
import Web_main from "./routes/Web/Web_main";
import Web_subsection from "./routes/Web/Web_subsection";
import Web_detail from "./routes/Web/Web_post";
import Language_main from "./routes/Language/Language_main";
import Algorithm_main from "./routes/Algorithm/Algorithm_main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects_main />} />
        <Route path="/projects/:slug" element={<Projects_detail />} />
        <Route path="/web_courses" element={<Web_main />} />
        <Route path="/web_courses/:category" element={<Web_subsection />} />
        <Route path="/web_courses/:category/:slug" element={<Web_detail />} />
        <Route path="/language" element={<Language_main />} />
        <Route path="/algorithm" element={<Algorithm_main />} />
      </Routes>
    </Router>
  );
}

export default App;
