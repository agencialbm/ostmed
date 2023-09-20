import { Cancel, Container, SaveAndAdd } from './styles';

export default function ButtonSend() {
  return (
    <Container>
      <a href='/ostmed/administrativo/conta/turnodetrabalho'> <Cancel>Cancelar</Cancel></a>
      <a href=''><SaveAndAdd>Enviar arquivo</SaveAndAdd></a>
    </Container>
  );
}
