import {
  Container,
  ContainerButton,
  ContainerCheckBox,
  ContainerModals,
  ContainerText,
  ContainerType,
  Input,
  Label,
  Line,
  Overlay,
  SaveAndAdd,
  Text
} from './styles';
import { Icon } from '@/components/Icon';
import { useEffect, useContext, useState } from 'react';
import { CloseProntuario } from '@/contexts/modalCloseProntuario';
import { MultiplaEscolha } from '@/contexts/multiplaEscolha';
import ButonAlter from '../../Components/ButtonAlter';

interface IModal {
  visible: boolean
  onClose: () => void
}

export default function ComponentMultiplaEscolha({ visible, onClose }: IModal) {
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

  const [openSelect, setOpenSelect] = useState(false);

  const selectOpenModal = () => {
    setOpenSelect(true);
  };
  const selectCloseModal = () => {
    setOpenSelect(false);
  };

  const { openMultiplaEscolha } = useContext(MultiplaEscolha);
  const { closeCloseProntuario } = useContext(CloseProntuario);

  const Test = () => {
    onClose();
    openMultiplaEscolha();
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
        <ContainerText>Multipla escolha</ContainerText>
        <Line></Line>
        <ButonAlter onClose={onClose}/>
        <ContainerModals>
          <Label>
            <p>Título</p>
            <Input />
          </Label>
          <Text>Preenha as opções abaixo:</Text>
          <ContainerCheckBox>
            <input type="checkbox" />
            <Input />
            <button className="buttonClose" onClick={selectOpenModal}>
              <Icon
                name="add"
                size={13}
                style={{
                  marginTop: '18px',
                  marginRight: '8px'
                }}
              />
            </button>
          </ContainerCheckBox>

          {openSelect ? (
            <ContainerCheckBox>
              <input type="checkbox" />
              <Input />
              <button className="buttonClose" onClick={selectCloseModal}>
                <Icon
                  name="closeSelect"
                  size={10}
                  style={{ marginTop: '18px', marginRight: '8px' }}
                />
              </button>
            </ContainerCheckBox>
          ) : (
            ''
          )}
        </ContainerModals>

        <ContainerButton>
          <SaveAndAdd onClick={Test}>Incluir</SaveAndAdd>
        </ContainerButton>
      </Container>
    </Overlay>
  );
}
