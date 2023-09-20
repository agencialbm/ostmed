import { createContext, ReactNode, useState } from 'react';

interface IOrcamento {
  openOrcamento: () => void;
  closeOrcamento: () => void;
  orcamentoVisible: boolean;
}

export const Orcamento = createContext<IOrcamento>({
  openOrcamento: () => {},
  closeOrcamento: () => {},
  orcamentoVisible: true,
});

interface IOrcamentoProvider {
  children: ReactNode;
}

const OrcamentoProvider = ({ children }: IOrcamentoProvider) => {
  const [orcamentoVisible, setOrcamentoVisible] = useState<boolean>(false);

  const openOrcamento = () => {
    setOrcamentoVisible(true);
  };

  const closeOrcamento = () => {
    setOrcamentoVisible(false);
  };

  return (
    <Orcamento.Provider value={{ closeOrcamento, openOrcamento, orcamentoVisible }}>
      {children}
    </Orcamento.Provider>
  );
};

export default OrcamentoProvider;
