import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiClient, API_KEY } from "./common/requests";

function SingleMovie({ favourite, setFavourite }) {
  const { id } = useParams();
  const [info, setInfo] = useState();

  const getMovieDetails = async () => {
    const { data, ok } = await apiClient.get(`/movie/${id}?api_key=${API_KEY}`);
    if (ok && data) {
      setInfo(data);
    }
  };
  useEffect(() => {
    getMovieDetails();
  }, [id]);

  let rating = info?.vote_average ? `${info?.vote_average}`.split('.') : ['0']
  if(rating.length == 1 && parseInt(rating[0]) > 0){
    rating.push('0')
  } 

  const trancate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div className="single__movie">
      <img
        src={
          (info?.backdrop_path &&
            "https://image.tmdb.org/t/p/original/" + info?.backdrop_path) ||
          "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
        }
        alt=""
      />
      <div className="singleimage__info">
        <h1>
          {info?.title || info?.original_name || info?.title}
          {favourite.includes(id) ? (
            <img
              src="../heart1.png"
              onClick={() => setFavourite(favourite.filter((i) => i != id))}
              alt=""
            />
          ) : (
            <img
              src="../heart2.png"
              onClick={() => setFavourite([...favourite, id])}
              alt=""
            />
          )}
        </h1>
        <h5>{info?.release_date}</h5>
        <p>{trancate(info?.overview,400)}</p>
        <span>
          <img src="../rating.png" id="rating__icon" alt="" />
          {rating.join('')}%
        </span>
      </div>
    </div>
  );
}

export default SingleMovie;
