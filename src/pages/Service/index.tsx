import { Icon } from '@/components/Icon';

import { CardList } from './Components/card/card';
import { useState } from 'react';
import { columnsServiceTable, dataServiceView } from '@/mocks/chairs';
import {
  Container,
  Text,
  Title,
  ContainerTable,
  ContainerCards,
  ContainerText,
  ContainerLeft,
  ContainerRight,
  ContainerTop,
  ContainerBottom,
  ContainerOption,
  ContainerButton,
  ContainerAction,
  TextRight,
  ButtonMaster,
  ButtonList
} from './styles';
import { Table } from './Components/Table';
import Header from '@/components/Header';
import Button from './Components/Button';
import { Modal } from './Components/Modal';

export default function Service() {
  const [lista, setLista] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const handleVisible = () => {
    setModalVisible(true);
  };

  const handleVisibleModal = () => {
    setModalVisible(false);
  };
  const handleLista = () => {
    setLista(true);
  };

  const handleCard = () => {
    setLista(false);
  };
  return (
    <>
      {modalVisible && (
        <Modal visible={modalVisible} onClose={() => setModalVisible(false)} />
      )}
      <Container>
        <Header />
        <ContainerTop>
          <ContainerLeft>
            <ContainerText>
              <Text>
                <p>
                  <strong>Clínica: &nbsp;</strong> lbm <br />
                  <strong>Especialidade: &nbsp;</strong>Osteopatia
                  <br />
                  <strong>Tipo de atendimento: &nbsp;</strong>
                  Consulta
                </p>
                <p>
                  <strong>Especialista: &nbsp;</strong>
                  Dr. Wesley
                  <br />
                  <strong>Número do conselho: &nbsp;</strong>
                  <br />
                  <strong> Conselho profissional: &nbsp;</strong>
                </p>
                <p>
                  <strong> Data da consulta: &nbsp;</strong>
                  17/01/2023
                  <br />
                  <strong>Horário de início: &nbsp;</strong>
                  10h27
                  <br />
                  <strong>Horário de início: &nbsp;</strong>
                  10h27
                </p>
              </Text>
            </ContainerText>
            <ContainerBottom>
              <Title>Atendimento:</Title>
              <p>Consulta</p>
              <Title>Documentos criados neste atendimento:</Title>
              <p>Procedimento</p>
            </ContainerBottom>
            {lista ? (
              <ContainerTable>
                <p>Guia 1</p>
                <Table columns={columnsServiceTable} data={dataServiceView} />
              </ContainerTable>
            ) : (
              <ContainerCards>
                <CardList />
                <CardList />
              </ContainerCards>
            )}
          </ContainerLeft>
          <ContainerRight>
            <ContainerAction>
              <ContainerText>
                <Title>Próximas ações</Title>
                <p>Adicione o paciente atendido em uma automação</p>
                <ContainerOption>
                  <input type="checkbox" />
                  <TextRight>Retorno em 1 mês</TextRight>
                </ContainerOption>
                <ContainerOption>
                  <input type="checkbox" />
                  <TextRight>Retorno em 2 mês</TextRight>
                </ContainerOption>
                <ContainerOption>
                  <input type="checkbox" />
                  <TextRight>Retorno em 3 mês</TextRight>
                </ContainerOption>
                <ContainerOption>
                  <input type="checkbox" />
                  <TextRight>Retorno em 4 mês</TextRight>
                </ContainerOption>
                <ContainerOption>
                  <input type="checkbox" />
                  <TextRight>Retorno em 5 mês</TextRight>
                </ContainerOption>
                <ContainerOption>
                  <input type="checkbox" />
                  <TextRight>Retorno em 6 mês</TextRight>
                </ContainerOption>
                <ContainerOption>
                  <input type="checkbox" />
                  <TextRight>Retorno em 1 ano</TextRight>
                </ContainerOption>
                <ContainerOption>
                  <input type="checkbox" />
                  <TextRight>Retorno em 2 anos</TextRight>
                </ContainerOption>
                <ContainerButton>
                  <p>ou agende um próximo atendimento:</p>
                  <ButtonMaster>
                    <ButtonList onClick={handleVisible}>Agendar</ButtonList>
                  </ButtonMaster>
                </ContainerButton>
              </ContainerText>
              <Button />
            </ContainerAction>
          </ContainerRight>
        </ContainerTop>
      </Container>
    </>
  );
}
