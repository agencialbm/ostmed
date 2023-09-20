import { createContext, ReactNode, useState } from 'react';

interface IMultiplaEscolha {
  openMultiplaEscolha: () => void;
  closeMultiplaEscolha: () => void;
  multiplaEscolhaVisible: boolean;
}

export const MultiplaEscolha = createContext<IMultiplaEscolha>({
  openMultiplaEscolha: () => {},
  closeMultiplaEscolha: () => {},
  multiplaEscolhaVisible: true,
});

interface IMultiplaEscolhaProvider {
  children: ReactNode;
}

const MultiplaEscolhaProvider = ({ children }: IMultiplaEscolhaProvider) => {
  const [multiplaEscolhaVisible, setMultiplaEscolhaVisible] = useState<boolean>(false);

  const openMultiplaEscolha = () => {
    setMultiplaEscolhaVisible(true);
  };

  const closeMultiplaEscolha = () => {
    setMultiplaEscolhaVisible(false);
  };

  return (
    <MultiplaEscolha.Provider value={{ closeMultiplaEscolha, openMultiplaEscolha, multiplaEscolhaVisible }}>
      {children}
    </MultiplaEscolha.Provider>
  );
};

export default MultiplaEscolhaProvider;
