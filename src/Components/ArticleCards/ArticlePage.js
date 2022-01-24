import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Spinner, Container } from "react-bootstrap";
import axios from "axios";
const ArticlePage = ({ props }) => {
  const url_link = useParams();
  console.log("post Number :  ", url_link);

  const [articles, setArticles] = useState([{}]);
  const [error, setError] = React.useState(null);

  const color_list = [
    "#92C952",
    "#b89f12",
    "#09826c",
    "#060606",
    "#2A9FD6",
    "tomato",
    "blueviolet",
    "cornflowerblue",
    "indianred",
    "MediumAquaMarine",
    "MediumPurple",
    "Rebeccapurple",
    "sandybrown",
    "seagreen",
    "palevioletred",
    "lightsteelblue",
    "Gold",
    "teal",
  ];

  const rando_color = color_list[Math.floor(Math.random() * color_list.length)];
  console.log(rando_color);
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
          backgroundColor: rando_color,
          fontFamily: "Oswald",
          border: "solid 2px white",
          // opacity: "70%",
        }}
      >
        <br></br>
        <h1 style={{ textAlign: "center" }}>{articles["title"]}</h1>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <strong>Other Articles</strong>
        </Col>
        <Col xs={8}>Article</Col>
        <Col>
          <Row>Profile with details</Row>
          <Row>Filter List</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlePage;
