import { createContext, ReactNode, useState } from 'react';

interface ICloseProntuario {
  openCloseProntuario: () => void;
  closeCloseProntuario: () => void;
  closeProntuarioVisible: boolean;
}

export const CloseProntuario = createContext<ICloseProntuario>({
  openCloseProntuario: () => {},
  closeCloseProntuario: () => {},
  closeProntuarioVisible: false,
});

interface ICloseProntuarioProvider {
  children: ReactNode;
}

const CloseProntuarioProvider = ({ children }: ICloseProntuarioProvider) => {
  const [closeProntuarioVisible, setCloseProntuarioVisible] = useState<boolean>(false);

  const openCloseProntuario = () => {
    setCloseProntuarioVisible(true);
  };

  const closeCloseProntuario = () => {
    setCloseProntuarioVisible(false);
  };

  return (
    <CloseProntuario.Provider value={{ closeCloseProntuario, openCloseProntuario, closeProntuarioVisible }}>
      {children}
    </CloseProntuario.Provider>
  );
};

export default CloseProntuarioProvider;
