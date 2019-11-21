import React from 'react';
import './InteractionButtons.css';

const InteractionButtons = (props) => {
  const buttons = props.buttons.map((icon, i) => {
    return (
      <button className="button" key={ i }>{icon}</button>
    );
  });

  return (
    <div>{buttons}</div>
  );
};

export default InteractionButtons;