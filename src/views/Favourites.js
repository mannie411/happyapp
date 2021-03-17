import React, { useState, useCallback, useEffect } from "react";
import { API_URL } from "../helpers/FetchJokes";
import Joke from "../components/Joke";

export default function Favourites() {
  const [isJokes, setIsJokes] = useState();
  const [isLoading, setIsLoading] = useState();
  const [jokes, setJokes] = useState([]);

  const loadJokes = useCallback(() => {
    const getJokes = () => {
      const jokesId = localStorage.getItem("jokes");

      if (!jokesId) {
        setIsJokes(false);
        return;
      }

      setIsLoading(true);

      const id = jokesId.split(",");
      const d = id.map((j) => {
        return fetch(`${API_URL}/Any?idRange=${j}`).then((res) => res.json());
      });

      Promise.all(d).then((d) => setJokes(d));
      setIsJokes(true);
      setIsLoading(false);
    };
    getJokes();
  }, []);

  useEffect(() => {
    loadJokes();
  }, [loadJokes]);

  const refresh = () => loadJokes()

  return (
    <div className="starter-template">
      <div className="drop">
        <div className="drop__container" id="drop-items">
          <div className="container">
            {!isJokes ? (
              <p className="lead">No jokes added.</p>
            ) : isLoading ? (
              <div className="starter-template">
                <h1>Loading...</h1>
                <p className="lead">Please wait jokes are being loaded.</p>
              </div>
            ) : (
              jokes.map((j, i) => (
                <Joke
                  key={i}
                  index={i}
                  joke={j.joke}
                  setup={j.setup}
                  delivery={j.delivery}
                  type={j.type}
                  id={j.id}
                  actions={refresh}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
