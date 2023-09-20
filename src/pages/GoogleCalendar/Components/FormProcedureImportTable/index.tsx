import ButtonSend from '../ButtonSend';
import {
  Container,
  ContainerRegister,
  FirstLine,
  Input,
  Label,
  Text
} from './styles';

export default function FormProcedureImportTable() {
  return (
    <Container>
      <ContainerRegister>
        <FirstLine>
          <Label>
            <Text>Nome da tabela de procedimento</Text>
            <Input style={{ minWidth: '600px' }} />
          </Label>
          <Label>
            <Text>Selecione o delimitador de célula do arquivo</Text>
            <Input style={{ minWidth: '600px' }} />
          </Label>
          <Label>
            <Text>Selecione o tipo de separador de centavos do arquivo</Text>
            <Input style={{ minWidth: '600px' }} />
          </Label>
        </FirstLine>
      </ContainerRegister>
      <ButtonSend />
    </Container>
  );
}
