import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Spinner, Container } from "react-bootstrap";
import { generate_gradient } from "./rando-color";
import axios from "axios";
const ArticlePage = ({ props }) => {
  const url_link = useParams();
  console.log("post Number :  ", url_link);

  const [articles, setArticles] = useState([{}]);
  const [error, setError] = React.useState(null);
  const gradient_value = generate_gradient();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${url_link.id}`)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url_link]);

  console.log(articles);

  return typeof articles === "undefined" ? (
    <Spinner></Spinner>
  ) : (
    <Container>
      {/* <br></br> */}
      <br></br>
      <div
        p={4}
        style={{
          fontFamily: "Oswald",
          border: "solid 2px white",
          backgroundColor: gradient_value["backgroundColor"],
          backgroundImage: gradient_value["backgroundImage"],
        }}
      >
        <br></br>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Oswald",
          }}
        >
          {articles["title"]}
        </h1>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <strong>Other Articles</strong>
        </Col>
        <Col xs={8}>
          <p style={{ color: "white" }}>{articles["body"]}</p>
        </Col>

        <Col>
          <Row>Profile with details</Row>
          <Row>Filter List</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlePage;

// style={{
//   backgroundColor: rando_color,
//   fontFamily: "Oswald",
//   border: "solid 2px white",
//   // opacity: "70%",
// }}

// background-color: #21D4FD;
// background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
