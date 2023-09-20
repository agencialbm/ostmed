import { Icon } from '@/components/Icon';

import { CardList } from './Components/card/card';
import { useState } from 'react';
import { columnsClassroomsTable, dataClassroomsView } from '@/mocks/chairs';
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

export default function ClassroomsList() {
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
          <Link>Salas </Link>
        </ContainerLink>
        <Header />
      </HomeHeader>
      <Title>Salas</Title>
      <Button />
      <ContainerTop>
        <ContainerLeft>
          <ContainerProfessional>
            <ContainerInput>
              <p>Clínicas</p>
              <Input placeholder="Selecione uma sala" />
              <Icon
                name="pequisar"
                size={20}
                style={{ position: 'relative', right: '-10px', top: '-23px' }}
              />
            </ContainerInput>
          </ContainerProfessional>
          <ContainerText>
            <Text>
              Você pode adicionar profissionais de saúde, com limitação de
              acesso às funcionalidades para cada profissional. Adicione quantos
              profissionais de saúde precisar, de acordo com limite
              disponibilizado para seu plano. Apenas profissionais de saúde
              podem editar dados de prontuários de paciente.
            </Text>
          </ContainerText>
        </ContainerLeft>
      </ContainerTop>

      {lista ? (
        <ContainerTable>
          <TableUserRegister
            columns={columnsClassroomsTable}
            data={dataClassroomsView}
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
