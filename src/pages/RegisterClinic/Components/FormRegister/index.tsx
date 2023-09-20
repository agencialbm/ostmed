import {
  Container,
  ContainerAddress,
  ContainerProfessional,
  ContainerRegister,
  FirstAddress,
  FirstLine,
  Input,
  Label,
  SecondAddress,
  SecondLine,
  SecondProfessional,
  Text,
} from './styles';

export default function FormRegister() {
  return (
    <Container>
      <ContainerRegister>
        <FirstLine>
          <Label>
            <Text>Razão social</Text>
            <Input style={{ width: '780px' }} />
          </Label>
          <Label>
            <Text>CNPJ</Text>
            <Input style={{ width: '380px' }} />
          </Label>
          <Label>
            <Text>CNES</Text>
            <Input style={{ width: '350px' }} />
          </Label>
        </FirstLine>
        <SecondLine>
          <Label>
            <Text>Nome fantasia</Text>
            <Input style={{ width: '780px' }} />
          </Label>
          <Label>
            <Text>Telefone</Text>
            <Input style={{ width: '380px' }} />
          </Label>
          <Label>
            <Text>Celular/WhatsApp</Text>
            <Input style={{ width: '350px' }} />
          </Label>
        </SecondLine>
      </ContainerRegister>
      <hr
        style={{
          border: '1px dotted black',
          marginLeft: '15px',
          marginRight: '60px'
        }}
      />
      <ContainerProfessional>
        <SecondProfessional>
          <Label>
            <Text>Inscrição Municipal</Text>
            <Input style={{ width: '550px' }} />
          </Label>
          <Label>
            <Text>Alíquota (%)</Text>
            <Input style={{ width: '230px' }} />
          </Label>
          <Label>
            <Text>Cofins (R$)</Text>
            <Input style={{ width: '230px' }} />
          </Label>
          <Label>
            <Text>PIS/PASEP (R$)</Text>
            <Input style={{ width: '230px' }} />
          </Label>
          <Label>
            <Text>PIS/PASEP (R$)</Text>
            <Input style={{ width: '240px' }} />
          </Label>
        </SecondProfessional>
      </ContainerProfessional>
      <hr
        style={{
          border: '1px dotted black',
          marginLeft: '15px',
          marginRight: '60px'
        }}
      />
      <ContainerAddress>
        <FirstAddress>
          <Label>
            <Text>CEP</Text>
            <Input style={{ width: '300px' }} />
          </Label>
          <Label>
            <Text>Endereço</Text>
            <Input style={{ width: '900px' }} />
          </Label>
          <Label>
            <Text>Número</Text>
            <Input style={{ width: '310px' }} />
          </Label>
        </FirstAddress>
        <SecondAddress>
          <Label>
            <Text>Complemento</Text>
            <Input style={{ width: '295px' }} />
          </Label>
          <Label>
            <Text>Bairro</Text>
            <Input style={{ width: '295px' }} />
          </Label>
          <Label>
            <Text>Cidade</Text>
            <Input style={{ width: '295px' }} />
          </Label>
          <Label>
            <Text>Estado</Text>
            <Input style={{ width: '295px' }} />
          </Label>
          <Label>
            <Text>País</Text>
            <Input style={{ width: '295px' }} />
          </Label>
        </SecondAddress>
      </ContainerAddress>
      <hr
        style={{
          border: '1px dotted black',
          marginLeft: '15px',
          marginRight: '60px'
        }}
      />
    </Container>
  );
}
