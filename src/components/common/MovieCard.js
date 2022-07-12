import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MovieCard(props) {
  const {
    id,
    backdrop_path,
    name,
    original_name,
    title,
    overview,
    vote_average,
    release_date,
  } = props;

  const trancate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  let rating = vote_average ? `${vote_average}`.split(".") : ["0"];
  if (rating.length == 1 && parseInt(rating[0]) > 0) {
    rating.push("0");
  }

  const navigate = useNavigate();
  return (
    <div className="movie col-sm-3" onClick={() => navigate("/movie/" + id)}>
      <img
        className="movie__img"
        src={
          (backdrop_path &&
            "https://image.tmdb.org/t/p/original/" + backdrop_path) ||
          "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
        }
        alt={title}
      />
      <div className="movie__info">
        <p className="name">{name || original_name || title}</p>
        <p className="note">{release_date}</p>
        <p className="rating">
          <img src="rating.png" id="rating__icon" alt="" />
          {rating.join("")}%
        </p>
        <p className="note">{trancate(overview, 80)}</p>
        <Link to={"/movie/" + id}>More Info</Link>
      </div>
    </div>
  );
}

export default MovieCard;
