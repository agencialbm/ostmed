import React from 'react';
import './Toggle.css';

interface ToggleProps {
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
}

export const ToggleOn: React.FC<ToggleProps> = ({ isOn, onToggle }) => {
  const handleClick = () => {
    const newIsOn = !isOn;
    onToggle(newIsOn);
  };

  const toggleClassName = `boton-chave ${isOn ? 'boton-chave--ligado' : 'boton-chave--desligado'}`;
  const textClassName = `toggle-text ${isOn ? 'toggle-text--right' : 'toggle-text--left'}`;

  return (
    <div className={toggleClassName} onClick={handleClick}>
      <div className="botao-chave" />
      <h5 className={textClassName}>{isOn ? 'Sim' : 'Não'}</h5>
    </div>
  );
};
