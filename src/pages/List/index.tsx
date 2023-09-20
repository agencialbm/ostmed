import { Icon } from '@/components/Icon';

import { CardList } from './Components/card/card';
import { useState } from 'react';
import {
  columnsListView,
  dataListView,
  columnsLisOthertView,
  dataListOtherView
} from '@/mocks/chairs';
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
  ContainerRight,
  ContainerTop
} from './styles';
import { TableListHealthProfessional } from './Components/TableListHealthProfessional';
import ButtonHealthProfessional from './Components/ButtonHealthProfessional';
import ButtonOtherProfessional from './Components/ButtonOtherProfessional';
import { TableListOtherProfessional } from './Components/TableListOtherProfessional';
import Header from '@/components/Header';

export default function List() {
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
          <Link>Cadastro de usuários &nbsp; &rsaquo;</Link>
          <Link>Usuários</Link>
        </ContainerLink>
        <Header />
      </HomeHeader>
      <Title>Cadastro de usuários</Title>
      <ContainerTop>
        <ContainerLeft>
          <ButtonHealthProfessional />
          <ContainerProfessional>
            <ContainerInput>
              <p>Profissionais de saúde</p>
              <Input placeholder="Selecione o profissional de saúde" />
              <Icon
                name="pequisar"
                size={20}
                style={{ position: 'relative', right: '660px', top: '7px' }}
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
        <ContainerRight>
          <ButtonOtherProfessional />
          <ContainerProfessional>
            <ContainerInput>
              <p>Outros Profissionais</p>
              <Input placeholder="Selecione outros profissionais" />
              <Icon
                name="pequisar"
                size={20}
                style={{ position: 'relative', right: '660px', top: '7px' }}
              />
            </ContainerInput>
          </ContainerProfessional>
          <ContainerText>
            <Text>
              Você pode adicionar profissionais administrativos, com limitação
              de acesso às funcionalidades para cada profissional. Adicione
              quantos profissionais administrativos precisar.
            </Text>
          </ContainerText>
        </ContainerRight>
      </ContainerTop>

      {lista ? (
        <ContainerTable>
          <Title>Profissionais de saúde</Title>
          <TableListHealthProfessional
            columns={columnsListView}
            data={dataListView}
          />
        </ContainerTable>
      ) : (
        <ContainerCards>
          <CardList />
          <CardList />
        </ContainerCards>
      )}

      {lista ? (
        <ContainerTable>
          <Title>Outros Profissionais</Title>
          <TableListOtherProfessional
            columns={columnsLisOthertView}
            data={dataListOtherView}
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
