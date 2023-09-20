import Button from '../Button';
import {
  Container,
  ContainerRegister,
  FirstLine,
  Input,
  Label,
  SecondLine,
  Text,
  Select
} from './styles';

export default function FormPackage() {
  return (
    <Container>
      <ContainerRegister>
        <FirstLine>
          <Label>
            <Text>Título</Text>
            <Input style={{ width: '370px' }} />
          </Label>
          <Label>
            <Text>Duração</Text>
            <Input style={{ width: '370px' }} />
          </Label>
          <Label>
            <Text>Cor</Text>
            <Select style={{ width: '370px', backgroundColor: 'green' }} />
          </Label>
          <Label>
            <Text>Número de sessões</Text>
            <Input style={{ width: '370px' }} />
          </Label>
        </FirstLine>
        <SecondLine>
          <Label>
            <Text>Atendimentos por hora</Text>
            <Input style={{ width: '370px' }} />
          </Label>
          <Label>
            <Text>Tipo de pacote</Text>
            <Input style={{ width: '370px' }} />
          </Label>
          <Label>
            <Text>Validade do pacote</Text>
            <Input style={{ width: '370px' }} />
          </Label>
        </SecondLine>
        <SecondLine>
          <Label>
            <Text>Valor total</Text>
            <Input style={{ width: '370px' }} />
          </Label>
          <Label>
            <Text>Valor unitário</Text>
            <Input style={{ width: '370px' }} />
          </Label>
        </SecondLine>
      </ContainerRegister>
      <Button />
    </Container>
  );
}
