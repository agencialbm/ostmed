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
  ThirdProfessional
} from './styles';

export default function FormRegister() {
  return (
    <Container>
      <ContainerRegister>
        <FirstLine>
          <Label>
            <Text>Nome completo</Text>
            <Input style={{ minWidth: '750px' }} />
          </Label>
          <Label>
            <Text>CPF</Text>
            <Input style={{ minWidth: '350px' }} />
          </Label>
          <Label>
            <Text>Sexo</Text>
            <Input style={{ minWidth: '350px' }} />
          </Label>
        </FirstLine>
        <SecondLine>
          <Label>
            <Text>E-mail</Text>
            <Input style={{ minWidth: '750px' }} />
          </Label>
          <Label>
            <Text>Telefone</Text>
            <Input style={{ minWidth: '350px' }} />
          </Label>
          <Label>
            <Text>Celular/WhatsApp</Text>
            <Input style={{ minWidth: '350px' }} />
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
            <Text>Conselho profissional</Text>
            <Input style={{ minWidth: '360px' }} />
          </Label>
          <Label>
            <Text>Estado</Text>
            <Input style={{ minWidth: '350px' }} />
          </Label>
          <Label>
            <Text>Número do conselho</Text>
            <Input style={{ minWidth: '350px' }} />
          </Label>
          <Label>
            <Text>RQE</Text>
            <Input style={{ minWidth: '350px' }} />
          </Label>
        </FirstProfessional>
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
        <ThirdProfessional>
          <Label>
            <Text>Clínicas vinculadas</Text>
            <Input style={{ minWidth: '1535px' }} />
          </Label>
        </ThirdProfessional>
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
          <Input type='password' style={{ minWidth: '280px' }} />
        </Label>
        <Label>
          <Text>Repetir Senha</Text>
          <Input type='password' style={{ minWidth: '280px' }} />
        </Label>
      </ContainerPassword>
    </Container>
  );
}
