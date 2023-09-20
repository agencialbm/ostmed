import { useContext, useEffect, useState } from 'react';
import Select from '@/components/Select';
import {
  Ball,
  Container,
  ContainerBottom,
  ContainerButton,
  ContainerCard,
  ContainerDate,
  ContainerDateAndHour,
  ContainerName,
  ContainerTitle,
  ContainerTop,
  Overlay,
  Status,
  Text
} from './styled';
import ButtonAddTask from './components/ButtonAddTask';
import ButtonAddMessage from './components/ButtonAddMessage';
import { TarefaCardContext } from '@/contexts/tarefaCard';
import { Icon } from '../Icon';
import { BloquearHorarioContext } from '@/contexts/bloquearHorario';

interface IBloquearHorarioModal {
  visible?: boolean
  onClose: () => void
}

export function BloquearHorario({
  visible,
  onClose
}: IBloquearHorarioModal) {
  const { modalBloquearVisibleCard } = useContext(BloquearHorarioContext);
  const [selectedValue, setSelectedValue] = useState('');
  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };
  const paciente = [
    { value: 'option1', label: 'pendente' },
    { value: 'option2', label: 'em progresso' },
    { value: 'option3', label: 'Concluída' }
  ];

  const [option, setOption] = useState(false);

  const handleOptionClose = () => {
    setOption(false);
  };
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <>
      {option ? (
        <Overlay>
          <Container>
            <button className="buttonClose" onClick={handleOptionClose}>
              <Icon
                name="closeSelect"
                size={13}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <ContainerTitle>
              <p>Bloquear Horário</p>
            </ContainerTitle>
            <ContainerButton>
              <ButtonAddTask />
              <ButtonAddMessage />
            </ContainerButton>
            {modalBloquearVisibleCard && (
              <ContainerCard>
                <ContainerTop>
                  <ContainerName>
                    <input type="checkbox" />
                    <Text>1. Nome da tarefa</Text>
                    <Icon
                      name="delete"
                      size={20}
                      style={{ marginTop: '13px', marginLeft: '90px' }}
                    />
                  </ContainerName>
                </ContainerTop>
                <ContainerBottom>
                  <Status>
                    <Ball></Ball>
                    <Select options={paciente} onChange={handleSelectChange} />
                    <Icon
                      name="setaDown"
                      size={8}
                      style={{
                        marginTop: '20px',
                        marginLeft: '-20px',
                        color: 'red'
                      }}
                    />
                  </Status>
                  <ContainerDateAndHour>
                    <ContainerDate>
                      <Icon
                        name="calendar"
                        size={13}
                        style={{ marginTop: '17px', marginLeft: '20px' }}
                      />
                      <p>20/02</p>
                    </ContainerDate>
                    <ContainerDate>
                      <Icon
                        name="hour"
                        size={13}
                        style={{ marginTop: '17px', marginLeft: '20px' }}
                      />
                      <p>17h00</p>
                    </ContainerDate>
                  </ContainerDateAndHour>
                </ContainerBottom>
              </ContainerCard>
            )}
          </Container>
        </Overlay>
      ) : (
        ''
      )}
    </>
  );
}
// ) : (
//   ''
// )}
