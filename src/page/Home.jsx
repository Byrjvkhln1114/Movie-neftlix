import { Header, Movies } from "../component";
import {} from "../css/home.css";
import video from "../videos/background.mp4";
import { useContext } from "react";
import { MovieContext } from "../Context";
import { Body } from "../component";
export const Home = () => {
  return (
    <div>
      <div
        className=" home d-flex flex-column align-items-center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="m-4" style={{ width: "93%" }}>
          <Header />
          <div
            style={{ width: "547px", height: "75vh" }}
            className="logo-2 d-flex flex-column justify-content-center gap-5"
          >
            <a href="https://www.2embed.to/embed/tmdb/movie?id=972545">
              <div>
                <img
                  style={{ width: "461px", height: "184px" }}
                  src="logo-2.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="d-flex fw-bold w-100 gap-4">
              <img style={{ width: "20px" }} src="top10.svg" alt="" />
              <div style={{ fontSize: "24px" }}>#1 in TV Shows Today</div>
            </div>
            <div style={{ fontSize: "24px" }}>
              Over more than a decade, Jeffrey Dahmer slaughtered 17 teenage
              boys and young men before he was charged. How did he evade law
              enforcement for so long?
            </div>
            <div className="d-flex w-100 gap-4">
              <button
                className="rounded border border-none bg-light fw-bold d-flex justify-content-center align-items-center gap-3 w-25"
                style={{ fontSize: "24px", height: "45px" }}
              >
                <img src="play.svg" alt="" /> Play
              </button>
              <button
                className="rounded border border-secondary bg-secondary text-light d-flex justify-content-center align-items-center gap-3 fw-bold"
                style={{ fontSize: "24px", height: "45px" }}
              >
                <img src="warm.svg" alt="" /> More info
              </button>
            </div>
          </div>
        </div>
      </div>
      <Body />
    </div>
  );
};
