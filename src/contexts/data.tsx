import { createContext, ReactNode, useState } from 'react';

interface IData {
  openData: () => void;
  closeData: () => void;
  dataVisible: boolean;
}

export const Data = createContext<IData>({
  openData: () => {},
  closeData: () => {},
  dataVisible: true,
});

interface IDataProvider {
  children: ReactNode;
}

const DataProvider = ({ children }: IDataProvider) => {
  const [dataVisible, setDataVisible] = useState<boolean>(false);

  const openData = () => {
    setDataVisible(true);
  };

  const closeData = () => {
    setDataVisible(false);
  };

  return (
    <Data.Provider value={{ closeData, openData, dataVisible }}>
      {children}
    </Data.Provider>
  );
};

export default DataProvider;
