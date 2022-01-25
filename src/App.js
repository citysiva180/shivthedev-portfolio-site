// import logo from "./logo.svg";
import "./App.css";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/Components/HomePage/HomePage";
import NavBar from "./Components/Utils/NavBar/NavBar";
import Articles from "./Components/ArticleCards/Articles";
import ArticlePage from "./Components/ArticleCards/ArticlePage";
import ImageDragAndDrop from "./Components/ImageDropAndCrop/ImageDragAndDrop";
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/articles" element={<Articles></Articles>}></Route>
            <Route
              path="articles/:id"
              element={<ArticlePage></ArticlePage>}
            ></Route>
            <Route
              path="hello"
              element={<ImageDragAndDrop></ImageDragAndDrop>}
            ></Route>
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
