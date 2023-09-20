import React, { useState } from 'react';
import './Toggle.css';

interface ToggleProps {
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = ({ isOn, onToggle }) => {
  const handleClick = () => {
    const newIsOn = !isOn;
    onToggle(newIsOn);
  };

  const toggleClassName = `toggle ${isOn ? 'on' : 'off'}`;

  return (
    <div className={toggleClassName} onClick={handleClick}>
      <div className="toggle-button" />
    </div>
  );
};
