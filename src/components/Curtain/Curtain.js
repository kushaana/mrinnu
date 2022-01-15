import "./Curtain.css";
import { Grid } from "@mui/material";
import Hero from "../Hero/Hero";
import { BirthdayCard } from "../BirthdayCard/BirthdayCard";
import Confetti from "../Confetti/Confetti";
import data from "../../data.js";
import { useState } from "react";

function showTime() {
  var curtain = document.getElementById("curtain");
  curtain.className = "open";

  var scene = document.getElementById("scene");
  scene.className = "expand";

  var starter = document.getElementById("starter");
  starter.className = "fade-out";

  setTimeout(function () {
    starter.style.display = "none";
  }, 2000);

  setTimeout(() => {
    starter.style.zIndex = 0;
    scene.style.zIndex = 0;
    curtain.style.zIndex = 0;
  }, 3700);
}

export const Curtain = ({ mainSong }) => {
  const [confetti, setConfetti] = useState(false);

  return (
    <>
      <div
        id="starter"
        onClick={() => {
          mainSong.play();
          showTime();
          setTimeout(() => {
            setConfetti(true);
          }, 3500);
        }}
      >
        click to enter your <del>spotify</del> birthday wrapped
      </div>
      <div id="scene">
        <div id="curtain">
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
      <Hero />
      {confetti && <Confetti />}
      <div className="bg">
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data.map((val, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              style={{
                display: "flex",
                justifyContent:
                  index % 3 === 0
                    ? "right"
                    : index % 3 === 1
                    ? "center"
                    : "left",
                alignItems: "center",
              }}
            >
              <BirthdayCard
                display={val.display ?? ""}
                greeting={val.greeting ?? ""}
                wish={val.wish ?? ""}
                name={val.name ?? ""}
                canvaLink={val.canvaLink ?? ""}
                song={val.song ?? null}
                mainSong={mainSong}
                vid={val.vid ?? null}
                xoxo={val.xoxo ?? true}
                openable={val.openable ?? true}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
