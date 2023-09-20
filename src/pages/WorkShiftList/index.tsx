import { Icon } from '@/components/Icon';

import { CardList } from './Components/card/card';
import { useState } from 'react';
import { columnsTurn, dataTurnView } from '@/mocks/chairs';
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
import { Table } from './Components/Table';
import Button from './Components/Button';
import Header from '@/components/Header';

export default function WorkShiftList() {
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
          <Link>Turnos de trabalho</Link>
        </ContainerLink>
        <Header />
      </HomeHeader>
      <Title>Turno de trabalho</Title>
      <Button />
      <ContainerTop>
        <ContainerLeft>
          <ContainerProfessional>
            <ContainerInput>
              <p>Turnos de trabalho</p>
              <Input placeholder="Selecione o profissional" />
              <Icon
                name="pequisar"
                size={20}
                style={{ position: 'relative', right: '525px', top: '5px' }}
              />
            </ContainerInput>
          </ContainerProfessional>
          <ContainerText>
            {/* <Text>
              Você pode adicionar profissionais de saúde, com limitação de
              acesso às funcionalidades para cada profissional. Adicione quantos
              profissionais de saúde precisar, de acordo com limite
              disponibilizado para seu plano. Apenas profissionais de saúde
              podem editar dados de prontuários de paciente.
            </Text> */}
          </ContainerText>
        </ContainerLeft>
      </ContainerTop>

      {lista ? (
        <ContainerTable>
          <Table columns={columnsTurn} data={dataTurnView} />
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
