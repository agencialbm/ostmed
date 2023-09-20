import { createContext, ReactNode, useState } from 'react';

interface ITextoCurto {
  openTextoCurto: () => void;
  closeTextoCurto: () => void;
  textoCurtoVisible: boolean;
}

export const TextoCurto = createContext<ITextoCurto>({
  openTextoCurto: () => {},
  closeTextoCurto: () => {},
  textoCurtoVisible: true,
});

interface ITextoCurtoProvider {
  children: ReactNode;
}

const TextoCurtoProvider = ({ children }: ITextoCurtoProvider) => {
  const [textoCurtoVisible, setTextoCurtoVisible] = useState<boolean>(false);

  const openTextoCurto = () => {
    setTextoCurtoVisible(true);
  };

  const closeTextoCurto = () => {
    setTextoCurtoVisible(false);
  };

  return (
    <TextoCurto.Provider value={{ closeTextoCurto, openTextoCurto, textoCurtoVisible }}>
      {children}
    </TextoCurto.Provider>
  );
};

export default TextoCurtoProvider;
