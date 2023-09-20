import { Cancel, Container, Save, SaveAndAdd } from './styles';

export default function ButtonSave() {
  return (
    <Container>
      <Cancel>Cancelar</Cancel>
      <a href="/ostmed/home/service">
        <SaveAndAdd>Salvar/continuar</SaveAndAdd>
      </a>
      <Save>Finalizar atendimento</Save>
    </Container>
  );
}
