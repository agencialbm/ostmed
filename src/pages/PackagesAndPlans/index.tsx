import {
  Container,
  Link,
  ContainerLink,
  HomeHeader,
  HeadeTable
} from './styles';
import Header from '@/components/Header';
import FormPackage from './Components/FormPackage';
import FormPlan from './Components/FormPlan';

export default function PackagesAndPlans() {
  return (
    <>
      <Container>
        <HomeHeader>
          <ContainerLink>
            <Link>Administrativo &nbsp; &rsaquo;</Link>
            <Link>Cadastro &nbsp; &rsaquo;</Link>
            <Link>Pacotes e Planos</Link>
          </ContainerLink>
          <Header />
        </HomeHeader>
        <HeadeTable>
          <p>Pacotes</p>
        </HeadeTable>
        <FormPackage />

        <HeadeTable>
          <p>Planos</p>
        </HeadeTable>

        <FormPlan />
      </Container>
    </>
  );
}
