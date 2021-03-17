import React, { useState, useEffect } from "react";
import { FetchJokes, API_URL } from "../helpers/FetchJokes";
import { SyncIcon } from "../components/Icons";

export default function Home() {
  const [data, setData] = useState(null);

  const [{ response, error, isLoading }, refetch] = FetchJokes(
    `${API_URL}Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`
  );

  useEffect(() => {
    if (error) {
      setData(error);
    }

    if (response !== null) {
      setData(response);
    }
  }, [error, response, refetch]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div>
      {isLoading ? (
        <div className="starter-template">
          <h1>Loading...</h1>
          <p className="lead">Please wait jokes are being loaded.</p>
        </div>
      ) : data === null ? (
        <></>
      ) : !data.error ? (
        <div className="starter-template">
          <h1>{data.category} Jokes</h1>
          {data.type === "twopart" ? (
            <div>
              <blockquote>
                <p>{data.setup}</p>
                <footer>{data.delivery}</footer>
              </blockquote>
            </div>
          ) : (
            <p className="lead">{data.joke}</p>
          )}
        </div>
      ) : (
        <div className="starter-template">
          <h1>Oops!</h1>
          <p className="lead">An error occurred while fetching jokes.</p>
        </div>
      )}

      <div className="" style={{ width: "50%", margin: "0 auto" }}>
        <button
          type="button"
          className="btn btn-default btn-lg  btn-block"
          onClick={refetch}
        >
          Randomiser {SyncIcon}{" "}
        </button>
      </div>
    </div>
  );
}
