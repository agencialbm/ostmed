import { Cancel, Container, Save, SaveAndAdd } from './styles';

export default function ButtonCancelAndMessage() {
  return (
    <Container>
      <a href="">
        <Cancel>Cancelar</Cancel>
      </a>
      <a href="/ostmed/home/message">
        <SaveAndAdd>Enviar recado</SaveAndAdd>
      </a>
    </Container>
  );
}
