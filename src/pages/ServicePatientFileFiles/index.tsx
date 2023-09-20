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

export default function ServicePatientFileFiles() {
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
              <Icon
                name="fileExample"
                size={180}
                style={{ position: 'relative', left: '40px', top: '-20px' }}
              />
              {/* <File>
                <Icon name="file" size={15} style={{ marginTop: '5px' }} />
                Receitas
              </File>
              <Revenue>
                <Icon name="file" size={15} style={{ marginTop: '5px' }} />
                Documentos
              </Revenue> */}
            </ContainerFileAndRevenue>
          </ContainerCollunm>
        </ContainerTop>
      </Container>
    </>
  );
}
