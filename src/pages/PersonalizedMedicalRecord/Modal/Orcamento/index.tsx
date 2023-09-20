import {
  Container,
  ContainerButton,
  ContainerChoose,
  ContainerModals,
  ContainerText,
  ContainerType,
  Input,
  Label,
  Line,
  Overlay,
  SaveAndAdd,
  Select,
  Text
} from './styles';
import { Icon } from '@/components/Icon';
import { useEffect, useContext } from 'react';
import { CloseProntuario } from '@/contexts/modalCloseProntuario';
import { Orcamento } from '@/contexts/orcamento';
import ButonAlter from '../../Components/ButtonAlter';

interface IModal {
  visible: boolean
  onClose: () => void
}

export default function ComponentOrcamento({ visible, onClose }: IModal) {
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

  const { openOrcamento } = useContext(Orcamento);
  const { closeCloseProntuario } = useContext(CloseProntuario);

  const Test = () => {
    onClose();
    openOrcamento();
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
        <ContainerText>Orçamento </ContainerText>
        <Line></Line>
        <ButonAlter onClose={onClose}/>
        <ContainerChoose>
          <ContainerModals>
            <Label>
              <p>Título</p>
              <Input placeholder="Procedimentos" />
            </Label>
            <Label>
              <Text>Escolha uma tabela</Text>
              <Select>
                <option>-----</option>
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
