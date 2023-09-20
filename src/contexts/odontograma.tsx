import { createContext, ReactNode, useState } from 'react';

interface IOdontograma {
  openOdontograma: () => void;
  closeOdontograma: () => void;
  odontogramaVisible: boolean;
}

export const Odontograma = createContext<IOdontograma>({
  openOdontograma: () => {},
  closeOdontograma: () => {},
  odontogramaVisible: true,
});

interface IOdontogramaProvider {
  children: ReactNode;
}

const OdontogramaProvider = ({ children }: IOdontogramaProvider) => {
  const [odontogramaVisible, setOdontogramaVisible] = useState<boolean>(false);

  const openOdontograma = () => {
    setOdontogramaVisible(true);
  };

  const closeOdontograma = () => {
    setOdontogramaVisible(false);
  };

  return (
    <Odontograma.Provider value={{ closeOdontograma, openOdontograma, odontogramaVisible }}>
      {children}
    </Odontograma.Provider>
  );
};

export default OdontogramaProvider;
