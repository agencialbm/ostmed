import { createContext, ReactNode, useState } from 'react';

interface IModalDespesa {
  openModalDespesa: () => void;
  closeModalDespesa: () => void;
  modalVisibleDespesa: boolean;
}

export const DespesaContext = createContext<IModalDespesa>({
  openModalDespesa: () => {},
  closeModalDespesa: () => {},
  modalVisibleDespesa: false,
});

interface IModalContextProvider {
  children: ReactNode;
}

const DespesaContextProvider = ({ children }: IModalContextProvider) => {
  const [modalVisibleDespesa, setModalVisible] = useState<boolean>(false);

  const openModalDespesa = () => {
    setModalVisible(true);
  };

  const closeModalDespesa = () => {
    setModalVisible(false);
  };

  return (
    <DespesaContext.Provider value={{ modalVisibleDespesa, openModalDespesa, closeModalDespesa }}>
      {children}
    </DespesaContext.Provider>
  );
};

export default DespesaContextProvider;
