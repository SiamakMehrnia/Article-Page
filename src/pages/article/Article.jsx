import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaPenClip } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";
import { BiSolidCategory } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import "./Article.css"
import Swal from "sweetalert2";

const Article = () => {
  const articleId = useParams().articleId;
  const [articleData, setArticleData] = useState({});
  const navigate=useNavigate()
  useEffect(() => {
    axios
      .get(`http://localhost:3000/articles/${articleId}`)
      .then((response) => setArticleData(response.data));
  }, []);
  const editArticleHandler=(id)=>{
    navigate(`/edit-article/${id}`)
  }
  const deletButtonHandler=(id)=>{
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    axios.delete(`http://localhost:3000/articles/${id}`)
    navigate("/")
  }
});

}
  return (
    <>
      <NavBar />
      <Container>
        <Row style={{marginTop :"70px"}}>
          <Col lg={4}>
            <div className="articleCardContainer">
              <div className="cardHeader">
                <img
                  src={articleData.image}
                  alt=""
                />
                <h4>Title</h4>
              </div>
              <div className="cardBody">
                <p>
                  <FaPenClip size="18px"/>
                  Writter: <b>{articleData.writter}</b>
                </p>
                <p>
                  <BiSolidTimeFive size="20px"/>
                  Reading Time: <b>{articleData.readingTime}Min</b>
                </p>
                <p>
                  <BiSolidCategory size="20px"/>
                  Category: <b>{articleData.category}</b>
                </p>
              </div>
              <div className="cardFooter">
                <Button onClick={()=>deletButtonHandler(articleId)} variant="outline-danger"> <MdDelete  size="25px"/> Delet Article</Button>
                <Button onClick={()=>editArticleHandler(articleId)} variant="outline-primary"><MdOutlineEdit size="25px" />Update Article</Button>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              tempora nobis voluptate praesentium quidem, similique neque, ab
              omnis exercitationem fuga magnam, ipsum deserunt tempore
              accusantium incidunt aliquam ad quasi adipisci velit consectetur
              explicabo itaque qui ea assumenda. Soluta voluptate veritatis illo
              voluptatum reprehenderit quos, iusto consectetur alias quae iure
              dolorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              tempora nobis voluptate praesentium quidem, similique neque, ab
              omnis exercitationem fuga magnam, ipsum deserunt tempore
              accusantium incidunt aliquam ad quasi adipisci velit consectetur
              explicabo itaque qui ea assumenda. Soluta voluptate veritatis illo
              voluptatum reprehenderit quos, iusto consectetur alias quae iure
              dolorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              tempora nobis voluptate praesentium quidem, similique neque, ab
              omnis exercitationem fuga magnam, ipsum deserunt tempore
              accusantium incidunt aliquam ad quasi adipisci velit consectetur
              explicabo itaque qui ea assumenda. Soluta voluptate veritatis illo
              voluptatum reprehenderit quos, iusto consectetur alias quae iure
              dolorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              tempora nobis voluptate praesentium quidem, similique neque, ab
              omnis exercitationem fuga magnam, ipsum deserunt tempore
              accusantium incidunt aliquam ad quasi adipisci velit consectetur
              explicabo itaque qui ea assumenda. Soluta voluptate veritatis illo
              voluptatum reprehenderit quos, iusto consectetur alias quae iure
              dolorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              tempora nobis voluptate praesentium quidem, similique neque, ab
              omnis exercitationem fuga magnam, ipsum deserunt tempore
              accusantium incidunt aliquam ad quasi adipisci velit consectetur
              explicabo itaque qui ea assumenda. Soluta voluptate veritatis illo
              voluptatum reprehenderit quos, iusto consectetur alias quae iure
              dolorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              tempora nobis voluptate praesentium quidem, similique neque, ab
              omnis exercitationem fuga magnam, ipsum deserunt tempore
              accusantium incidunt aliquam ad quasi adipisci velit consectetur
              explicabo itaque qui ea assumenda. Soluta voluptate veritatis illo
              voluptatum reprehenderit quos, iusto consectetur alias quae iure
              dolorem.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Article;
