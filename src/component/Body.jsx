import { useContext } from "react";
import { MovieContext } from "../Context";

export const Body = () => {
  const { data } = useContext(MovieContext);
  const boldo = data?.d?.filter((el) => {
    return el.qid == "movie";
  });
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        overflow: "scroll",
        gap: "10px",
        background: "black",
      }}
    >
      {boldo?.map((el, index) => {
        return (
          <div
            key={index}
            style={{
              color: "black",
              width: "100vw",
            }}
          >
            <a
              target="_blank"
              href={`https://2embed.org/embed/movie?imdb=${el.id}`}
            >
              <img
                style={{ width: "15vw", height: "100%" }}
                src={el?.i?.imageUrl}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};
