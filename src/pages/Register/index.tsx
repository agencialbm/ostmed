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
import CallCenter from './Components/CallCenter';
import Header from '@/components/Header';

export default function Register() {
  return (
    <>
      <Container>
        <HomeHeader>
          <ContainerLink>
            <Link>Administrativo &nbsp; &rsaquo;</Link>
            <Link>Cadastro de usuários &nbsp; &rsaquo;</Link>
            <Link>Profissionais de Saúde</Link>
          </ContainerLink>
          <Header />
        </HomeHeader>
        <ContainerTop>
          <Avatar />
          <CallCenter />
        </ContainerTop>

        <FormRegister />
        <Button />
      </Container>
    </>
  );
}
