import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import AddArticle from "./pages/addArticle/AddArticle";
import Article from "./pages/article/Article";
import EditArticle from "./pages/editArticle/EditArticle";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="/edit-article/:articleId" element={<EditArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
