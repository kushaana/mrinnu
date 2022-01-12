import "./App.css";
import { Grid } from "@mui/material";
import { BirthdayCard } from "./components/BirthdayCard/BirthdayCard";
import Hero from "./components/Hero/Hero";
import Confetti from "./components/Confetti/Confetti";

function App() {
  return (
    <>
      <Confetti />
      <Hero />
      <div className="bg">
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {Array.from(Array(16)).map((_, index) => (
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
