import { createContext, ReactNode, useState } from 'react';

interface IModalEditeTable {
  EditeTableopenModal: () => void;
  EditeTablecloseModal: () => void;
  modalVisibleEditeTable: boolean;
}

export const EditeTableModalContext = createContext<IModalEditeTable>({
  EditeTableopenModal: () => {},
  EditeTablecloseModal: () => {},
  modalVisibleEditeTable: false,
});

interface IModalContextProvider {
  children: ReactNode;
}

const EditeTableModalContextProvider = ({ children }: IModalContextProvider) => {
  const [modalVisibleEditeTable, setModalVisible] = useState<boolean>(false);

  const EditeTableopenModal = () => {
    setModalVisible(true);
  };

  const EditeTablecloseModal = () => {
    setModalVisible(false);
  };

  return (
    <EditeTableModalContext.Provider value={{ modalVisibleEditeTable, EditeTableopenModal, EditeTablecloseModal }}>
      {children}
    </EditeTableModalContext.Provider>
  );
};

export default EditeTableModalContextProvider;
