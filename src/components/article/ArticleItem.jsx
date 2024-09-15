
import Card from "react-bootstrap/Card";
import { IoTimeOutline } from "react-icons/io5";
import "./ArticleItem.css"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ArticleItem = (props) => {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={props.image}
        />
        <Card.Body>
          <Card.Title className="py-2">{props.title}</Card.Title>
          <Card.Text>
          {props.desc}
          </Card.Text>
          <Link to={`/article/${props.id}`}>
          
        <div className="read-more">
            <span>weiter</span>
        <FaArrowRight size="25px" />
        </div>
          </Link>
        </Card.Body>
        <Card.Footer className="fotter-article">
          <span>Writter:{props.writter}</span>
          <span>
            {" "}
            {props.readingTime} Min
            <IoTimeOutline size="20px" />
          </span>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ArticleItem;