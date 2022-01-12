import "./BirthdayCard.css";
import * as React from "react";
import { Slide, Dialog, Toolbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import balloon from "../../assets/images/balloon.jpg";

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
  return <div className="cardFront">{display || <Balloons />}</div>;
};

const CardInside = (props) => {
  return (
    <div className="cardInside">
      <h3 className="back">{props.greeting || "HAPPY BIRTHDAY!"}</h3>
      <p>{props.name || "Dear Mrinal"},</p>
      <p>
        {props.wish ||
          "Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true."}
      </p>
      <p className="name">{props.name || "xxx"}</p>
    </div>
  );
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const BirthdayCard = (props) => {
  const [open, setOpen] = React.useState(false);

  if (props.song) props.song.loop = true;

  const handleClickOpen = () => {
    setOpen(true);
    props.song?.load();
    props.song?.play();
  };

  const handleClose = () => {
    props.song?.pause();
    setOpen(false);
  };

  return (
    <>
      <div className="birthdayCard" onClick={handleClickOpen}>
        <CardFront
          display={
            <img
              className="display"
              src={props.display ?? balloon}
              alt={"balloon"}
            />
          }
        />
        <CardInside greeting={"HBD"} />
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
        <iframe
          title="canva"
          src="https://www.canva.com/design/DAE1Re49hxw/view?embed"
          height={"100%"}
        ></iframe>
      </Dialog>
    </>
  );
};
