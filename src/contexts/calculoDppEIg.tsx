import { createContext, ReactNode, useState } from 'react';

interface ICalculoDppEIg {
  openCalculoDppEIg: () => void;
  closeCalculoDppEIg: () => void;
  calculoDppEIgVisible: boolean;
}

export const CalculoDppEIg = createContext<ICalculoDppEIg>({
  openCalculoDppEIg: () => {},
  closeCalculoDppEIg: () => {},
  calculoDppEIgVisible: true,
});

interface ICalculoDppEIgProvider {
  children: ReactNode;
}

const CalculoDppEIgProvider = ({ children }: ICalculoDppEIgProvider) => {
  const [calculoDppEIgVisible, setCalculoDppEIgVisible] = useState<boolean>(false);

  const openCalculoDppEIg = () => {
    setCalculoDppEIgVisible(true);
  };

  const closeCalculoDppEIg = () => {
    setCalculoDppEIgVisible(false);
  };

  return (
    <CalculoDppEIg.Provider value={{ closeCalculoDppEIg, openCalculoDppEIg, calculoDppEIgVisible }}>
      {children}
    </CalculoDppEIg.Provider>
  );
};

export default CalculoDppEIgProvider;
