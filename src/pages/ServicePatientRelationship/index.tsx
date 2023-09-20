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
  ContainerSecondText,
  ContainerTag,
  ContainerText,
  ContainerTextBottom,
  ContainerTop,
  EyeContainer,
  First,
  Input,
  Line,
  Text
} from './styles';
import SidePatiente from './Components/SidePatiente';
import ButtonHeader from './Components/ButtonHeader';
import Header from '@/components/Header';
import Button from './Components/Button';

export default function ServicePatientRelationship() {
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
              <First>
                <button>
                  <Icon
                    name="whatsapp"
                    size={25}
                    style={{ marginTop: '5px' }}
                  />
                </button>
              </First>

              <button>
                <Icon name="goSms" size={25} style={{ marginTop: '10px' }} />
              </button>
              <button>
                <Icon name="email" size={25} style={{ marginTop: '5px' }} />
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
                  <button className="first">
                    <Icon name="notewhite" size={28} />
                  </button>
                  <button className="second">
                    <Icon
                      name="noteplus"
                      size={30}
                      style={{ marginTop: '5px' }}
                    />
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
                      <Text>Agendamento realizado</Text>
                      <Text> 12/01/2023</Text>
                    </ContainerText>
                    <ContainerSecondText>
                      <Text>Data do atendimento:</Text>
                      <ContainerTextBottom>
                        20/01/2023 - 10h00
                      </ContainerTextBottom>
                    </ContainerSecondText>
                    <Button />
                  </ContainerNote>
                </ContainerNoteProfessional>
              </ContainerMaster>
              <ContainerMaster>
                <Icon
                  name="polygonGray"
                  size={18}
                  style={{ marginLeft: '70px', marginTop: '110px' }}
                />
                <ContainerNoteProfessional>
                  <ContainerNote>
                    <ContainerText>
                      <Text>Agendamento realizado</Text>
                      <Text> 12/01/2023</Text>
                    </ContainerText>
                    <ContainerSecondText>
                      <Text>Data do atendimento:</Text>
                      <ContainerTextBottom>
                        20/01/2023 - 10h00
                      </ContainerTextBottom>
                    </ContainerSecondText>
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
                      <Text>Agendamento realizado</Text>
                      <Text> 12/01/2023</Text>
                    </ContainerText>
                    <ContainerSecondText>
                      <Text>Tipo de agendamento:</Text>
                      <ContainerTextBottom>Consulta</ContainerTextBottom>
                    </ContainerSecondText>
                    <Button />
                  </ContainerNote>
                </ContainerNoteProfessional>
              </ContainerMaster>
            </ContainerBottom>
          </ContainerCollunm>
          <ContainerTag>
            <p>Automações do paciente</p>
            <ContainerImage>
              <div>+</div>
            </ContainerImage>
          </ContainerTag>
        </ContainerTop>
      </Container>
    </>
  );
}
