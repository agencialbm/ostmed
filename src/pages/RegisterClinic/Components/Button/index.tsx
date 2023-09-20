import { Cancel, Container, Save, SaveAndAdd } from './styles';

export default function Button() {
  return (
    <Container>
      <a href='/ostmed/administrativo/cadastrodeclinicas/clinicas'> <Cancel>Cancelar</Cancel></a>
      <SaveAndAdd>Salvar e adicionar</SaveAndAdd>
      <Save>Salvar</Save>
    </Container>
  );
}
