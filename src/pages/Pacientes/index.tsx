import { Icon } from '@/components/Icon';
import { Input } from '@/components/Input';
import { columnsChairView, dataChairView } from '@/mocks/chairs';
import { useState, useContext } from 'react';
import { HomeHeader, HomeInput } from '../Home/styled';
import { Card } from './components/card/card';
import { Table } from './components/table/Table';
import { ContainerCards, ContainerTable, HeadeTable, Container } from './styled';
import { ModalCadastroContextPaciente } from '@/contexts/modalCadastroPaciente';
import { ModalCadastroPaciente } from '@/components/ModalCadastroPaciente';
import { EditeTableModalContext } from '@/contexts/modalEditeTable';
import { PacientesModal } from '@/components/Pacientes';
import ButtonPagination from '@/components/ButtonPagination';
import Header from '@/components/Header';

export function Pacientes() {
  const [inputValue, setInputValue] = useState('');
  const [lista, setLista] = useState(true);
  const { modalVisibleCadastroPaciente, openModalCadastroPaciente } =
    useContext(ModalCadastroContextPaciente);
  const { modalVisibleEditeTable } = useContext(EditeTableModalContext);

  const handleLista = () => {
    setLista(true);
  };

  const handleCard = () => {
    setLista(false);
  };

  const openModalCadastro = () => {
    openModalCadastroPaciente();
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  if (modalVisibleEditeTable) {
    return <PacientesModal />;
  }

  return (
    <>
      <Container>
        {modalVisibleCadastroPaciente ? (
          <ModalCadastroPaciente
            onClose={() => false}
            visible={modalVisibleCadastroPaciente}
          />
        ) : (
          <>
            <HomeHeader>
              <p>Dr. Wesley Lima - Osteopatia</p>
              <Header />
            </HomeHeader>

            <HeadeTable>
              <p>Pacientes</p>
              <text>10 paciente (s) cadastrado (s)</text>
              <div>
                <button onClick={openModalCadastro} className="new">
                  + Novo paciente
                </button>
                <button onClick={handleLista}>
                  <Icon name="lista" />
                </button>
                <button onClick={handleCard}>
                  <Icon name="cards" />
                </button>
              </div>
            </HeadeTable>

            {lista ? (
              <ContainerTable>
                <Table columns={columnsChairView} data={dataChairView} />
              </ContainerTable>
            ) : (
              <ContainerCards>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </ContainerCards>
            )}
          </>
        )}

        <ButtonPagination />
      </Container>
    </>
  );
}
