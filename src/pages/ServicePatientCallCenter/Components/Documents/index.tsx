import {
  Container,
  ContainerHour,
  ContainerText,
  ContainerWeek,
  Plus,
  Text
} from './styles';
import { Icon } from '@/components/Icon';
import { useState } from 'react';

export default function Documents() {
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
          <ContainerText >
            <Text>Atestados</Text>
            <Text>
              Ver modelos
              <button onClick={selectOpenModal}>
                <Icon
                  name="add"
                  size={13}
                  style={{ marginTop: '2px', marginLeft: '0px' }}
                />
              </button>
            </Text>
          </ContainerText>
          <ContainerHour>
            {selectedValueSeg ? (
              <ContainerText className='sub-item'>
                <Text>Atestado 1</Text>
              </ContainerText>
            ) : (
              ''
            )}
            {selectedValueSeg ? (
              <button onClick={selectCloseModal}>
                <Icon
                  name="closeSelect"
                  size={13}
                  style={{
                    marginTop: '10px',
                    marginLeft:'320px',
                    background: 'transparent'
                  }}
                />
              </button>
            ) : (
              ''
            )}
          </ContainerHour>
          <ContainerText>
            <Text>Encaminhamentos</Text>
            <Text>
              Ver modelos
              <button onClick={selectOpenModal}>
                <Icon
                  name="add"
                  size={13}
                  style={{ marginTop: '2px', marginLeft: '0px' }}
                />
              </button>
            </Text>
          </ContainerText>
          <ContainerText>
            <Text>Solicitações de procedimento</Text>
            <Text>
              Ver modelos
              <button onClick={selectOpenModal}>
                <Icon
                  name="add"
                  size={13}
                  style={{ marginTop: '2px', marginLeft: '0px' }}
                />
              </button>
            </Text>
          </ContainerText>
          <ContainerText>
            <Text>Prescrições</Text>
            <Text>
              Ver modelos
              <button onClick={selectOpenModal}>
                <Icon
                  name="add"
                  size={13}
                  style={{ marginTop: '2px', marginLeft: '0px' }}
                />
              </button>
            </Text>
          </ContainerText>
          <ContainerText>
            <Text>Outros documentos</Text>
            <Text>
              Ver modelos
              <button onClick={selectOpenModal}>
                <Icon
                  name="add"
                  size={13}
                  style={{ marginTop: '2px', marginLeft: '0px' }}
                />
              </button>
            </Text>
          </ContainerText>
        </ContainerHour>
      </ContainerWeek>
    </Container>
  );
}
