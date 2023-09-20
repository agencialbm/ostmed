import {
  Container,
  ContainerProfessional,
  HomeHeader,
  Text,
  Title,
  ContainerInput,
  ContainerText,
  ContainerLink,
  Link,
  ContainerLeft,
  ContainerFirst,
  ContainerTop,
  LinkTable,
  ContainerRight
} from './styles';
import Button from './Components/Button';
import Header from '@/components/Header';
import FormProcedureImportTable from './Components/FormProcedureImportTable';

export default function ProcedureImportTable() {
  return (
    <Container>
      <HomeHeader>
        <ContainerLink>
          <Link>Administrativo &nbsp; &rsaquo;</Link>
          <Link>Tabelas de procedimentos&nbsp; &rsaquo;</Link>
          <Link>Importar tabelas</Link>
        </ContainerLink>
        <Header />
      </HomeHeader>
      <Title>Importar tabelas</Title>

      <ContainerTop>
        <ContainerLeft>
          <ContainerProfessional>
            <ContainerInput>
              <ContainerFirst style={{ background: '#456573', color: 'white' }}>
                <Text>1. Importar tabelas </Text>
              </ContainerFirst>
              <ContainerFirst>
                <Text>2. Associação de dados</Text>
              </ContainerFirst>
              <ContainerFirst>
                <Text>3. Concluir importação</Text>
              </ContainerFirst>
            </ContainerInput>
            <Button />
          </ContainerProfessional>
          <ContainerText>
            <p>
              Para realizar o upload de uma tabela, seu arquivo precisa:
              <br />
              <br />
              1. Ter um procedimento chamado consulta; <br />
              2. Ter um procedimento chamado retorno; <br />
              3. Ter pelo menos uma coluna com os nomes código e valor; <br />
              4. Os campos de valor devem ser apenas numéricos, não podem ter
              símbolo de moeda (exemplo: R$)
            </p>
            <LinkTable>Faça aqui o download de uma tabela modelo</LinkTable>
          </ContainerText>
        </ContainerLeft>
        <ContainerRight>
          <FormProcedureImportTable />
        </ContainerRight>
      </ContainerTop>
    </Container>
  );
}
