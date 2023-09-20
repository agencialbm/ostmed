import { createContext, ReactNode, useState } from 'react';

interface ITarefa {
  openTarefaTextoLongo: () => void;
  closeTarefaTextoLongo: () => void;
  textoLongoVisible: boolean;
}

export const TextoLongo = createContext<ITarefa>({
  openTarefaTextoLongo: () => {},
  closeTarefaTextoLongo: () => {},
  textoLongoVisible: true,
});

interface ITextoLongoProvider {
  children: ReactNode;
}

const TextoLongoProvider = ({ children }: ITextoLongoProvider) => {
  const [textoLongoVisible, setTextoLongoVisible] = useState<boolean>(false);

  const openTarefaTextoLongo = () => {
    setTextoLongoVisible(true);
  };

  const closeTarefaTextoLongo = () => {
    setTextoLongoVisible(false);
  };

  return (
    <TextoLongo.Provider value={{ closeTarefaTextoLongo, openTarefaTextoLongo, textoLongoVisible }}>
      {children}
    </TextoLongo.Provider>
  );
};

export default TextoLongoProvider;
