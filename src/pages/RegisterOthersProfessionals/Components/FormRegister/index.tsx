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
  Select,
  Text,
} from './styles';

export default function FormRegister() {
  return (
    <Container>
      <ContainerRegister>
        <FirstLine>
          <Label>
            <Text>Nome completo</Text>
            <Input style={{ width: '750px' }} />
          </Label>
          <Label>
            <Text>CPF</Text>
            <Input style={{ width: '400px' }} />
          </Label>
          <Label>
            <Text>Sexo</Text>
            <Input style={{ width: '320px' }} />
          </Label>
        </FirstLine>
        <SecondLine>
          <Label>
            <Text>E-mail</Text>
            <Input type='email' style={{ width: '750px' }} />
          </Label>
          <Label>
            <Text>Telefone</Text>
            <Input style={{ width: '400px' }} />
          </Label>
          <Label>
            <Text>Celular/WhatsApp</Text>
            <Input style={{ width: '320px' }} />
          </Label>
        </SecondLine>
      </ContainerRegister>
      <hr
        style={{
          border: '1px dotted black',
          marginLeft: '40px',
          marginRight: '60px'
        }}
      />
      <ContainerProfessional>
        <FirstProfessional>
          <Label>
            <Text>Cargo</Text>
            <Input style={{ width: '460px' }} />
          </Label>
          <Label>
            <Text>Perfil de acesso</Text>
            <Select style={{ width: '410px' }} />
          </Label>
          <Label>
            <Text>Clínicas vinculadas</Text>
            <Input style={{ width: '600px' }} />
          </Label>
        </FirstProfessional>
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
            <Input style={{ width: '310px' }} />
          </Label>
          <Label>
            <Text>Endereço</Text>
            <Input style={{ width: '800px' }} />
          </Label>
          <Label>
            <Text>Número</Text>
            <Input style={{ width: '360px' }} />
          </Label>
        </FirstAddress>
        <SecondAddress>
          <Label>
            <Text>Complemento</Text>
            <Input style={{ width: '280px' }} />
          </Label>
          <Label>
            <Text>Bairro</Text>
            <Input style={{ width: '280px' }} />
          </Label>
          <Label>
            <Text>Cidade</Text>
            <Input style={{ width: '275px' }} />
          </Label>
          <Label>
            <Text>Estado</Text>
            <Input style={{ width: '275px' }} />
          </Label>
          <Label>
            <Text>País</Text>
            <Input style={{ width: '275px' }} />
          </Label>
        </SecondAddress>
      </ContainerAddress>
      <hr
        style={{
          border: '1px dotted black',
          marginLeft: '40px',
          marginRight: '60px'
        }}
      />
      <ContainerPassword>
        <Label>
          <Text>Senha</Text>
          <Input type="password" style={{ width: '280px' }} />
        </Label>
        <Label>
          <Text>Repetir Senha</Text>
          <Input type="search" style={{ width: '280px' }} />
        </Label>
      </ContainerPassword>
    </Container>
  );
}
