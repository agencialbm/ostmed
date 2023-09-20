import { createContext, ReactNode, useState } from 'react';

interface ITarefaCard {
  openTarefaCard: () => void;
  closeTarefaCard: () => void;
  tarefaVisibleCard: boolean;
}

export const TarefaCardContext = createContext<ITarefaCard>({
  openTarefaCard: () => {},
  closeTarefaCard: () => {},
  tarefaVisibleCard: false,
});

interface ITarefaContextProvider {
  children: ReactNode;
}

const TarefaCardContextProvider = ({ children }: ITarefaContextProvider) => {
  const [tarefaVisibleCard, settarefaVisibleCard] = useState<boolean>(false);

  const openTarefaCard = () => {
    settarefaVisibleCard(true);
  };

  const closeTarefaCard = () => {
    settarefaVisibleCard(false);
  };

  return (
    <TarefaCardContext.Provider value={{ closeTarefaCard, openTarefaCard, tarefaVisibleCard }}>
      {children}
    </TarefaCardContext.Provider>
  );
};

export default TarefaCardContextProvider;
