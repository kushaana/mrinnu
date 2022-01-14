import "./App.css";
import { Grid } from "@mui/material";
import { BirthdayCard } from "./components/BirthdayCard/BirthdayCard";
import Hero from "./components/Hero/Hero";
import Confetti from "./components/Confetti/Confetti";

const data = [
  {
    display: require("./assets/images/sri.jpg"),
    greeting: "Srinidhi",
    wish: "Click for a recap of one year that feels like half.",
    name: "Dear minu babi bb babeh bhubber bbrrr b-",
    canvaLink: "https://www.canva.com/design/DAE1Q-bXTZo/view?embed",
    song: new Audio(require("./assets/sounds/sri.mp3")),
  },
  {
    display: require("./assets/images/kush.png"),
    greeting: "Kush",
    name: "Dear munnu",
    wish: "Click here for more munnu, and a little bit of chunnu",
    canvaLink: "https://www.canva.com/design/DAE1aZ1AcG4/view?embed",
    song: new Audio(require("./assets/sounds/kush.mp3")),
  },
  {
    display: require("./assets/images/anitej.png"),
    greeting: "Anitej",
    wish: "Click here to get ice cream on your face",
    name: "Dear Mrinal",
    canvaLink: "https://www.canva.com/design/DAE1Z0AjMc4/view?embed",
    song: new Audio(require("./assets/sounds/anitej.mp3")),
  },
  {
    display: require("./assets/images/mridul.jpeg"),
    greeting: "Mrudul",
    wish: "pvt roomie time 🥰 all others look away 😡",
    canvaLink: "https://www.canva.com/design/DAE1bnRCwSU/view?embed",
    song: new Audio(require("./assets/sounds/mridul.mp3")),
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
    display: require("./assets/images/daman.jpeg"),
    greeting: "Behroopiya",
    wish: "Agar tune galat guess kiya to tune ekdum hagg diya",
    song: new Audio(require("./assets/sounds/daman.mp3")),
    canvaLink: "https://www.canva.com/design/DAE1cf3bLUI/view?embed",
  },
  {
    display: require("./assets/images/baddo.jpeg"),
    greeting: "Baddo",
    wish: "I fell for you on those lazy sunny afternoons in ara garden ♥️",
    name: "Dear mrunal thaggur",
    canvaLink: "https://www.canva.com/design/DAE1Vs7WcUs/view?embed",
    song: new Audio(require("./assets/sounds/baddo.mp3")),
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
    display: require("./assets/images/kas.jpeg"),
    greeting: "Kasvi",
    wish: "Click for handmade goodies",
    name: "",
    canvaLink: "https://www.canva.com/design/DAE1V7WSFl8/view?embed",
    song: new Audio(require("./assets/sounds/kasvi.mp3")),
  },
  {
    // text
    display: require("./assets/images/shivang.jpeg"),
    greeting: "Shivang",
    wish: "Happy birthday! Hope you have a great year ahead. Here’s to more parties and trips with you ❤️",
    name: "",
    canvaLink: "https://www.canva.com/design/DAE1WhIavts/view?embed",
    song: new Audio(require("./assets/sounds/shivang.mp3")),
  },
  {
    display: require("./assets/images/maria.jpeg"),
    greeting: "Maria",
    wish: "Click here for a reminder of how many 21 parties you attended",
    name: "",
    canvaLink: "https://www.canva.com/design/DAE1UbNQjTU/view?embed",
    song: new Audio(require("./assets/sounds/maria.mp3")),
  },
  {
    // text, song, drawing
    greeting: "Gayatri",
    wish: "",
    name: "",
    canvaLink: "https://www.canva.com/design/DAE1aMPv76s/view?embed",
  },
  {
    // canva, song
    display: require("./assets/images/ridhi.gif"),
    greeting: "Riddhi",
    wish: "Forg",
    name: "Dear Mrinu",
  },
  {
    display: require("./assets/images/nishat.jpeg"),
    greeting: "Nishat",
    name: "10 rupay ki pepsi mera bhai sabse sexy",
    wish: "happy birthday to you!",
  },
  {
    display: require("./assets/images/pranav.jpeg"),
    greeting: "Pranav",
    wish: "If you didn't exist, I probably would've been straight. Happy Birthday Jaanuuuu, mera Shona, mera Babu, mera bhosda",
    vid: require("./assets/images/pranav.mp4"),
  },
  {
    // text
    display: require("./assets/images/ritvik.jpeg"),
    greeting: "Ritvik",
    vid: require("./assets/images/ritvik.mp4"),
  },
  {
    // text
    display: require("./assets/images/kaustabh.jpeg"),
    greeting: "Kaustabh",
    canvaLink: "https://www.canva.com/design/DAE1ce0t7GE/view?embed",
  },
  {
    display: require("./assets/images/dheerja.jpeg"),
    greeting: "Dheerja",
    name: "Happy bday Mrinuuu❤️",
    wish: "Thank you for existing and making my roomie the happiest! Mil lo usse jaldiiii😂 also looking forward to vibing on honey singh songs sometime again soon!!!!",
  },
  {
    // text
    display: require("./assets/images/jc.jpeg"),
    greeting: "JC",
    wish: "",
    name: "",
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
                vid={val.vid ?? null}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default App;
