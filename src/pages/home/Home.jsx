import {Container ,Row,Col}from "react-bootstrap"
import NavBar from "../../components/navBar/NavBar";
// import Article from "../article/Article";
import { useEffect, useState } from "react";
import axios from "axios"
import ArticleItem from "../../components/article/ArticleItem";
const Home = () => {
  const [articles,setArticles]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/articles")
    .then(response=>setArticles(response.data))
  },[])
  return (
    <div>
      <NavBar />
      <Container>
        <h1 style={{marginTop: "20px"}}>List Article</h1>
       <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
   {articles.map((article)=> (
    <Col key={article.id}>
      <ArticleItem {...article} />
    </Col>
   ))}
       </Row>
      </Container>

    </div>
  );
};

export default Home;
