import NavBar from "../../components/navBar/NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddArticle.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddArticle = () => {
  const [form, setForm] = useState({});
  const resatFormData = () => {
    setForm({
      title: "",
      desc: "",
      category: "",
      image: "",
      writter: "",
      readingTime: "",
    });
  };
  const AddaricleHandler = () => {
    axios
      .post("http://localhost:3000/articles", form)
      .then((response) => {
        if (response.status === 201) {
          Swal.fire({
            title: "Article Added",
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error Try Again",
          timer: 1500,
          icon: "error",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      });
    resatFormData();
  };
  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <NavBar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={form.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="Title Schreiben"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kurz Descrption</Form.Label>
            <Form.Control
              value={form.desc}
              name="desc"
              onChange={formHandler}
              type="text"
              placeholder="Title Schreiben"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>writter</Form.Label>
            <Form.Control
              value={form.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="writter Schreiben"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              value={form.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="Category Eingeben"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Bild</Form.Label>
            <Form.Control
              value={form.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="Bild URL Eingeben"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Lesen Zeit</Form.Label>
            <Form.Control
              value={form.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="text"
              placeholder="Zeit eingeben"
            />
          </Form.Group>
          <Button onClick={AddaricleHandler} variant="primary" type="button">
            Add Article
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddArticle;
