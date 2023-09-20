
import {
  Container,
  ContainerHour,
  ContainerWeek,
  Hour,
} from './styles';
import { Icon } from '@/components/Icon';
import { useState } from 'react';

export default function Frequence() {
  const [selectedValueSeg, setSelectedValueSeg] = useState(false);

  const selectOpenModal = () => {
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
            <h3 className="hour">Qual horário?</h3>
            <button onClick={selectOpenModal}>
              <Icon
                name="add"
                size={13}
                style={{ marginTop: '20px', marginLeft: '-110px' }}
              />
            </button>
          </Hour>

          <aside>
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

          <ContainerHour>
            {selectedValueSeg ? (
              <>
                <aside style={{marginLeft:'20px'}}>
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

              </>
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
            ) : (
              <button onClick={selectOpenModal}>
                {/* <Icon name="add" size={13} /> */}
              </button>
            )}
          </ContainerHour>
        </ContainerHour>
      </ContainerWeek>
    </Container>
  );
}
