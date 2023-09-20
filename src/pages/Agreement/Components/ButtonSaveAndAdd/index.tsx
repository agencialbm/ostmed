import { Cancel, Container, Save, SaveAndAdd } from './styles';

export default function ButtonSaveAndAdd() {
  return (
    <Container>
      <a href="">
        <Cancel>Cancelar</Cancel>
      </a>
      <a href="">
        <SaveAndAdd>Salvar e adicionar</SaveAndAdd>
      </a>
      <Save>Salvar</Save>
    </Container>
  );
}
