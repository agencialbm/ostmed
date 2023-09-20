import { Icon } from '@/components/Icon';
import {
  Container,
  Link,
  ContainerLink,
  HomeInput,
  HomeHeader,
  ContainerTop
} from './styles';
import Avatar from './Components/Avatar';
import FormRegister from './Components/FormRegister';
import Button from './Components/Button';
import Header from '@/components/Header';

export default function RegisterOthersProfessionals() {
  return (
    <>
      <Container>
        <HomeHeader>
          <ContainerLink>
            <Link>Administrativo &nbsp; &rsaquo;</Link>
            <Link>Cadastro de usuários &nbsp; &rsaquo;</Link>
            <Link>Outros profissionais</Link>
          </ContainerLink>
          <Header />
        </HomeHeader>
        <ContainerTop>
          <Avatar />
        </ContainerTop>
        <FormRegister />
        <Button />
      </Container>
    </>
  );
}
