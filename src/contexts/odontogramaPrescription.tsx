import { createContext, ReactNode, useState } from 'react';

interface IodontogramaPrescription {
  openodontogramaPrescription: () => void;
  closeodontogramaPrescription: () => void;
  odontogramaVisible: boolean;
}

export const OdontogramaPrescription = createContext<IodontogramaPrescription>({
  openodontogramaPrescription: () => {},
  closeodontogramaPrescription: () => {},
  odontogramaVisible: true,
});

interface IodontogramaPrescriptionProvider {
  children: ReactNode;
}

const odontogramaPrescriptionProvider = ({ children }: IodontogramaPrescriptionProvider) => {
  const [odontogramaVisible, setodontogramaPrescriptionVisible] = useState<boolean>(false);

  const openodontogramaPrescription = () => {
    setodontogramaPrescriptionVisible(true);
  };

  const closeodontogramaPrescription = () => {
    setodontogramaPrescriptionVisible(false);
  };

  return (
    <OdontogramaPrescription.Provider value={{ closeodontogramaPrescription, openodontogramaPrescription, odontogramaVisible }}>
      {children}
    </OdontogramaPrescription.Provider>
  );
};

export default odontogramaPrescriptionProvider;
