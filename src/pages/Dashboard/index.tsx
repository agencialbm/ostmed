import { useState } from 'react';
import {
  columnsContactView,
  dataContactView,
  columnsLateView,
  dataLateView
} from '@/mocks/chairs';
import { HomeHeader } from './../Home/styled';
import ButtonAdd from './components/buttonAdd';
import {
  HeadeTable,
  TableSelectec,
  ContainerTable,
  ContainerCards,
  Container,
  ConaitnerFunil,
  ContainerDot,
  ContainerNumber,
  ContainerGraphic
} from './styles';
import { TableContact } from './components/tableContact/index';
import { Card } from './components/card/card';
import ButtonPagination from '@/components/ButtonPagination';
import Header from '@/components/Header';
import ButtonContact from './components/buttonContact';
import { TableLate } from './components/tableLate';
import { Bar } from './components/Bar';
// import { Icon } from '@/components/Icon'

export function Dashboard() {
  const [lista, setLista] = useState(true);

  return (
    <>
      <Container>
        <HomeHeader>
          <p>Dr. Wesley Lima - Osteopatia</p>
          <Header />
        </HomeHeader>

        <HeadeTable>
          <p>Dashboard</p>
        </HeadeTable>
        <TableSelectec>
          <ButtonAdd />
          <ButtonContact />
        </TableSelectec>

        <HeadeTable>
          <p>Contatos para hoje</p>
        </HeadeTable>
        {lista ? (
          <ContainerTable>
            <TableContact columns={columnsContactView} data={dataContactView} />
          </ContainerTable>
        ) : (
          <ContainerCards>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ContainerCards>
        )}

        <HeadeTable>
          <p>Atrasados</p>
        </HeadeTable>

        {lista ? (
          <ContainerTable>
            <TableLate columns={columnsLateView} data={dataLateView} />
          </ContainerTable>
        ) : (
          <ContainerCards>
            <Card />
            <Card />
          </ContainerCards>
        )}
        <ButtonPagination />
        {/* <Funil>
          <p style={{
            fontSize:'20px',
            marginTop:'-10px',
          }}>PROSPECÇÃO</p>
          <p style={{
            fontSize:'16px',
            marginTop:'10px',
          }}>QUALIFICAÇÃO</p>
          <p  style={{
            fontSize:'13px',
            marginTop:'10px',
          }}>APRESENTAÇÃO</p>
          <p  style={{
            fontSize:'12px',
            marginTop:'5px',
          }}>FOLLOW-UP</p>
          <p style={{
            fontSize:'10px',
          }}>NEGOCIAÇÃO</p>
          <p style={{
            fontSize:'8px',
            marginTop:'-5px',
          }}>FECHAMENTO</p>
          <p style={{
            fontSize:'6px',
            marginTop:'-8px',
          }}>PÓS-VENDAS</p>
        </Funil>
        <Icon
          name="graficodeFunil"
          size={370}
          style={{
            marginLeft: '900px',
            marginTop:'-630px',
            // zIndex: '4',
            position: 'absolute'
          }}
        /> */}

        <ConaitnerFunil>
          <p>Funil de vendas</p>
          <Bar value={41} label="PROSPECÇÃO" />
          <Bar value={38} label="QUALIFICAÇÃO" />
          <Bar value={33} label="APRESENTAÇÃO" />
          <Bar value={30} label="FOLLOW-UP" />
          <Bar value={23} label="NEGOCIAÇÃO" />
          <Bar value={20} label="FECHAMENTO" />
          <Bar value={13} label="PÓS-VENDAS" />
        </ConaitnerFunil>
        <ContainerDot>
          <ContainerGraphic>
            <hr
              style={{
                border: '1px dotted black',
                width: '70px',
                marginRight: '-30px',
                marginTop:'-15px',
                height: '0px'
              }}
            />
            <ContainerNumber>10</ContainerNumber>
          </ContainerGraphic>
          <ContainerGraphic>
            <hr
              style={{
                border: '1px dotted black',
                width: '70px',
                marginRight: '0px',
                marginTop:'10px',
                height: '1px'
              }}
            />
            <ContainerNumber>10</ContainerNumber>
          </ContainerGraphic>
          <ContainerGraphic>
            <hr
              style={{
                border: '1px dotted black',
                width: '105px',
                marginRight: '-10px',
                marginTop:'12px',
                height: '1px'
              }}
            />
            <ContainerNumber>10</ContainerNumber>
          </ContainerGraphic>
          <ContainerGraphic>
            <hr
              style={{
                border: '1px dotted black',
                width: '120px',
                marginRight: '0px',
                marginTop:'12px',
                height: '1px',
              }}
            />
            <ContainerNumber>10</ContainerNumber>
          </ContainerGraphic>
          <ContainerGraphic>
            <hr
              style={{
                border: '1px dotted black',
                width: '140px',
                marginRight: '-10px',
                marginTop:'12px',
                height: '1px'
              }}
            />
            <ContainerNumber>10</ContainerNumber>
          </ContainerGraphic>
          <ContainerGraphic>
            <hr
              style={{
                border: '1px dotted black',
                width: '170px',
                marginRight: '0px',
                marginTop:'12px',
                height: '1px'
              }}
            />
            <ContainerNumber>10</ContainerNumber>
          </ContainerGraphic>
          <ContainerGraphic>
            <hr
              style={{
                border: '1px dotted black',
                width: '220px',
                marginRight: '-10px',
                marginTop:'12px',
                height: '1px'
              }}
            />
            <ContainerNumber>10</ContainerNumber>
          </ContainerGraphic>
        </ContainerDot>
      </Container>
    </>
  );
}
