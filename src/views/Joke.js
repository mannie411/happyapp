import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchJokes, API_URL } from "../helpers/FetchJokes";
import { HeartIcon } from "../components/Icons";

export default function Joke() {
  const [data, setData] = useState([]);
  let { id } = useParams();

  const [{ response, error, isLoading }] = FetchJokes(
    `${API_URL}Any?idRange=${id}`
  );

  useEffect(() => {
    if (error) {
      setData(error);
    }
    if (response !== null) {
      setData(response);
    }
  }, [error, response]);

  const isLiked = () => {
    const jokes = localStorage.getItem("jokes");
    if (!jokes) {
      return "";
    }

    const jokesId = jokes.split(",");
    if (jokesId.includes(id)) return "liked";
    else return "";
  };

  return (
    <div className="container">
      {isLoading ? (
        <div className="starter-template">
          <h1>Loading...</h1>
          <p className="lead">Please wait joke is being loaded.</p>
        </div>
      ) : data.type === "single" ? (
        <div className="starter-template">
          <HeartIcon className={isLiked()} />
          <p className="lead">{data.joke}</p>
        </div>
      ) : (
        <div className="starter-template">
          <HeartIcon className={isLiked()} />
          <h3>{data.setup}</h3>
          <p className="lead">{data.delivery}</p>
        </div>
      )}
    </div>
  );
}
