import { Icon } from '@/components/Icon';
import {
  ButtonCreateFile,
  Container,
  ContainerButton,
  ContainerCollunm,
  ContainerFileAndRevenue,
  ContainerInput,
  ContainerTop,
  EyeContainer,
  File,
  Input,
  Revenue,
  Text
} from './styles';
import SidePatiente from './Components/SidePatiente';
import ButtonHeader from './Components/ButtonHeader';
import Header from '@/components/Header';

export default function ServicePatientFile() {
  return (
    <>
      <Container>
        <Header />
        <ContainerTop>
          <SidePatiente />
          <ContainerCollunm>
            <ButtonHeader />
            <ContainerInput>
              <Input placeholder="+  Adicionar arquivo" />
              {/* <Icon
                name="pequisar"
                size={20}
                style={{ position: 'relative', right: '-10px', top: '-25px' }}
              /> */}
            </ContainerInput>
            <ContainerTop>
              <EyeContainer>
                <Text>Pastas</Text>
                <button>
                  <Icon
                    name="listGreenOne"
                    size={22}
                    style={{ marginTop: '5px' }}
                  />
                </button>
                <button>
                  <Icon
                    name="listGreenTwo"
                    size={20}
                    style={{ marginTop: '5px' }}
                  />
                </button>
              </EyeContainer>
              <ContainerButton>
                <ButtonCreateFile>+ Criar pasta</ButtonCreateFile>
              </ContainerButton>
            </ContainerTop>
            <ContainerFileAndRevenue>
              <a href="/ostmed/home/servicepatient/arquivos/arquivos">
                <File>
                  <Icon
                    name="file"
                    size={15}
                    style={{ marginTop: '0px', marginLeft: '15px' }}
                  />
                  Receitas
                </File>
              </a>
              <a href="/ostmed/home/servicepatient/arquivos/arquivos">
                <Revenue>
                  <Icon
                    name="file"
                    size={15}
                    style={{ marginTop: '0px', marginLeft: '15px' }}
                  />
                  Documentos
                </Revenue>
              </a>
            </ContainerFileAndRevenue>
          </ContainerCollunm>
        </ContainerTop>
      </Container>
    </>
  );
}
