import { ToggleOn } from '../../../../components/CadastroNovaReceita/components/TogglerOn';
import { Icon } from '@/components/Icon';
import Select from '@/components/Select';
import {
  Container,
  ContainerRegister,
  ContainerText,
  FirstLine,
  Input,
  Label,
  SelectContainer,
  Text,
  Toggler
} from './styles';
import { useState } from 'react';
import SelectHour from '../SelectHour';

export default function Form() {
  const [selectedValueSeg, setSelectedValueSeg] = useState(false);
  const [selectedValueAge, setSelectedValueAge] = useState(false);
  const [selectedValueDis, setSelectedValueDis] = useState(false);
  const [selectedValuePro, setSelectedValuePro] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValueCal, setSelectedValueCal] = useState(false);
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleSelectedValue = (value: string) => {
    setSelectedValue(value);
  };

  const selectOpenModalCal = () => {
    setSelectedValueCal(true);
  };
  const selectCloseModalCal = () => {
    setSelectedValueCal(false);
  };

  const handleToggle = (newIsOn: boolean) => {
    setIsOn(newIsOn);
  };

  const handleSelectedValueSeg = (value: string) => {
    setSelectedValueSeg(false);
  };

  const handleSelectedValueAge = (value: string) => {
    setSelectedValueAge(false);
  };
  // const handleSelectedValueDis = (value: string) => {
  //   setSelectedValueDis(value)
  // }
  const handleSelectedValuePro = (value: string) => {
    setSelectedValuePro(false);
  };
  // const handleSelectedValueCal = (value: string) => {
  //   setSelectedValueCal(value)
  // }

  const option2 = [
    { value: 'option1', label: '' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];
  return (
    <Container>
      <ContainerRegister>
        <FirstLine>
          <Label>
            <Text>Nome da sala</Text>
            <Input style={{ minWidth: '370px' }} />
          </Label>
          <Label>
            <Text>Número da sala</Text>
            <Input style={{ minWidth: '370px' }} />
          </Label>
          <Label>
            <Text>Número máximo de ocupantes por hora</Text>
            <SelectContainer>
              <Select options={option2} onChange={handleSelectedValueAge} />
              <Icon
                name="setaDown"
                size={13}
                style={{ marginTop: '-22px', marginLeft: '270px' }}
              />
            </SelectContainer>
          </Label>
          <Label>
            <Text>Unidade de atendimento</Text>
            <SelectContainer>
              <Select options={option2} onChange={handleSelectedValueAge} />
              <Icon
                name="setaDown"
                size={13}
                style={{ marginTop: '-22px', marginLeft: '270px' }}
              />
            </SelectContainer>
          </Label>
        </FirstLine>
        <FirstLine>
          <Label>
            <SelectHour />
            {/* <Text>Horário de disponibilidade</Text>

            <Input style={{ minWidth: '750px' }} />
            <Icon
              name="calendar"
              size={13}
              style={{ marginTop: '-22px', marginLeft: '110px' }}
            /> */}
          </Label>
          <Label>
            <Text>Dias de disponibilidade</Text>
            <SelectContainer>
              <Select options={option2} onChange={handleSelectedValueAge} />
              <Icon
                name="setaDown"
                size={13}
                style={{ marginTop: '-22px', marginLeft: '270px' }}
              />
            </SelectContainer>
          </Label>
          <Toggler>
            <ContainerText>
              <Text className='textWish'>Deseja incluir profissionais?</Text>
              <ToggleOn isOn={isOn} onToggle={handleToggle} />
            </ContainerText>
          </Toggler>
          <Label>
            <br/><br/>
            <SelectContainer>
              <Select options={option2} onChange={handleSelectedValuePro} />
              <Icon
                name="setaDown"
                size={13}
                style={{ marginTop: '-22px', marginLeft: '270px' }}
              />
            </SelectContainer>
          </Label>
        </FirstLine>
      </ContainerRegister>
    </Container>
  );
}
