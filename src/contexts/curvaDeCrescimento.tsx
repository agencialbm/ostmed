import { createContext, ReactNode, useState } from 'react';

interface ICurvaDeCrescimento {
  openCurvaDeCrescimento: () => void;
  closeCurvaDeCrescimento: () => void;
  curvaDeCrescimentoVisible: boolean;
}

export const CurvaDeCrescimento = createContext<ICurvaDeCrescimento>({
  openCurvaDeCrescimento: () => {},
  closeCurvaDeCrescimento: () => {},
  curvaDeCrescimentoVisible: true,
});

interface ICurvaDeCrescimentoProvider {
  children: ReactNode;
}

const CurvaDeCrescimentoProvider = ({ children }: ICurvaDeCrescimentoProvider) => {
  const [curvaDeCrescimentoVisible, setCurvaDeCrescimentoVisible] = useState<boolean>(false);

  const openCurvaDeCrescimento = () => {
    setCurvaDeCrescimentoVisible(true);
  };

  const closeCurvaDeCrescimento = () => {
    setCurvaDeCrescimentoVisible(false);
  };

  return (
    <CurvaDeCrescimento.Provider value={{ closeCurvaDeCrescimento, openCurvaDeCrescimento, curvaDeCrescimentoVisible }}>
      {children}
    </CurvaDeCrescimento.Provider>
  );
};

export default CurvaDeCrescimentoProvider;
