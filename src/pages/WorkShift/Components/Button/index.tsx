import { Cancel, Container, Save, SaveAndAdd } from './styles';

export default function Button() {
  return (
    <Container>
      <a href='/ostmed/administrativo/conta/turnodetrabalho'> <Cancel>Cancelar</Cancel></a>
      <a href=''><SaveAndAdd>Salvar e adicionar</SaveAndAdd></a>
      <Save>Salvar</Save>
    </Container>
  );
}
