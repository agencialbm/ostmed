import {
  ButtonList,
  ButtonMaster,
  Container,
  ContainerInput,
  ContainerTetx,
  Input,
  Overlay
} from './styles';
import { Icon } from './../../../../components/Icon/icon';
import { useState } from 'react';
import Documents from '../Documents';

export default function ButtonDocuments() {
  const [option, setOption] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };
  const handleOption = () => {
    setOption(true);
  };
  const handleOptionClose = () => {
    setOption(false);
  };


  return (
    <>
      {option ? (
        <ButtonMaster>
          <ButtonList onClick={handleOptionClose}>+ Documentos</ButtonList>
        </ButtonMaster>
      ) : (
        <ButtonMaster>
          <ButtonList onClick={handleOption}>+ Documentos</ButtonList>
        </ButtonMaster>
      )}
      {option ? (
        <Overlay>
          <Container>
            <button onClick={handleOptionClose}>
              <Icon
                name="closeSelect"
                size={13}
                style={{ marginTop: '2px', marginLeft: '650px' }}
              />
            </button>
            <ContainerTetx>Documentos</ContainerTetx>
            <ContainerInput>
              <Input placeholder="Selecione o tipo de documento" />
              <Icon
                name="searchWhite"
                size={20}
                style={{ position: 'relative', right: '540px', top: '8px' }}
              />
            </ContainerInput>
            <Documents />
          </Container>
        </Overlay>
      ) : (
        ''
      )}
    </>
  );
}
