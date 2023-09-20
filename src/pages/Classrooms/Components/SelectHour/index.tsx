import {
  Container,
  ContainerAside,
  ContainerHour,
  ContainerInput,
  ContainerWeek,
  Hour,
  Input
} from './styles';
import { Icon } from '@/components/Icon';
import { useState } from 'react';

export default function SelectHour() {
  const [selectedValueSeg, setSelectedValueSeg] = useState(false);

  const selectOpenModalHour = () => {
    setSelectedValueSeg(true);
  };
  const selectCloseModal = () => {
    setSelectedValueSeg(false);
  };

  return (
    <Container>
      <ContainerWeek>
        <ContainerHour>
          <Hour>
            <h3 className="hour">Horário de disponibilidade</h3>
            <ContainerInput>
              <Input />
              <button type='button' onClick={selectOpenModalHour}>
                <Icon
                  name="hour"
                  size={13}
                  style={{ marginTop: '5px', marginLeft: '-50px' }}
                />
              </button>
            </ContainerInput>
          </Hour>
          <ContainerHour>
            {selectedValueSeg ? (
              <ContainerAside>
                <aside style={{ marginLeft: '20px' }}>
                  <p>de</p>
                  <div>
                    <input type="text" />
                    <text>:</text>
                    <input type="text" />
                  </div>
                  <p>às</p>
                  <div>
                    <input type="text" />
                    <text>:</text>
                    <input type="text" />
                  </div>
                </aside>
              </ContainerAside>
            ) : (
              ''
            )}
            {selectedValueSeg ? (
              <button onClick={selectCloseModal}>
                <Icon
                  name="closeSelect"
                  size={13}
                  style={{ marginTop: '10px' }}
                />
              </button>
            ) : ''}
          </ContainerHour>
        </ContainerHour>
      </ContainerWeek>
    </Container>
  );
}
