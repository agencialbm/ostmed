import { createContext, ReactNode, useState } from 'react';

interface IModalReceita {
  openModalReceita: () => void;
  closeModalReceita: () => void;
  modalVisibleReceita: boolean;
}

export const ReceitaModalContext = createContext<IModalReceita>({
  openModalReceita: () => {},
  closeModalReceita: () => {},
  modalVisibleReceita: false,
});

interface IModalContextProvider {
  children: ReactNode;
}

const ReceitaModalContextProvider = ({ children }: IModalContextProvider) => {
  const [modalVisibleReceita, setModalVisible] = useState<boolean>(false);

  const openModalReceita = () => {
    setModalVisible(true);
  };

  const closeModalReceita = () => {
    setModalVisible(false);
  };

  return (
    <ReceitaModalContext.Provider value={{ modalVisibleReceita, openModalReceita, closeModalReceita }}>
      {children}
    </ReceitaModalContext.Provider>
  );
};

export default ReceitaModalContextProvider;
