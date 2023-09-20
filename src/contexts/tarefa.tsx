import { createContext, ReactNode, useState } from 'react';

interface ITarefa {
  openTarefa: () => void;
  closeTarefa: () => void;
  tarefaVisible: boolean;
}

export const TarefaContext = createContext<ITarefa>({
  openTarefa: () => {},
  closeTarefa: () => {},
  tarefaVisible: false,
});

interface ITarefaContextProvider {
  children: ReactNode;
}

const TarefaContextProvider = ({ children }: ITarefaContextProvider) => {
  const [tarefaVisible, setTarefaVisible] = useState<boolean>(false);

  const openTarefa = () => {
    setTarefaVisible(true);
  };

  const closeTarefa = () => {
    setTarefaVisible(false);
  };

  return (
    <TarefaContext.Provider value={{ closeTarefa, openTarefa, tarefaVisible }}>
      {children}
    </TarefaContext.Provider>
  );
};

export default TarefaContextProvider;
