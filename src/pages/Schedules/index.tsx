import { Icon } from '@/components/Icon';
import { CardList } from './Components/card/card';
import { useState } from 'react';
import {
  columnsSchedulesList,
  dataSchedulesListView,
  columnsProcedures,
  dataProceduresView
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
import { TableSchedules } from './Components/TableSchedules';
import { TableProcedures } from './Components/TableProcedures';
import ButtonSchedules from './Components/ButtonSchedules';
import ButtonProcedures from './Components/ButtonProcedures/index';
import Header from '@/components/Header';

export default function Schedules() {
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
          <Link>Cadastro &nbsp; &rsaquo;</Link>
          <Link>Procedimentos</Link>
        </ContainerLink>
        <Header />
      </HomeHeader>
      <Title>Agendamentos / Procedimentos</Title>
      <ContainerTop>
        <ContainerLeft>
          <ButtonSchedules />
          <ContainerProfessional>
            <ContainerInput>
              <p>Agendamentos</p>
              <Input placeholder="Selecione o tipo de agendamento" />
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
          <ButtonProcedures />
          <ContainerProfessional>
            <ContainerInput>
              <p>Procedimentos</p>
              <Input placeholder="Selecione o tipo de procedimentos" />
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
          <Title>Agendamentos</Title>
          <TableSchedules
            columns={columnsSchedulesList}
            data={dataSchedulesListView}
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
          <Title>Procedimentos</Title>
          <TableProcedures
            columns={columnsProcedures}
            data={dataProceduresView}
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
