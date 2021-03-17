import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HeartIcon, DeleteIcon, EyeIcon } from "./Icons";

export default function Joke({
  id,
  joke,
  type,
  setup,
  delivery,
  index,
  actions,
}) {
  const history = useHistory();
  const [icons, setIcons] = useState();

  useEffect(() => {
    const jokes = localStorage.getItem("jokes");

    const viewJoke = () => history.push(`/joke/${id}`);

    const likeJoke = () => {
      if (!jokes) {
        localStorage.setItem("jokes", id);
        return;
      }

      if (jokes) {
        const jokeID = [jokes, id];
        localStorage.setItem("jokes", jokeID);
        return;
      }
    };

    const deleteJoke = () => {
      if (!jokes) {
        return;
      }
      const jokesId = jokes.split(",");
      jokesId.splice(index, 1);
      localStorage.setItem("jokes", jokesId);
      actions();
      return;
    };

    const isLiked = () => {
      if (!jokes) {
        return "";
      }

      const jokesId = jokes.split(",");
      if (jokesId.includes(id)) return "liked";
      else return "";
    };

    const displayIcons = () => {
      const viewLike = (
        <div>
          <span className="drop__social" onClick={viewJoke}>
            {EyeIcon}
          </span>
          <span className="drop__social" onClick={likeJoke}>
            <HeartIcon className={isLiked()} />
          </span>
        </div>
      );
      const viewDelete = (
        <div>
          <span className="drop__social" onClick={viewJoke}>
            {EyeIcon}
          </span>

          <span className="drop__social" onClick={deleteJoke}>
            {DeleteIcon}
          </span>
        </div>
      );
      if (history.location.pathname === "/favourites") {
        setIcons(viewDelete);
        return;
      }

      setIcons(viewLike);
      return;
    };

    displayIcons();
  }, [actions, history, id, index]);

  return (
    <div className="drop__card">
      <div className="drop__data">
        <div className="drop__content">
          {type === "single" ? (
            <p className="drop__profession overflow ellipsis">{joke}</p>
          ) : (
            <>
              <h1 className="drop__name overflow ellipsis">{setup}</h1>

              <p className="drop__profession overflow ellipsis">{delivery}</p>
            </>
          )}
        </div>
      </div>

      <div className="drop__icons">{icons}</div>
    </div>
  );
}
