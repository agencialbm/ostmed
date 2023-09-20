import { Cancel, Container, Save, SaveAndAdd } from './styles';

export default function ButtonCancelAndSave() {
  return (
    <Container>
      <a href="">
        <Cancel>Cancelar</Cancel>
      </a>
      <a href="/ostmed/home/message">
        <SaveAndAdd>Salvar</SaveAndAdd>
      </a>
    </Container>
  );
}
