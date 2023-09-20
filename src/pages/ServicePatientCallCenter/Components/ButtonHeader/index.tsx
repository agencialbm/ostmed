import {
  Container,
  ContainerService,
  File,
  MedicalRecord,
  Relationship,
  Service
} from './styles';

export default function ButtonHeader() {
  return (
    <Container>
      <ContainerService>
        <a href="/ostmed/home/servicepatient">
          <Service>Atendimento</Service>
        </a>
        <div></div>
      </ContainerService>
      <a href="/ostmed/home/servicepatient/records">
        <MedicalRecord>Prontuário</MedicalRecord>
      </a>
      <a href="/ostmed/home/servicepatient/relationship">
        <Relationship>Relacionamento</Relationship>
      </a>
      <a href="/ostmed/home/servicepatient/arquivos">
        <File>Arquivos</File>
      </a>

    </Container>
  );
}
