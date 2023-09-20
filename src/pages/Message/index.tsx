import { useState } from 'react';
import { columnsMessageTable, dataMessageView } from '@/mocks/chairs';
import { HomeHeader } from './../Home/styled';
import {
  HeadeTable,
  ContainerTable,
  ContainerCards,
  Container,
  ContainerConversations,
  ContainerConv,
  ContainerMaster,
  TextMessage
} from './styles';
import { Table } from './components/Table/index';
import { Card } from './components/card/card';
import Header from '@/components/Header';
import Conversations from './components/Conversations';

export function Message() {
  const [lista, setLista] = useState(true);

  return (
    <>
      <Container>
        <HomeHeader>
          <p></p>
          <Header />
        </HomeHeader>
        <ContainerMaster>
          <ContainerConv>
            <TextMessage>
              <p>Conversas</p>
            </TextMessage>
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
          </ContainerConv>
          <ContainerTable>
            <HeadeTable>
              <p>Recados</p>
            </HeadeTable>
            {lista ? (
              <ContainerTable>
                <Table columns={columnsMessageTable} data={dataMessageView} />
              </ContainerTable>
            ) : (
              <ContainerCards>
                <Card />
                <Card />
                <Card />
                <Card />
              </ContainerCards>
            )}
          </ContainerTable>
        </ContainerMaster>
      </Container>
    </>
  );
}
