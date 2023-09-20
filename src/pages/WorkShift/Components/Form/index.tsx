import { Icon } from '@/components/Icon';
import { useContext, useState } from 'react';
import { ModalContext } from '@/contexts/modal';
import Select from '@/components/Select';
import {
  Container,
  ContainerRegister,
  FirstLine,
  Input,
  Label,
  SecondLine,
  SelectContainer,
  SelectS,
  Text
} from './styles';

export default function Form() {
  const { modalVisible, openModal, closeModal } = useContext(ModalContext);

  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleSelectClose = () => {
    closeModal();
  };

  const handleSelect = () => {
    openModal();
  };
  const option2 = [
    { value: 'option1', label: 'Especialista' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];
  return (
    <Container>
      <ContainerRegister>
        <FirstLine>
          <Label>
            <Text>Nome do terapeuta</Text>
            <Input style={{ width: '700px' }} />
          </Label>
          <Label>
            <Text>Data de início</Text>
            <SelectS style={{ width: '300px' }} />
            <Icon
              name="calendar"
              size={12}
              style={{ position: 'relative', left: '-25px', top: '0px' }}
            />
          </Label>
          <Label>
            <Text>Data de fim</Text>
            <SelectS style={{ width: '300px' }} />
            <Icon
              name="calendar"
              size={12}
              style={{ position: 'relative', left: '-25px', top: '0px' }}
            />
          </Label>
        </FirstLine>

        <SecondLine>
          <Text>Especialidade</Text>
          <SelectContainer>
            <Select options={option2} onChange={handleSelectChange} />
            <Icon
              name="setaDown"
              size={13}
              style={{ marginTop: '10px', marginLeft: '-50px' }}
            />
            {modalVisible ? (
              <>
                <Select options={option2} onChange={handleSelectChange} />
                <Icon
                  name="setaDown"
                  size={13}
                  style={{ marginTop: '10px', marginLeft: '-50px' }}
                />
              </>
            ) : (
              ''
            )}
            {modalVisible ? (
              <button onClick={handleSelectClose}>
                <Icon name="closeSelect" size={13} />
              </button>
            ) : (
              <button onClick={handleSelect}>
                <Icon name="add" size={13} />
              </button>
            )}
          </SelectContainer>
        </SecondLine>
        <hr
          style={{
            border: '1px dotted black',
            marginTop: '40px',
            marginLeft: '40px',
            marginRight: '60px'
          }}
        />
      </ContainerRegister>
    </Container>
  );
}
