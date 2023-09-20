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
  ContainerTop,
  ContainerRight,
  TextNum,
  ContainerTextTop,
  Line
} from './styles';
import Button from './Components/Button';
import Header from '@/components/Header';
import FormProcedureImportTable from './Components/FormProcedureImportTable';
import ButtonSend from './Components/ButtonSend';

export default function GoogleCalendar() {
  return (
    <Container>
      <HomeHeader>
        <ContainerLink>
          <Link>Atalhos &nbsp; &rsaquo;</Link>
          <Link>Google Calendar</Link>
        </ContainerLink>
        <Header />
      </HomeHeader>
      <Title>Google Calendar</Title>
      <p>Sincronize a sua agenda com o Google Calendar.</p>
      <ContainerTop>
        <ContainerLeft>
          <ContainerTextTop>
            <TextNum>#1</TextNum>
            <Text>
              Clique em "Sincronizar com o Google" para iniciar a sincronização
              da sua conta com o Google.
            </Text>
          </ContainerTextTop>
          <ContainerTextTop>
            <TextNum>#2</TextNum>
            <Text>
              Automaticamente, será criada uma agenda em seu Calendário Google,
              devidamente nomeada, onde estarão todos os agendamentos
              sincronizados.
            </Text>
          </ContainerTextTop>
          <ContainerTextTop>
            <TextNum>#3</TextNum>
            <Text>
              Quando um agendamento for feito e o paciente possuir um e-mail
              cadastrado, ele receberá um convite para adicionar o evento em seu
              próprio Google Calendar. <br />
              Essa é mais uma forma eficiente de ajudar os seus pacientes a não
              esquecerem do dia e horário agendados para a consulta, evitando
              faltas.
            </Text>
          </ContainerTextTop>
          <Line></Line>
        </ContainerLeft>
      </ContainerTop>
      <ContainerRight>
        <ContainerText>
          <p>
            <p style={{ color: 'red' }}>Importante!</p>
            <br />
            Serão exibidos apenas os agendamentos realizados a partir da data de
            sincronização com a sua Agenda Google. Ou seja, os eventos passados
            não serão sincronizados.
            <br /> <br />
            Eventos criados pela Agenda Google não serão exibidos em sua Agenda.
            Isso significa que os agendamentos sempre devem ser criados pela
            Agenda da Osteomed.
            <br />
            <br />
            Para que os agendamentos também sejam exibidos na Agenda Google de
            outros usuários (secretárias, administradores, etc), basta
            compartilhar por meio das Configurações da Agenda Google.
            Recomendamos que esta prática seja adotada para que a sua agenda
            continue acessível em uma eventual dificuldade de acesso a Osteomed.{' '}
            <br />
            <br />
            Para cancelar a sincronização, basta clicar em "Sair".
            Automaticamente, os agendamentos deixarão de ser sincronizados. No
            entanto, aqueles que já foram sincronizados permanecerão em seu
            Google Calendar. Caso queira excluir as informações, isso deverá ser
            feito manualmente.
          </p>
        </ContainerText>
        <ButtonSend />
      </ContainerRight>
    </Container>
  );
}
