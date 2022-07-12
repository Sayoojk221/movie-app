import React, { useState, useEffect } from "react";
import MovieCard from "./common/MovieCard";
import { apiClient, endpoints } from "./common/requests";

function Home() {
  const movieCategories = [ "Popular", "Now Playing", "Upcoming","Top Rated",];
  const [movies, setMovies] = useState();
  const [category, setCategory] = useState("Popular");

  const getMovies = async () => {
    const { data, ok } = await apiClient.get(endpoints[category]);
    if (ok && data) {
      setMovies(data.results.splice(0,12));
    }
  };

  const handleChange = ({ target: { value } }) => setCategory(value);

  useEffect(() => {
    getMovies();
    return;
  }, [category]);

  return (
    <div className="row">
      <div className="col-xl-12 m-4 d-flex justify-content-center">
        <div className="form-group">
          <select className="form-control select" onChange={handleChange}>
            {movieCategories.map((cate, key) => (
              <option key={key} defaultValue={key == 0 ? true : false}>
                {cate}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row d-flex justify-content-center m-0">
        {movies?.map((movie,key) => <MovieCard key={key} {...movie} />)}
      </div>
    </div>
  );
}

export default Home;
