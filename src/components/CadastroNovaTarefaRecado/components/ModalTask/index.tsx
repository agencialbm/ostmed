import {
  Cancel,
  Container,
  ContainerButton,
  ContainerTetx,
  Input,
  Label,
  Overlay,
  SaveAndAdd,
  SecondLine,
  Select,
  Text
} from './styles';
import { useContext } from 'react';
import { Icon } from '@/components/Icon';
import { TarefaContext } from '@/contexts/tarefa';
import { TarefaCardContext } from '@/contexts/tarefaCard';

interface ITarefaRecadoModal {
  visible?: boolean
  onClose?: () => void
}

export default function ModalTask({
  onClose,
  visible = true
}: ITarefaRecadoModal) {

  const { closeTarefa } = useContext(
    TarefaContext
  );

  const { openTarefaCard } = useContext(
    TarefaCardContext
  );

  const handleSelectChange = () => {
    openTarefaCard();
    closeTarefa();
  };

  if (!visible) {
    return null;
  }

  return (
    <Overlay>
      <Container>
        <ContainerTetx>Adicionar tarefa</ContainerTetx>
        <Label>
          <Text>Nome da tarefa</Text>
          <Input style={{ width: '480px' }} />
        </Label>
        <Label>
          <Text>Descrição</Text>
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
        <SecondLine>
          <Label>
            <Text>Status</Text>
            <Select style={{ marginLeft: '0px', width: '225px' }} />
            <Icon
              name="setaDown"
              size={13}
              style={{ marginTop: '10px', marginLeft: '-30px' }}
            />
          </Label>
          <Label>
            <Text>Periodicidade</Text>
            <Select style={{ marginLeft: '0px', width: '225px' }} />
            <Icon
              name="setaDown"
              size={13}
              style={{ marginTop: '10px', marginLeft: '-30px' }}
            />
          </Label>
        </SecondLine>
        <ContainerButton>
          <Cancel onClick={() =>  closeTarefa()}>Cancelar</Cancel>
          <SaveAndAdd onClick={handleSelectChange}>Criar tarefa</SaveAndAdd>
        </ContainerButton>
      </Container>
    </Overlay>
  );
}
