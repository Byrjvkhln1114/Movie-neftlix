import { useState, useContext } from "react";
import { MovieContext } from "../Context";
export const Header = () => {
  const { setInput, dataRetriever } = useContext(MovieContext);
  const inputListener = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="d-flex gap-5 w-75">
          <div
            className="logo d-flex justify-content-start"
            style={{ width: "17%" }}
          >
            <img style={{ width: "137px" }} src="logo.svg" alt="" />
          </div>
          <div className="d-flex gap-5 w-100">
            <div className="fw-bold">Home</div>
            <div>TV Shows</div>
            <div>Movies</div>
            <div>New & Popular</div>
            <div>My list</div>
            <div>Browse by languages</div>
          </div>
        </div>
        <div className="d-flex gap-4 justify-content-end w-25 ">
          <div className="search-icon">
            <div
              style={{ display: "flex", gap: "20px" }}
              onClick={dataRetriever}
            >
              <input onChange={inputListener} type="text" />
              <img id="search-img" src="search.svg" alt="" />
            </div>
          </div>
          <div className="direct">DIRECT</div>
          <div className="ring">
            <img src="notification.svg" alt="" />
          </div>
          <div className="pingu">
            <img src="pingu.svg" alt="" />
          </div>
          <div className="arrow">
            <img src="arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
