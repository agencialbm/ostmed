import { Icon } from '@/components/Icon';
import {
  Container,
  Link,
  ContainerLink,
  HomeInput,
  HomeHeader,
  ContainerTop
} from './styles';
import FormRegister from './Components/FormRegister';
import Button from './Components/Button';
import Header from '@/components/Header';

export default function RegisterClinic() {
  return (
    <>
      <Container>
        <HomeHeader>
          <ContainerLink>
            <Link>Administrativo &nbsp; &rsaquo;</Link>
            <Link>Cadastro de clínicas &nbsp; &rsaquo;</Link>
            <Link>Cadastro</Link>
          </ContainerLink>
          <Header />
        </HomeHeader>
        <ContainerTop></ContainerTop>

        <FormRegister />
        <Button />
      </Container>
    </>
  );
}
