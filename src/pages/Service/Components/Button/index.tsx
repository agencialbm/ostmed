import { Cancel, Container, SaveAndAdd } from './styles';

export default function Button() {
  return (
    <Container>
      <a href="/ostmed/home/ServicePatient">
        <Cancel>Cancelar</Cancel>
      </a>
      <a href="/ostmed/home/servicepatient/records">
        <SaveAndAdd>Confirmar finalização do atendimento</SaveAndAdd>
      </a>
    </Container>
  );
}
