import { Icon } from '@/components/Icon';
import {
  Container,
  ContainerBottom,
  ContainerBottomLine,
  ContainerButton,
  ContainerCollunm,
  ContainerImage,
  ContainerInput,
  ContainerLine,
  ContainerLineTwo,
  ContainerMaster,
  ContainerNote,
  ContainerNoteProfessional,
  ContainerTag,
  ContainerText,
  ContainerTop,
  EyeContainer,
  Input,
  Line,
  Text
} from './styles';
import SidePatiente from './Components/SidePatiente';
import ButtonHeader from './Components/ButtonHeader';
import Header from '@/components/Header';
import Button from './Components/Button';

export default function ServicePatientRecords() {
  return (
    <>
      <Container>
        <Header />
        <ContainerTop>
          <SidePatiente />
          <ContainerCollunm>
            <ButtonHeader />
            <ContainerInput>
              <Input placeholder="Pesquisar" />
              <Icon
                name="pequisar"
                size={20}
                style={{ position: 'relative', right: '690px', top: '6px' }}
              />
            </ContainerInput>
            <EyeContainer>
              <button>
                <Icon name="calendar" size={18} style={{ marginTop: '5px' }} />
              </button>
              <button>
                <Icon name="note" size={19} style={{ marginTop: '5px' }} />
              </button>
            </EyeContainer>
            <ContainerBottomLine>
              <ContainerLine>
                <Line></Line>
                <ContainerLineTwo></ContainerLineTwo>
                <ContainerButton>
                  <button className="first">
                    <Icon name="notewhite" size={28} />
                  </button>
                  <button className="second">
                    <Icon name="noteplus" size={30} style={{marginTop:'5px'}} />
                  </button>
                </ContainerButton>
              </ContainerLine>
            </ContainerBottomLine>
            <ContainerBottom>
              <ContainerMaster>
                <Icon
                  name="polygonGray"
                  size={18}
                  style={{ marginLeft: '70px', marginTop: '110px' }}
                />
                <ContainerNoteProfessional>
                  <ContainerNote>
                    <ContainerText>
                      <Text>
                        Notas Rápidas
                        <br />
                        Criado por:
                      </Text>
                      <div />
                    </ContainerText>
                    <Button />
                  </ContainerNote>
                </ContainerNoteProfessional>
              </ContainerMaster>
              <ContainerMaster>
                <Icon
                  name="polygonGreen"
                  size={18}
                  style={{ marginLeft: '70px', marginTop: '110px' }}
                />
                <ContainerNoteProfessional>
                  <ContainerNote>
                    <ContainerText>
                      <Text>
                        Profissional:
                        <br />
                        Clínica:
                      </Text>
                      <div />
                    </ContainerText>
                    <Button />
                  </ContainerNote>
                </ContainerNoteProfessional>
              </ContainerMaster>
            </ContainerBottom>
          </ContainerCollunm>
          <ContainerTag>
            <p>TAG’s do paciente</p>
            <ContainerImage>
              <div>+</div>
            </ContainerImage>
          </ContainerTag>
        </ContainerTop>
      </Container>
    </>
  );
}
