import { createContext, ReactNode, useState } from 'react';

interface ICadastro {
  openCadastro: () => void;
  closeCadastro: () => void;
  Cadastro: boolean;
}

export const CadastroContext = createContext<ICadastro>({
  openCadastro: () => {},
  closeCadastro: () => {},
  Cadastro: false,
});

interface IModalContextProvider {
  children: ReactNode;
}

const CadastroContextProvider = ({ children }: IModalContextProvider) => {
  const [Cadastro, setCadastro] = useState<boolean>(false);

  const openCadastro = () => {
    setCadastro(true);
  };

  const closeCadastro = () => {
    setCadastro(false);
  };

  return (
    <CadastroContext.Provider value={{ Cadastro, openCadastro, closeCadastro }}>
      {children}
    </CadastroContext.Provider>
  );
};

export default CadastroContextProvider;
