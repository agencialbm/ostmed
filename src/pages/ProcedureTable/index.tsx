import { Icon } from '@/components/Icon';

import { CardList } from './Components/card/card';
import { useState } from 'react';
import { columnsProceduresTable, dataProceduresTableView } from '@/mocks/chairs';
import {
  Container,
  ContainerProfessional,
  HomeHeader,
  HomeInput,
  Input,
  Text,
  Title,
  ContainerTable,
  ContainerCards,
  ContainerInput,
  ContainerText,
  ContainerLink,
  Link,
  ContainerLeft,
  ContainerTop
} from './styles';
import { TableUserRegister } from './Components/TableUserRegister';
import Button from './Components/Button';
import Header from '@/components/Header';

export default function ProcedureTable() {
  const [lista, setLista] = useState(true);

  const handleLista = () => {
    setLista(true);
  };

  const handleCard = () => {
    setLista(false);
  };

  return (
    <Container>
      <HomeHeader>
        <ContainerLink>
          <Link>Administrativo &nbsp; &rsaquo;</Link>
          <Link>Tabelas de procedimentos</Link>
        </ContainerLink>
        <Header />
      </HomeHeader>
      <Title>Tabelas de procedimentos</Title>
      <Button />
      <ContainerTop>
        <ContainerLeft>
          <ContainerProfessional>
            <ContainerInput>
              {/* <p>Clínicas</p> */}
              <Input placeholder="Digite para buscar" />
              <Icon
                name="pequisar"
                size={20}
                style={{ position: 'relative', right: '520px', top: '5px' }}
              />
            </ContainerInput>
          </ContainerProfessional>
          <ContainerText>
            <Text>
              A Osteomed Solutions permite a adição de ilimitadas tabelas de
              procedimento. Cada tabela deve conter um código de procedimento
              (valor numérico, para simples identificação), uma descrição do
              procedimento e o valor.
              <br /><br /><br />
              Você poderá enviar uma tabela para cada convênio que utiliza, se
              desejar, caso efetuem pagamentos com valores diferentes.
              <br /><br /><br />
              A tabela particular é a única que pode ser editada dentro do
              iMedicina. As demais devem ser editadas em Excel e enviadas
              através do botão "carregar tabela". Para partir de um modelo,
              clique sobre o botão de download em uma das tabelas abaixo e edite
              os valores e procedimentos para a sua realidade.
              <br /><br /><br />
              Importante: todas as tabelas devem conter, como padrão, um
              procedimento chamado Consulta, com o respectivo valor.
            </Text>
          </ContainerText>
        </ContainerLeft>
      </ContainerTop>

      {lista ? (
        <ContainerTable>
          <TableUserRegister
            columns={columnsProceduresTable}
            data={dataProceduresTableView}
          />
        </ContainerTable>
      ) : (
        <ContainerCards>
          <CardList />
          <CardList />
        </ContainerCards>
      )}
    </Container>
  );
}
