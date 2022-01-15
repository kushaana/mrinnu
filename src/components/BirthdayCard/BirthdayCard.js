import "./BirthdayCard.css";
import * as React from "react";
import { Slide, Dialog, Toolbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Balloons = () => {
  return (
    <div className="balloons">
      <div className="balloonOne"></div>
      <div className="balloonTwo"></div>
      <div className="balloonThree"></div>
      <div className="balloonFour"></div>
    </div>
  );
};

const CardFront = ({ display }) => {
  return <div className="cardFront">{display}</div>;
};

const CardInside = (props) => {
  return (
    <div className="cardInside">
      <h3 className="back">{props.greeting || "HAPPY BIRTHDAY!"}</h3>
      <p>{props.name || "Dear Mrinal"}</p>
      <p>
        {props.wish ||
          "Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true."}
      </p>
      <p className="name">{props.xoxo ? "xoxo" : ""}</p>
    </div>
  );
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const BirthdayCard = ({
  display,
  greeting,
  wish,
  name,
  canvaLink,
  song,
  mainSong,
  vid,
  xoxo,
  openable,
}) => {
  const [open, setOpen] = React.useState(false);

  if (song) song.loop = true;

  const handleClickOpen = () => {
    setOpen(true);
    mainSong.pause();
    song?.load();
    song?.play();
  };

  const handleClose = () => {
    mainSong.play();
    song?.pause();
    setOpen(false);
  };

  return (
    <>
      <div
        className="birthdayCard"
        onClick={() => {
          if (openable) handleClickOpen();
        }}
      >
        <CardFront
          display={
            display ? (
              <img className="display" src={display} alt={"balloon"} />
            ) : (
              <Balloons />
            )
          }
        />
        <CardInside greeting={greeting} wish={wish} name={name} xoxo={xoxo} />
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Toolbar>
          <IconButton edge="start" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
        {vid ? (
          <video height="100%" controls autoPlay loop>
            <source src={vid} type="video/mp4" />
          </video>
        ) : (
          <iframe title="canva" src={canvaLink} height={"100%"}></iframe>
        )}
      </Dialog>
    </>
  );
};
