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

export default function FormRegister() {

  return (
    <Container>
      <ContainerRegister>
        <FirstLine>
          <Label>
            <Text>Título</Text>
            <Input style={{ width: '300px' }} />
          </Label>
          <Label>
            <Text>Título</Text>
            <Input style={{ width: '300px' }} />
          </Label>
          <Label>
            <Text>Cor</Text>
            <Select style={{ width: '300px', backgroundColor:'green' }} />
          </Label>
          <Label>
            <Text>Valor</Text>
            <Input style={{ width: '300px' }} />
          </Label>
        </FirstLine>
        <SecondLine>
          <Label>
            <Text>Atendimentos por hora</Text>
            <Select style={{ width: '300px' }} />
          </Label>
        </SecondLine>
      </ContainerRegister>
    </Container>
  );
}
