import { Icon } from '@/components/Icon';
import {
  Container,
  ContainerBottom,
  ContainerCollunm,
  ContainerFile,
  ContainerInput,
  ContainerLeft,
  ContainerLeftText,
  ContainerMidle,
  ContainerTop,
  EyeContainer,
  Input,
  Text
} from './styles';
import SidePatiente from './Components/SidePatiente';
import ButtonHeader from './Components/ButtonHeader';
import ButtonProcedment from './Components/ButtonProcedment';
import ButtonSave from './Components/ButtonSave';
import Header from '@/components/Header';
import RichText from './Components/RichText';
import ButtonDocuments from './Components/ButtonDocuments';
// import MyEditor from './Components/MyEditor/MyEditor';

export default function ServicePatient() {
  return (
    <>
      <Container>
        <Header />
        <ContainerTop>
          <SidePatiente />
          <ContainerCollunm>
            <ButtonHeader />
            <ContainerInput>
              <Input placeholder="Selecionar o tipo de anamnese" />
              <Icon
                name="pequisar"
                size={20}
                style={{ position: 'relative', right: '440px', top: '6px' }}
              />
            </ContainerInput>
          </ContainerCollunm>
        </ContainerTop>
        <RichText />
        <ContainerBottom>
          <ContainerFile>
            <Text>Documentos criados neste atendimento</Text>
            <ButtonDocuments />
          </ContainerFile>
          <ContainerMidle>
            <ContainerLeft>
              <ContainerLeftText>
                Solicitação de procedimento
                <ButtonProcedment />
              </ContainerLeftText>
              <EyeContainer>
                <button>
                  <Icon name="editeTable" size={16} />
                </button>
                <button>
                  <Icon name="print" size={16} />
                </button>
                <button>
                  <Icon name="deleteTable" size={16} />
                </button>
              </EyeContainer>
            </ContainerLeft>
          </ContainerMidle>
        </ContainerBottom>
        <ButtonSave />
      </Container>
      {/* <MyEditor /> */}
    </>
  );
}
