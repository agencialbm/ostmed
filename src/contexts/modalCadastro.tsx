import { createContext, ReactNode, useState } from 'react';

interface IModalCadastro {
  openModalCadastro: () => void;
  closeModalCadastro: () => void;
  modalVisibleCadastro: boolean;
}

export const ModalCadastroContext = createContext<IModalCadastro>({
  openModalCadastro: () => {},
  closeModalCadastro: () => {},
  modalVisibleCadastro: false,
});

interface IModalCadastroContextProvider {
  children: ReactNode;
}

const ModalCadastroContextProvider = ({ children }: IModalCadastroContextProvider) => {
  const [modalVisibleCadastro, setModalVisibleCadastro] = useState<boolean>(false);

  const openModalCadastro = () => {
    setModalVisibleCadastro(true);
  };

  const closeModalCadastro = () => {
    setModalVisibleCadastro(false);
  };

  return (
    <ModalCadastroContext.Provider value={{ modalVisibleCadastro, openModalCadastro, closeModalCadastro }}>
      {children}
    </ModalCadastroContext.Provider>
  );
};

export default ModalCadastroContextProvider;
