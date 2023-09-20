import { createContext, ReactNode, useState } from 'react';

interface IPrescricaoDeOculos {
  openPrescricaoDeOculos: () => void;
  closePrescricaoDeOculos: () => void;
  prescricaoDeOculosVisible: boolean;
}

export const PrescricaoDeOculos = createContext<IPrescricaoDeOculos>({
  openPrescricaoDeOculos: () => {},
  closePrescricaoDeOculos: () => {},
  prescricaoDeOculosVisible: true,
});

interface IPrescricaoDeOculosProvider {
  children: ReactNode;
}

const PrescricaoDeOculosProvider = ({ children }: IPrescricaoDeOculosProvider) => {
  const [prescricaoDeOculosVisible, setPrescricaoDeOculosVisible] = useState<boolean>(false);

  const openPrescricaoDeOculos = () => {
    setPrescricaoDeOculosVisible(true);
  };

  const closePrescricaoDeOculos = () => {
    setPrescricaoDeOculosVisible(false);
  };

  return (
    <PrescricaoDeOculos.Provider value={{ closePrescricaoDeOculos, openPrescricaoDeOculos, prescricaoDeOculosVisible }}>
      {children}
    </PrescricaoDeOculos.Provider>
  );
};

export default PrescricaoDeOculosProvider;
