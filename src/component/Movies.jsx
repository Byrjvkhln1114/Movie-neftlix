import axios from "axios";
import { useState, useEffect } from "react";
export const Movies = () => {
  const dataRetriever = async () => {
    const data = await axios.get(`https://imdb8.p.rapidapi.com/auto-complete`, {
      params: { q: "end game" },
      headers: {
        "X-RapidAPI-Key": "5068f20ef9msh646e55fe7093702p15d89ajsnbde19bd743ad",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    });

    console.log(data);
  };
  dataRetriever();
  return;
};
