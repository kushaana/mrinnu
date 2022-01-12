import React from "react";

function Heading({ text, arc, radius }) {
  const characters = text.split("");
  const degree = arc / characters.length;

  return (
    <h1>
      {characters.map((char, i) => (
        <span
          key={`heading-span-${i}`}
          style={{
            height: `${radius}px`,
            transform: `rotate(${degree * i - arc / 2}deg)`,
            transformOrigin: `0 ${radius}px 0`,
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
}

Heading.defaultProps = {
  arc: 120,
  radius: 400,
};

export default Heading;
