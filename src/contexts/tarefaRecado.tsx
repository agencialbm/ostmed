import { createContext, ReactNode, useState } from 'react';

interface IModalTarefaRecado {
  openModalTarefaRecado: () => void;
  closeModalTarefaRecado: () => void;
  modalVisibleTarefaRecado: boolean;
}

export const TarefaRecadoModalContext = createContext<IModalTarefaRecado>({
  openModalTarefaRecado: () => {},
  closeModalTarefaRecado: () => {},
  modalVisibleTarefaRecado: false,
});

interface IModalContextProvider {
  children: ReactNode;
}

const TarefaRecadoModalContextProvider = ({ children }: IModalContextProvider) => {
  const [modalVisibleTarefaRecado, setModalVisibleTarefaRecado] = useState<boolean>(false);

  const openModalTarefaRecado = () => {
    setModalVisibleTarefaRecado(true);
  };

  const closeModalTarefaRecado = () => {
    setModalVisibleTarefaRecado(false);
  };

  return (
    <TarefaRecadoModalContext.Provider value={{ modalVisibleTarefaRecado, openModalTarefaRecado, closeModalTarefaRecado }}>
      {children}
    </TarefaRecadoModalContext.Provider>
  );
};

export default TarefaRecadoModalContextProvider;
