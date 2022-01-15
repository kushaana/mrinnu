import "./App.css";
import { Curtain } from "./components/Curtain/Curtain";

const mainSong = new Audio(require("./assets/sounds/nothing.mp3"));
mainSong.loop = true;

function App() {
  return (
    <>
      <Curtain mainSong={mainSong} />
      {/* <Confetti />
        <Hero />
        <div className="bg">
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
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
                />
              </Grid>
            ))}
          </Grid>
        </div> */}
    </>
  );
}

export default App;
