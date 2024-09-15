import NavBar from "../../components/navBar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditArticle = () => {
  const [articleData, setArticleData] = useState({});
  const articleId = useParams().articleId;
  const navigate=useNavigate()
  const formHandler = (e) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3000/articles/${articleId}`)
      .then((response) => setArticleData(response.data));
  }, []);
  const editaricleHandler = () => {
    axios.put(`http://localhost:3000/articles/${articleId}`, articleData);
    Swal.fire({
      title: "Article updated successfully",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
    navigate("/")
  };
  return (
    <>
      <NavBar />
      <div className="formContainer">
        <h1>Edit Article</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={articleData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kurz Descrption</Form.Label>
            <Form.Control
              value={articleData.desc}
              name="desc"
              onChange={formHandler}
              type="text"
              placeholder="Title Schreiben"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>writter</Form.Label>
            <Form.Control
              value={articleData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="writter Schreiben"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              value={articleData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="Category Eingeben"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Bild</Form.Label>
            <Form.Control
              value={articleData.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="Bild URL Eingeben"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Lesen Zeit</Form.Label>
            <Form.Control
              value={articleData.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="text"
              placeholder="Zeit eingeben"
            />
          </Form.Group>
          <Button onClick={editaricleHandler} variant="primary" type="button">
            Add Article
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EditArticle;
