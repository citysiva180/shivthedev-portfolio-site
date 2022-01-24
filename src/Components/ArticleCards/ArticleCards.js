import React from "react";
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ArticleCards.css";
const ArticleCards = ({ articleCardProps }) => {
  return typeof articleCardProps === "undefined" ? (
    <Spinner></Spinner>
  ) : (
    <Row>
      {articleCardProps.map((index, i) => (
        <Col key={i}>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <Card.Img
              variant="top"
              src={"https://via.placeholder.com/150/92c952"}
            />
            <Card.Body>
              <Card.Title className="text-truncate">{index.title}</Card.Title>
              <Card.Text className="overflow-auto" style={{ height: "15rem" }}>
                {index.body}
              </Card.Text>
              <Link to={String(index.id)}>
                <Button variant="primary">Read Article</Button>
              </Link>
            </Card.Body>
          </Card>
          <br />
          <br />
        </Col>
      ))}
    </Row>
  );
};

export default ArticleCards;
