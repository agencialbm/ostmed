// import { Icon } from '@/components/Icon'
import {
  Container,
  Link,
  ContainerLink,
  HomeHeader,
  ContainerTop
} from './styles';
import FormRegister from './Components/Form';
import Button from './Components/Button';
import Header from '@/components/Header';

export default function Register() {
  return (
    <>
      <Container>
        <HomeHeader>
          <ContainerLink>
            <Link>Administrativo &nbsp; &rsaquo;</Link>
            <Link>Cadastro &nbsp; &rsaquo;</Link>
            <Link>Salas</Link>
          </ContainerLink>
          <Header />
        </HomeHeader>
        <ContainerTop></ContainerTop>
        <FormRegister />
      </Container>
      <Button />
    </>
  );
}
