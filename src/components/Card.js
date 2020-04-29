import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-gray dib br3 pa3 ma2 grow dim bw2 shadow-5">
      <img alt="Robots" src={`https://robohash.org/sets=1,2/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
