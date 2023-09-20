// import { DayOfWeekRadio } from '@/components/RaioDias'
import {
  Container,
  ContainerHour,
  ContainerWeek,
  Hour,
  SelectContainer
} from './styles';
// import SelectCadastro from '@/components/SelectCadastro'
import { Icon } from '@/components/Icon';
import { useState } from 'react';
import Select from '@/components/Select';

export default function Frequence() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectedValue = (value: string) => {
    setSelectedValue(value);
  };
  const [selectedValueSeg, setSelectedValueSeg] = useState(false);

  const selectOpenModalSeg = () => {
    setSelectedValueSeg(true);
  };
  const selectCloseModalSeg = () => {
    setSelectedValueSeg(false);
  };

  const option2 = [
    { value: 'option1', label: '' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  return (
    <Container>
      <ContainerWeek>
        <ContainerHour>
          <p className="qual">
            <Hour>
              <h3>Qual frequência?</h3>

              <button onClick={selectOpenModalSeg}>
                <Icon
                  name="add"
                  size={13}
                  style={{ marginTop: '20px', marginLeft: '10px' }}
                />
              </button>
            </Hour>
          </p>
          <SelectContainer>
            <Select options={option2} onChange={handleSelectedValue} />
            <Icon
              name="setaDown"
              size={13}
              style={{ marginTop: '-22px', marginLeft: '75px' }}
            />

            {selectedValueSeg ? (
              <>
                <Select options={option2} onChange={handleSelectedValue} />
                <Icon
                  name="setaDown"
                  size={13}
                  style={{ marginTop: '-22px', marginLeft: '75px' }}
                />
              </>
            ) : (
              ''
            )}
            {selectedValueSeg ? (
              <button onClick={selectCloseModalSeg}>
                <Icon
                  name="closeSelect"
                  size={13}
                  style={{ marginTop: '20px',marginRight:'50px' }}
                />
              </button>
            ) : (
              <button onClick={selectOpenModalSeg}>
                {/* <Icon name="add" size={13} /> */}
              </button>
            )}
          </SelectContainer>
        </ContainerHour>
      </ContainerWeek>
    </Container>
  );
}
