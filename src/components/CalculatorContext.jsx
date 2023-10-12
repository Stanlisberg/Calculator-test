import { createContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [jokes, setJokes] = useState();
  const [memes, setMemes] = useState();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGQyNDQ2ZTg1ZmQ2Mzc3NGM5ZjNhODY2N2U1MmI3ZiIsInN1YiI6IjYxMDNhNWQ0NDI4NGVhMDA1ZDE5OTc2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FG38CkW-ijLIMRLiOIeoPLJeQV_0O2bSIK5vymhKKNE",
    },
  };

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?page=${page}",
      options
    );
    const data = await response.json();

    const { results } = data;
    // console.log(results)
    setMovies(results);
  };

  const fetchJokes = async () => {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&type=twopart&amount=10"
    );
    const data = await response.json();

    const { jokes } = data;
    // console.log(jokes)
    setJokes(jokes);
  };

  const fetchMemes = async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const item = await response.json();

    const { data } = item;
    // console.log(data.memes)
    setMemes(data.memes);
  };

  return (
    <CalculatorContext.Provider
      value={{
        fetchJokes,
        fetchMovies,
        fetchMemes,
        movies,
        jokes,
        memes,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContext;
