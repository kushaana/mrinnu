import "./App.css";
import { Grid } from "@mui/material";
import { BirthdayCard } from "./components/BirthdayCard/BirthdayCard";
import Hero from "./components/Hero/Hero";
import Confetti from "./components/Confetti/Confetti";

const data = [
  {
    display: require("./assets/images/sri.jpg"),
    greeting: "Srinidhi",
    wish: "Click for a recap for one year that feels like half.",
    name: "Dear babi bb babeh bhubber bbrrr b-",
    canvaLink: "https://www.canva.com/design/DAE1Q-bXTZo/view?embed",
    song: new Audio(require("./assets/sounds/sri.mp3")),
  },
  {
    display: require("./assets/images/sam.jpeg"),
    greeting: "Bhoskar",
    canvaLink: "https://www.canva.com/design/DAE1UUh0wrI/view?embed",
    wish: "Tap to cum inside",
    name: "Dear thokar",
    song: new Audio(require("./assets/sounds/sam.mp3")),
  },
  {
    display: require("./assets/images/ishika.jpeg"),
    greeting: "Ishika",
    wish: "Click here and kindly don’t revert",
    name: "",
    canvaLink: "https://www.canva.com/design/DAE1UuavyzU/view?embed",
    song: new Audio(require("./assets/sounds/ishika.mp3")),
  },
  {
    display: require("./assets/images/maria.jpeg"),
    greeting: "Maria",
    wish: "Click here for a reminder of many 21 parties you attended",
    name: "",
    canvaLink: "https://www.canva.com/design/DAE1UbNQjTU/view?embed",
    song: new Audio(require("./assets/sounds/maria.mp3")),
  },
  {
    display: require("./assets/images/kas.jpeg"),
    greeting: "Kasvi",
    wish: "",
    name: "",
    canvaLink: "https://www.canva.com/design/DAE1V7WSFl8/view?embed",
  },
  {
    display: require("./assets/images/baddo.jpeg"),
    greeting: "Baddo",
    wish: "",
    name: "Dear mrunal thaggur",
    canvaLink: "https://www.canva.com/design/DAE1Vs7WcUs/view?embed",
    song: new Audio(require("./assets/sounds/baddo.mp3")),
  },
  {
    display: require("./assets/images/ridhi.gif"),
    greeting: "Riddhi",
    wish: "Forg",
    name: "Dear Mrinu",
  },
];

function App() {
  return (
    <>
      <Confetti />
      <Hero />
      <div className="bg">
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data.map((val, index) => (
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
              <BirthdayCard
                display={val.display ?? ""}
                greeting={val.greeting ?? ""}
                wish={val.wish ?? ""}
                name={val.name ?? ""}
                canvaLink={val.canvaLink ?? ""}
                song={val.song ?? null}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default App;
