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
  ContainerTetx,
  SecondLine
} from './styles';
// import Select from '@/components/Select'
// import ButtonSaveAndAdd from '../ButtonSaveAndAdd'
import { Icon } from '@/components/Icon';
import ButtonCancelAndMessage from '../ButtonCancelAndMessage';

export default function ButtonAddMessage() {
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
          <ButtonList onClick={handleOptionClose}>+ Recado</ButtonList>
          {/* </a> */}
        </ButtonMaster>
      ) : (
        <ButtonMaster>
          {/* <a href="/ostmed/administrativo/cadastrodeclinicas/cadastro"> */}
          <ButtonList onClick={handleOption}>+ Recado</ButtonList>
          {/* </a> */}
        </ButtonMaster>
      )}
      {option ? (
        <Overlay>
          <Container>
            <ContainerTetx>Adicionar recado</ContainerTetx>
            <Label>
              <Text>Selecione o contato</Text>
              <Input style={{ width: '480px' }} />
            </Label>
            <Label>
              <Text>Recado</Text>
              <Input style={{ width: '480px', height: '100px' }} />
            </Label>
            <SecondLine>
              <Label>
                <Text>Data final</Text>
                <Select style={{ marginLeft: '0px', width: '225px' }} />
                <Icon
                  name="calendar"
                  size={13}
                  style={{ marginTop: '15px', marginLeft: '-30px' }}
                />
              </Label>
              <Label>
                <Text>Horário</Text>
                <Select style={{ marginLeft: '0px', width: '225px' }} />
                <Icon
                  name="hour"
                  size={13}
                  style={{ marginTop: '15px', marginLeft: '-30px' }}
                />
              </Label>
            </SecondLine>
            <ButtonCancelAndMessage />
          </Container>
        </Overlay>
      ) : (
        ''
      )}
    </>
  );
}
