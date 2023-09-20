import { createContext, ReactNode, useState } from 'react';

interface IBuscarTabelas {
  openBuscarTabelas: () => void;
  closeBuscarTabelas: () => void;
  buscarTabelasVisible: boolean;
}

export const BuscarTabelas = createContext<IBuscarTabelas>({
  openBuscarTabelas: () => {},
  closeBuscarTabelas: () => {},
  buscarTabelasVisible: true,
});

interface IBuscarTabelasProvider {
  children: ReactNode;
}

const BuscarTabelasProvider = ({ children }: IBuscarTabelasProvider) => {
  const [buscarTabelasVisible, setBuscarTabelasVisible] = useState<boolean>(false);

  const openBuscarTabelas = () => {
    setBuscarTabelasVisible(true);
  };

  const closeBuscarTabelas = () => {
    setBuscarTabelasVisible(false);
  };

  return (
    <BuscarTabelas.Provider value={{ closeBuscarTabelas, openBuscarTabelas, buscarTabelasVisible }}>
      {children}
    </BuscarTabelas.Provider>
  );
};

export default BuscarTabelasProvider;
