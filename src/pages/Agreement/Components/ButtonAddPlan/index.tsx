import { useState } from 'react';
import {
  ButtonList,
  ButtonMaster,
  Container,
  Select,
  Label,
  Overlay,
  Text,
  Input,
  ContainerTetx
} from './styles';
// import Select from '@/components/Select'
import ButtonSaveAndAdd from '../ButtonSaveAndAdd';
import { Icon } from '@/components/Icon';

export default function ButtonAddPlan() {
  const [option, setOption] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };
  const handleOption = () => {
    setOption(true);
  };
  const handleOptionClose = () => {
    setOption(false);
  };

  const option2 = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];
  return (
    <>
      {option ? (
        <ButtonMaster>
          {/* <a href="/ostmed/administrativo/cadastrodeclinicas/cadastro"> */}
          <ButtonList onClick={handleOptionClose}>Adicionar plano</ButtonList>
          {/* </a> */}
        </ButtonMaster>
      ) : (
        <ButtonMaster>
          {/* <a href="/ostmed/administrativo/cadastrodeclinicas/cadastro"> */}
          <ButtonList onClick={handleOption}>Adicionar plano</ButtonList>
          {/* </a> */}
        </ButtonMaster>
      )}
      {option ? (
        <Overlay>
          <Container>
            <ContainerTetx>Adicionar plano</ContainerTetx>
            <Label>
              <Text>Tipo de plano</Text>
              <Input style={{  width: '480px' }} />
              {/* <Icon
                name="setaDown"
                size={13}
                style={{  marginTop: '10px', marginLeft: '-30px' }}
              /> */}
            </Label>
            <Label>
              <Text>Especialidades</Text>
              <Select style={{  marginLeft: '0px', width: '480px'}} />
              <Icon
                name="setaDown"
                size={13}
                style={{ marginTop: '10px', marginLeft: '-30px' }}
              />
            </Label>
            <Label>
              <Text>Profissionais</Text>
              <Select style={{  marginLeft: '0px', width: '480px' }} />
              <Icon
                name="setaDown"
                size={13}
                style={{ marginTop: '10px', marginLeft: '-30px' }}
              />
            </Label>
            <Label>
              <Text>Clínicas</Text>
              <Select style={{  marginLeft: '0px', width: '480px' }} />
              <Icon
                name="setaDown"
                size={13}
                style={{ marginTop: '10px', marginLeft: '-30px' }}
              />
            </Label>
            <ButtonSaveAndAdd />
          </Container>
        </Overlay>
      ) : (
        ''
      )}
    </>
  );
}
