import { Icon } from '@/components/Icon';

import { CardList } from './Components/card/card';
import { useState } from 'react';
import {
  columnsPackageTable,
  dataPackageTableView,
  columnsPlanTable,
  dataPlanTableView
} from '@/mocks/chairs';
import {
  Container,
  ContainerProfessional,
  HomeHeader,
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
import Header from '@/components/Header';
import ButtonPackage from './Components/ButtonPackage';
import ButtonPlan from './Components/ButtonPlan';
import { TableListPackage } from './Components/TableListPackage';
import { TableListPlan } from './Components/TableListPlan/index';

export default function ListPackageAndPlans() {
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
          <Link>Pacotes e Planos</Link>
        </ContainerLink>
        <Header />
      </HomeHeader>
      <Title>Pacotes e Planos</Title>
      <ContainerTop>
        <ContainerLeft>
          <ButtonPackage />
          <ContainerProfessional>
            <ContainerInput>
              <p>Pacotes</p>
              <Input placeholder="Selecione o tipo de pacote" />
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
          <ButtonPlan />
          <ContainerProfessional>
            <ContainerInput>
              <p>Planos</p>
              <Input placeholder="Selecione o tipo de planos" />
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
          <Title>Pacotes</Title>
          <TableListPackage
            columns={columnsPackageTable}
            data={dataPackageTableView}
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
          <Title>Planos</Title>
          <TableListPlan
            columns={columnsPlanTable}
            data={dataPlanTableView}
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
