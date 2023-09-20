import { useState } from 'react';
import { columnsReturnListView, dataReturnListView } from '@/mocks/chairs';
import { HomeHeader } from './../Home/styled';
import ButtonAdd from './components/buttonAdd';
import {
  HeadeTable,
  TableSelectec,
  ContainerTable,
  ContainerCards,
  Container
} from './styles';
import { Table } from './components/table/index';
import { Card } from './components/card/card';
import ButtonPagination from '@/components/ButtonPagination';
import Header from '@/components/Header';
import ButtonContact from './components/buttonContact';

export function ContactReturn() {
  const [lista, setLista] = useState(true);


  return (
    <>
      <Container>
        <HomeHeader>
          <p>Dr. Wesley Lima - Osteopatia</p>
          <Header />
        </HomeHeader>

        <HeadeTable>
          <p>Retorno do contato</p>
        </HeadeTable>
        <TableSelectec>
          <ButtonAdd />
          <ButtonContact />
        </TableSelectec>
        {lista ? (
          <ContainerTable>
            <Table
              columns={columnsReturnListView}
              data={dataReturnListView}
            />
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
          </ContainerCards>
        )}
        <ButtonPagination />
      </Container>
    </>
  );
}
