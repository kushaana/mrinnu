import "./App.css";
import { Grid } from "@mui/material";
import { BirthdayCard } from "./components/BirthdayCard/BirthdayCard";
import Hero from "./components/Hero/Hero";
import Confetti from "./components/Confetti/Confetti";
import gif from "./assets/images/gif.gif";

const songs = [new Audio(require("./assets/sounds/nothing.mp3"))];

function App() {
  return (
    <>
      <Confetti />
      <Hero />
      <div className="bg">
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BirthdayCard display={gif} song={songs[0]} />
          </Grid>
          {Array.from(Array(15)).map((_, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BirthdayCard />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default App;
