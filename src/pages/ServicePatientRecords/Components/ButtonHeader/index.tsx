import {
  Container,
  ContainerProntuario,
  File,
  MedicalRecord,
  Relationship,
  Service
} from './styles';

export default function ButtonHeader() {
  return (
    <Container>
      <a href="/ostmed/home/servicepatient">
        <Service>Atendimento</Service>
      </a>
      <ContainerProntuario>
        <a href="/ostmed/home/servicepatient/records">
          <MedicalRecord>Prontuário</MedicalRecord>
        </a>
        <div></div>
      </ContainerProntuario>

      <a href="/ostmed/home/servicepatient/relationship">
        <Relationship>Relacionamento</Relationship>
      </a>
      <a href="/ostmed/home/servicepatient/arquivos">
        <File>Arquivos</File>
      </a>
    </Container>
  );
}
