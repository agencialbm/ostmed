import {
  Container,
  ContainerButton,
  ContainerChoose,
  ContainerModals,
  ContainerText,
  Input,
  Label,
  Line,
  Overlay,
  SaveAndAdd,
  Select
} from './styles';
import { Icon } from '@/components/Icon';
import { useEffect, useContext } from 'react';
import { CloseProntuario } from '@/contexts/modalCloseProntuario';
import { BuscarTabelas } from '@/contexts/buscarTabelas';
import ButonAlter from '../../Components/ButtonAlter';

interface IModal {
  visible: boolean
  onClose: () => void
}

export default function ComponentBuscarTabelas({ visible, onClose }: IModal) {
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

  const { openBuscarTabelas } = useContext(BuscarTabelas);
  const { closeCloseProntuario } = useContext(CloseProntuario);

  const Test = () => {
    onClose();
    openBuscarTabelas();
    closeCloseProntuario();
  };

  return (
    <Overlay>
      <Container>
        <button className="buttonClose" onClick={onClose}>
          <Icon
            name="closeSelect"
            size={13}
            style={{
              marginTop: '2px'
            }}
          />
        </button>
        <ContainerText>Buscar tabelas</ContainerText>
        <Line></Line>
        <ButonAlter onClose={onClose}/>
        <ContainerChoose>
          <ContainerModals>
            <Label>
              <p>Título</p>
              <Input placeholder="Procedimentos" />
            </Label>
            <Label>
              <p>Escolha uma base</p>
              <Select>
                <option>Selecione uma tabela</option>
                <option>Tabela TUSS</option>
                <option>Tabela odontológica CBHPO</option>
              </Select>

            </Label>
          </ContainerModals>
        </ContainerChoose>

        <ContainerButton>
          <SaveAndAdd onClick={Test}>Incluir</SaveAndAdd>
        </ContainerButton>
      </Container>
    </Overlay>
  );
}
