import { createContext, useState } from "react";
import axios from "axios";
export const MovieContext = createContext();
export const Context = ({ children }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  const [check, setCheck] = useState(true);
  let bata = null;
  const dataRetriever = async () => {
    if (check == true) {
      document.getElementById("forcheck").style.width = "200px";
      document.getElementById("forcheck").style.transition = "1s";
    } else {
      document.getElementById("forcheck").style.width = "0px";
      document.getElementById("forcheck").style.transition = "1s";
      document.getElementById("forcheck").value = "";

      bata = await axios.get(`https://imdb8.p.rapidapi.com/auto-complete`, {
        params: { q: input },
        headers: {
          "X-RapidAPI-Key":
            "5068f20ef9msh646e55fe7093702p15d89ajsnbde19bd743ad",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      });
      setData(bata?.data);
    }
    setCheck(!check);
  };
  return (
    <MovieContext.Provider value={{ setInput, input, dataRetriever, data }}>
      {children}
    </MovieContext.Provider>
  );
};

