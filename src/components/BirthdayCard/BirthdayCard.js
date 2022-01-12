import "./BirthdayCard.css";
import balloon from "../../assets/images/balloon.jpg";

const Balloons = () => {
  return (
    <div class="balloons">
      <div class="balloonOne"></div>
      <div class="balloonTwo"></div>
      <div class="balloonThree"></div>
      <div class="balloonFour"></div>
    </div>
  );
};

const CardFront = ({ display }) => {
  return <div class="cardFront">{display || <Balloons />}</div>;
};

const CardInside = (props) => {
  return (
    <div class="cardInside">
      <h3 class="back">{props.greeting || "HAPPY BIRTHDAY!"}</h3>
      <p>{props.name || "Dear Mrinal"},</p>
      <p>
        {props.wish ||
          "Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true."}
      </p>
      <p class="name">{props.name || "xxx"}</p>
    </div>
  );
};

export const BirthdayCard = () => {
  return (
    <div class="birthdayCard">
      <CardFront display={<img src={balloon} alt={"balloon"} />} />
      <CardInside greeting={"HBD"} />
    </div>
  );
};
