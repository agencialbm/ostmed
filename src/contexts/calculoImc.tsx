import { createContext, ReactNode, useState } from 'react';

interface ICalculoImc {
  openCalculoImc: () => void;
  closeCalculoImc: () => void;
  calculoImcVisible: boolean;
}

export const CalculoImc = createContext<ICalculoImc>({
  openCalculoImc: () => {},
  closeCalculoImc: () => {},
  calculoImcVisible: true,
});

interface ICalculoImcProvider {
  children: ReactNode;
}

const CalculoImcProvider = ({ children }: ICalculoImcProvider) => {
  const [calculoImcVisible, setCalculoImcVisible] = useState<boolean>(false);

  const openCalculoImc = () => {
    setCalculoImcVisible(true);
  };

  const closeCalculoImc = () => {
    setCalculoImcVisible(false);
  };

  return (
    <CalculoImc.Provider value={{ closeCalculoImc, openCalculoImc, calculoImcVisible }}>
      {children}
    </CalculoImc.Provider>
  );
};

export default CalculoImcProvider;
