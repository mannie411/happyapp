import React, { useEffect, useState } from "react";
import { FetchJokes, API_URL } from "../helpers/FetchJokes";
import Joke from "../components/Joke";
import Category from "../components/Category";
import { LoadIcon } from "../components/Icons";

export default function SingleJokes() {
  const [params, setParams] = useState("");
  const [data, setData] = useState([]);

  const [{ response, error, isLoading }] = FetchJokes(
    `${API_URL}${params}?type=single&amount=10&blacklistFlags=nsfw,racist,sexist,explicit`
  );

  useEffect(() => category(), []);

  useEffect(() => {
    if (error) {
      setData(error);
    }
    if (response !== null) {
      const { jokes } = response;
      setData(jokes);
    }
  }, [error, response]);

  const category = (val) => {
    if (!val) {
      setParams("Any");
      return;
    }
    const p = val.join(",");
    setParams(p);
  };

  return (
    <div className="starter-template">
      <div className="drop">
        <div className="drop__container" id="drop-items">
          <div style={{ margin: "20px 0" }}>
            <Category value={category} />
          </div>

          <div className="container">
            {isLoading ? (
              <div className="starter-template">
                <h1>Loading...</h1>
                <p className="lead">Please wait jokes are being loaded.</p>
              </div>
            ) : (
              data.map((j, i) => (
                <Joke key={i} joke={j.joke} id={j.id} type={j.type} />
              ))
            )}
          </div>

          <div style={{ margin: "20px 0" }}>
            <div className="" style={{ width: "50%", margin: "0 auto" }}>
              <button
                type="button"
                className="btn btn-default btn-lg  btn-block"
                onClick={() => {}}
              >
                More... {LoadIcon}{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
