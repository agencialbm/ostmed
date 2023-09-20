import { createContext, ReactNode, useState } from 'react';

interface IModalBloquearHorario {
  openModalBloquearHorario: () => void;
  closeModalBloquearHorario: () => void;
  modalBloquearVisibleCard: boolean;
}

export const BloquearHorarioContext = createContext<IModalBloquearHorario>({
  openModalBloquearHorario: () => {},
  closeModalBloquearHorario: () => {},
  modalBloquearVisibleCard: false,
});

interface IModalBloquearHorarioContextProvider {
  children: ReactNode;
}

const ModalBloquearHorarioContextProvider = ({ children }: IModalBloquearHorarioContextProvider) => {
  const [modalBloquearVisibleCard, setbloquearVisibleCard] = useState<boolean>(false);

  const openModalBloquearHorario = () => {
    setbloquearVisibleCard(true);
  };

  const closeModalBloquearHorario = () => {
    setbloquearVisibleCard(false);
  };

  return (
    <BloquearHorarioContext.Provider value={{ modalBloquearVisibleCard, openModalBloquearHorario, closeModalBloquearHorario }}>
      {children}
    </BloquearHorarioContext.Provider>
  );
};

export default ModalBloquearHorarioContextProvider;
