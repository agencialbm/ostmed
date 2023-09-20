import { createContext, ReactNode, useState } from 'react';

interface IVerdadeiroOuFalso {
  openVerdadeiroOuFalso: () => void;
  closeVerdadeiroOuFalso: () => void;
  verdadeiroOuFalsoVisible: boolean;
}

export const VerdadeiroOuFalso = createContext<IVerdadeiroOuFalso>({
  openVerdadeiroOuFalso: () => {},
  closeVerdadeiroOuFalso: () => {},
  verdadeiroOuFalsoVisible: true,
});

interface IVerdadeiroOuFalsoProvider {
  children: ReactNode;
}

const VerdadeiroOuFalsoProvider = ({ children }: IVerdadeiroOuFalsoProvider) => {
  const [verdadeiroOuFalsoVisible, setVerdadeiroOuFalsoVisible] = useState<boolean>(false);

  const openVerdadeiroOuFalso = () => {
    setVerdadeiroOuFalsoVisible(true);
  };

  const closeVerdadeiroOuFalso = () => {
    setVerdadeiroOuFalsoVisible(false);
  };

  return (
    <VerdadeiroOuFalso.Provider value={{ closeVerdadeiroOuFalso, openVerdadeiroOuFalso, verdadeiroOuFalsoVisible }}>
      {children}
    </VerdadeiroOuFalso.Provider>
  );
};

export default VerdadeiroOuFalsoProvider;
