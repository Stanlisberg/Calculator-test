import { createContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [mainData, setMainData] = useState();
  const getRandom = Math.floor(Math.random() * 10);

  const displayResponse = async (value) => {
    if (value === 753) {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGQyNDQ2ZTg1ZmQ2Mzc3NGM5ZjNhODY2N2U1MmI3ZiIsInN1YiI6IjYxMDNhNWQ0NDI4NGVhMDA1ZDE5OTc2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FG38CkW-ijLIMRLiOIeoPLJeQV_0O2bSIK5vymhKKNE",
        },
      };

      //--------Fetch Movies-----------
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?page=${page}",
        options
      );
      const data = await response.json();

      const { results } = data;
      setMainData(results[getRandom].original_title);
    } else if (value === 172) {

      //-----Fetch Jokes-------------
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single&amount=10"
      );
      const data = await response.json();

      const { jokes } = data;
      setMainData(jokes[getRandom].joke);
    } else if (value === 112) {

      //------------fetch Movies------------
      const response = await fetch("https://api.imgflip.com/get_memes");
      const item = await response.json();

      const { data } = item;
      setMainData(data.memes[getRandom].name);
    }
  };

  return (
    <CalculatorContext.Provider
      value={{
        displayResponse,
        mainData,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContext;
