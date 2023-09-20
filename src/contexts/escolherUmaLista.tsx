import { createContext, ReactNode, useState } from 'react';

interface IEscolherUmaLista {
  openEscolherUmaLista: () => void;
  closeEscolherUmaLista: () => void;
  escolherUmaListaVisible: boolean;
}

export const EscolherUmaLista = createContext<IEscolherUmaLista>({
  openEscolherUmaLista: () => {},
  closeEscolherUmaLista: () => {},
  escolherUmaListaVisible: true,
});

interface IEscolherUmaListaProvider {
  children: ReactNode;
}

const EscolherUmaListaProvider = ({ children }: IEscolherUmaListaProvider) => {
  const [escolherUmaListaVisible, setEscolherUmaListaVisible] = useState<boolean>(false);

  const openEscolherUmaLista = () => {
    setEscolherUmaListaVisible(true);
  };

  const closeEscolherUmaLista = () => {
    setEscolherUmaListaVisible(false);
  };

  return (
    <EscolherUmaLista.Provider value={{ closeEscolherUmaLista, openEscolherUmaLista, escolherUmaListaVisible }}>
      {children}
    </EscolherUmaLista.Provider>
  );
};

export default EscolherUmaListaProvider;
