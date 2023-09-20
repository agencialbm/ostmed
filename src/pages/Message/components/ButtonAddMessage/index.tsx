import { useState } from 'react';
import {
  ButtonList,
  ButtonMaster,
  Container,
  Select,
  Label,
  Overlay,
  Text,
  Input,
  ContainerTetx,
  User,
  Image
} from './styles';
// import Select from '@/components/Select'
// import ButtonSaveAndAdd from '../ButtonSaveAndAdd'
import { Icon } from '@/components/Icon';
import ButtonCancelAndSave from '../ButtonCancelAndSave';
import image from '../../../../assets/imageProfile.svg';
export default function ButtonAddMessage() {
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
          {/* <a href="/ostmed/administrativo/cadastrodeclinicas/cadastro"> */}
          <ButtonList onClick={handleOptionClose}>Ver recado</ButtonList>
          {/* </a> */}
        </ButtonMaster>
      ) : (
        <ButtonMaster>
          {/* <a href="/ostmed/administrativo/cadastrodeclinicas/cadastro"> */}
          <ButtonList onClick={handleOption}>Ver recado</ButtonList>
          {/* </a> */}
        </ButtonMaster>
      )}
      {option ? (
        <Overlay>
          <Container>
            <ContainerTetx>Ver recado</ContainerTetx>
            <Image>
              <img src={image} alt="image" style={{ marginRight: '100px' }} />
              <Text>Nome de quem enviou</Text>
            </Image>
            <Label>
              <Text>Recado</Text>
              <Input style={{ width: '480px', height: '150px' }} />
            </Label>
            <Label>
              <Text>Status</Text>
              <Select style={{ marginLeft: '0px', width: '225px' }} />
              <Icon
                name="setaDown"
                size={13}
                style={{ marginTop: '10px', marginLeft: '-30px' }}
              />
            </Label>
            <ButtonCancelAndSave />
          </Container>
        </Overlay>
      ) : (
        ''
      )}
    </>
  );
}
