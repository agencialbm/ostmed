import {
  Container,
  ContainerAddress,
  ContainerPassword,
  ContainerProfessional,
  ContainerRegister,
  FirstAddress,
  FirstLine,
  FirstProfessional,
  Input,
  Label,
  SecondAddress,
  SecondLine,
  SecondProfessional,
  Select,
  Text,
  ThirdLine,
  ThirdProfessional
} from './styles';

export default function FormRegister() {
  return (
    <Container>
      <ContainerRegister>
        <FirstLine>
          <Label>
            <Text>Nome do convênio</Text>
            <Input style={{ minWidth: '750px' }} />
          </Label>
          <Label>
            <Text>Nome do convênio</Text>
            <Input style={{ minWidth: '350px' }} />
          </Label>
          <Label>
            <Text>Código de integração</Text>
            <Input style={{ minWidth: '350px' }} />
          </Label>
        </FirstLine>
        <SecondLine>
          <Label>
            <Text>Razão social</Text>
            <Input style={{ minWidth: '750px' }} />
          </Label>
          <Label>
            <Text>CNPJ</Text>
            <Input style={{ minWidth: '350px' }} />
          </Label>
          <Label>
            <Text>CNES</Text>
            <Input style={{ minWidth: '350px' }} />
          </Label>
        </SecondLine>
        <ThirdLine>
          <Label>
            <Text>E-mail</Text>
            <Input style={{ minWidth: '360px' }} />
          </Label>
          <Label>
            <Text>E-mail</Text>
            <Input style={{ minWidth: '350px' }} />
          </Label>
          <Label>
            <Text>Celular/WhatsApp</Text>
            <Input style={{ minWidth: '350px' }} />
          </Label>
        </ThirdLine>
      </ContainerRegister>
      <hr
        style={{
          border: '1px dotted black',
          marginLeft: '40px',
          marginRight: '60px'
        }}
      />
      <ContainerProfessional>
        <SecondProfessional>
          <Label>
            <Text>Especialidade</Text>
            <Input style={{ minWidth: '600px' }} />
          </Label>
          <Label>
            <Text>Profissão</Text>
            <Input style={{ minWidth: '450px' }} />
          </Label>
          <Label>
            <Text>Perfil de acesso</Text>
            <Select style={{ minWidth: '400px' }} />
          </Label>
        </SecondProfessional>
      </ContainerProfessional>
      <hr
        style={{
          border: '1px dotted black',
          marginLeft: '40px',
          marginRight: '60px'
        }}
      />
      <ContainerAddress>
        <FirstAddress>
          <Label>
            <Text>CEP</Text>
            <Input style={{ minWidth: '300px' }} />
          </Label>
          <Label>
            <Text>Endereço</Text>
            <Input style={{ minWidth: '950px' }} />
          </Label>
          <Label>
            <Text>Número</Text>
            <Input style={{ minWidth: '200px' }} />
          </Label>
        </FirstAddress>
        <SecondAddress>
          <Label>
            <Text>Complemento</Text>
            <Input style={{ minWidth: '330px' }} />
          </Label>
          <Label>
            <Text>Bairro</Text>
            <Input style={{ minWidth: '260px' }} />
          </Label>
          <Label>
            <Text>Cidade</Text>
            <Input style={{ minWidth: '260px' }} />
          </Label>
          <Label>
            <Text>Estado</Text>
            <Input style={{ minWidth: '260px' }} />
          </Label>
          <Label>
            <Text>País</Text>
            <Input style={{ minWidth: '260px' }} />
          </Label>
        </SecondAddress>
      </ContainerAddress>
    </Container>
  );
}
