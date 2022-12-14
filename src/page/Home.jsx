import { Header, Movies } from "../component";
import {} from "../css/home.css";
import Video from "../video/bg.mp4";
import { Body } from "../component";
export const Home = () => {
  return (
    <div>
      <div
        className=" home d-flex flex-column align-items-center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <video
          style={{
            position: "absolute",
            width: "100vw",
            zIndex: "-100",
            height: "100vh",
            objectFit: "cover",
          }}
          loop
          src={Video}
          autoPlay
          muted
        ></video>

        <div className="m-4" style={{ width: "93%" }}>
          <Header />
          <div
            style={{ width: "547px", height: "75vh" }}
            className="logo-2 d-flex flex-column justify-content-center gap-5"
          >
            <div>
              <img
                style={{ width: "461px", height: "184px" }}
                src="logo-2.png"
                alt=""
              />
            </div>

            <div className="d-flex fw-bold w-100 gap-4">
              <img style={{ width: "20px" }} src="top10.svg" alt="" />
              <div style={{ fontSize: "24px" }}>#1 in TV Shows Today</div>
            </div>
            <div style={{ fontSize: "24px" }}>
              Determined to protect a young patient who escaped a mysterious
              cult, a psychiatrist takes the girl in, putting her own family —
              and life — in danger.
            </div>
            <div className="d-flex w-100 gap-4">
              <button
                className="rounded border border-none bg-light fw-bold d-flex justify-content-center align-items-center gap-3 w-25"
                style={{ fontSize: "24px", height: "45px" }}
              >
                <a
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                  href="https://2embed.org/embed/movie?imdb=tt0285728
                  "
                >
                  <img src="play.svg" alt="" /> Play
                </a>
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
