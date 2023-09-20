import { Icon } from '@/components/Icon';
import {
  Ball,
  Container,
  ContainerBall,
  ContainerCheck,
  ContainerCheckBox,
  ContainerCheckBoxMaster,
  ContainerInput,
  ContainerSelect,
  ContainerSelectCheckBox,
  Input,
  Label,
  Select,
  Text
} from './styles';

export default function SelectPlan() {
  return (
    <Container>
      <ContainerSelect>
        <Label>
          <Text>Nome do plano</Text>
          <Select style={{ minWidth: '250px' }} />
        </Label>
        <Label>
          <Text>Fator redutor</Text>
          <Input style={{ minWidth: '250px' }} />
        </Label>
      </ContainerSelect>
      <ContainerCheckBoxMaster>
        <ContainerCheckBox>
          <Text>Clínicas disponíveis para o plano</Text>
          <ContainerCheck>
            <ContainerSelectCheckBox>
              <p>Selecione</p>
              <ContainerInput>
                <div>
                  <input type="checkbox" />
                  lbm
                </div>
                <div>
                  <input type="checkbox" />
                  osteo
                </div>
                <div>
                  <input type="checkbox" />
                  nutri
                </div>
              </ContainerInput>
            </ContainerSelectCheckBox>
            <ContainerBall>
              <Ball>
                <Icon
                  name="setaRight"
                  size={30}
                  style={{ marginTop: '9px', marginLeft: '9px' }}
                />
              </Ball>
              <Ball>
                <Icon
                  name="setaLeft"
                  size={30}
                  style={{ marginTop: '9px', marginLeft: '9px' }}
                />
              </Ball>
            </ContainerBall>
            <ContainerSelectCheckBox>
              <p>Selecione</p>
            </ContainerSelectCheckBox>
          </ContainerCheck>
        </ContainerCheckBox>
        <ContainerCheckBox>
          <Text>Especialistas disponíveis para o plano</Text>
          <ContainerCheck>
            <ContainerSelectCheckBox>
              <p>Selecione</p>
              <ContainerInput>
                <div>
                  <input type="checkbox" />
                  Dr. Wesley
                </div>
                <div>
                  <input type="checkbox" />
                  Dr. Lucas
                </div>
                <div>
                  <input type="checkbox" />
                  Dr. Selma
                </div>
              </ContainerInput>
            </ContainerSelectCheckBox>
            <ContainerBall>
              <Ball>
                <Icon
                  name="setaRight"
                  size={30}
                  style={{ marginTop: '9px', marginLeft: '9px' }}
                />
              </Ball>
              <Ball>
                <Icon
                  name="setaLeft"
                  size={30}
                  style={{ marginTop: '9px', marginLeft: '9px' }}
                />
              </Ball>
            </ContainerBall>
            <ContainerSelectCheckBox>
              <p>Selecione</p>
            </ContainerSelectCheckBox>
          </ContainerCheck>
        </ContainerCheckBox>
      </ContainerCheckBoxMaster>
      {/* <ContainerCheckboxFirst></ContainerCheckboxFirst> */}
      {/* <ContainerCheckboxSecond></ContainerCheckboxSecond> */}
    </Container>
  );
}
