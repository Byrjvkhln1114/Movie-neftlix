import { createContext, useState } from "react";
import axios from "axios";
export const MovieContext = createContext();
export const Context = ({ children }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  const dataRetriever = async () => {
    const bata = await axios.get(`https://imdb8.p.rapidapi.com/auto-complete`, {
      params: { q: input },
      headers: {
        "X-RapidAPI-Key": "5068f20ef9msh646e55fe7093702p15d89ajsnbde19bd743ad",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    });
    setData(bata?.data);
    console.log(bata);
  };
  return (
    <MovieContext.Provider value={{ setInput, input, dataRetriever, data }}>
      {children}
    </MovieContext.Provider>
  );
};
