import React from 'react';
import './InteractionButtons.css';

const InteractionButtons = (props) => {
  const buttons = props.buttons.map((icon, i) => {
    return (
      <button className="button">{icon}</button>
    );
  });

  return (
    <span>{buttons}</span>
  );
};

export default InteractionButtons;