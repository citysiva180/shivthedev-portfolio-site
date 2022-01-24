import React, { useEffect, useState } from "react";
import ArticleCards from "./ArticleCards";
import axios from "axios";
function Articles() {
  const [articles, setArticles] = useState([{}]);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  console.log(articles);

  return (
    <div>
      <br />
      <br />
      <h1>Read your heart ❤️ out </h1>
      <br />
      <br />
      <ArticleCards articleCardProps={articles}></ArticleCards>
    </div>
  );
}

export default Articles;
