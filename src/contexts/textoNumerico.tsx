import { createContext, ReactNode, useState } from 'react';

interface ITextoNumerico {
  openTextoNumerico: () => void;
  closeTextoNumerico: () => void;
  textoNumericoVisible: boolean;
}

export const TextoNumerico = createContext<ITextoNumerico>({
  openTextoNumerico: () => {},
  closeTextoNumerico: () => {},
  textoNumericoVisible: true,
});

interface ITextoNumericoProvider {
  children: ReactNode;
}

const TextoNumericoProvider = ({ children }: ITextoNumericoProvider) => {
  const [textoNumericoVisible, setTextoNumericoVisible] = useState<boolean>(false);

  const openTextoNumerico = () => {
    setTextoNumericoVisible(true);
  };

  const closeTextoNumerico = () => {
    setTextoNumericoVisible(false);
  };

  return (
    <TextoNumerico.Provider value={{ closeTextoNumerico, openTextoNumerico, textoNumericoVisible }}>
      {children}
    </TextoNumerico.Provider>
  );
};

export default TextoNumericoProvider;
