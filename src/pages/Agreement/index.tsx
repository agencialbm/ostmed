import { Icon } from '@/components/Icon';

import { CardList } from './Components/card/card';
import { useState } from 'react';
import { columnsRegister, dataRegisterView } from '@/mocks/chairs';
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
  ContainerLeft,
  ContainerTop
} from './styles';
import { TableRegister } from './Components/TableRegister';
import Button from './Components/Button';
import Header from '@/components/Header';

export default function Agreement() {
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
        <p></p>
        <Header />
      </HomeHeader>
      <Title>Convênios</Title>
      <Button />
      <ContainerTop>
        <ContainerLeft>
          <ContainerProfessional>
            <ContainerInput>
              <p>Convênios</p>
              <Input placeholder="Selecione um convênio" />
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
          <TableRegister columns={columnsRegister} data={dataRegisterView} />
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
