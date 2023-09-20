import { createContext, ReactNode, useState } from 'react';

interface IModalCadastroPaciente {
  openModalCadastroPaciente: () => void;
  closeModalCadastroPaciente: () => void;
  modalVisibleCadastroPaciente: boolean;
}

export const ModalCadastroContextPaciente = createContext<IModalCadastroPaciente >({
  openModalCadastroPaciente: () => {},
  closeModalCadastroPaciente: () => {},
  modalVisibleCadastroPaciente: false,
});

interface IModalCadastroContextPacienteProvider {
  children: ReactNode;
}

const ModalCadastroPacienteContextProvider = ({ children }: IModalCadastroContextPacienteProvider) => {
  const [modalVisibleCadastroPaciente, setModalVisibleCadastroPaciente] = useState<boolean>(false);

  const openModalCadastroPaciente = () => {
    setModalVisibleCadastroPaciente(true);
  };

  const closeModalCadastroPaciente = () => {
    setModalVisibleCadastroPaciente(false);
  };

  return (
    <ModalCadastroContextPaciente.Provider value={{ modalVisibleCadastroPaciente, openModalCadastroPaciente, closeModalCadastroPaciente }}>
      {children}
    </ModalCadastroContextPaciente.Provider>
  );
};

export default ModalCadastroPacienteContextProvider;
