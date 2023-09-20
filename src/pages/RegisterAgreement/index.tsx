import { Icon } from '@/components/Icon';
import {
  Container,
  Link,
  ContainerLink,
  HomeInput,
  HomeHeader,
  ContainerTop,
  Text,
  ContainerText
} from './styles';
import FormRegister from './Components/FormRegister';
import Button from './Components/Button';
import ButtonAdd from './Components/ButtonAdd';
import SelectPlan from './Components/SelectPlan';
import Header from '@/components/Header';

export default function RegisterAgreement() {
  return (
    <>
      <Container>
        <HomeHeader>
          <ContainerLink>
            <Link>Administrativo &nbsp; &rsaquo;</Link>
            <Link>Cadastro de convênio &nbsp; &rsaquo;</Link>
            <Link>Convênio</Link>
          </ContainerLink>
          <Header />
        </HomeHeader>
        <ContainerTop></ContainerTop>

        <FormRegister />
        <ContainerText>
          <Text>
            Abaixo, crie quantos planos desejar, para esse convênio. Cada plano
            pode usar um fator redutor próprio, que será multiplicado pelo valor
            de cada procedimento da tabela de procedimentos vinculado à esse
            convênio.
          </Text>

          <Text>
            Lembre-se: selecione as clínicas e profissionais que são vinculados
            à cada plano, para que sejam exibidos ao agendar um paciente,
            naquele local e para aquele profissional. Para selecionar, mova as
            clínicas e profissionais para a caixa da direita, usando as setas.
          </Text>
        </ContainerText>
        <ButtonAdd />
        <SelectPlan />
      </Container>
      <Button />
    </>
  );
}
