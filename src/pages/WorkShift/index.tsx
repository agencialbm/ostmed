import { Icon } from '@/components/Icon';
import Select from '@/components/Select';
import {
  Container,
  ContainerBottom,
  ContainerLink,
  ContainerSelectMaster,
  CotainerQuestions,
  HomeHeader,
  HomeInput,
  Link,
  SelectContainer,
  Text
} from './styles';
import Form from './Components/Form';
import Button from './Components/Button';
import Table from './Components/Table';
import Header from '@/components/Header';
import { useState } from 'react';

export default function WorkShift() {
  const [selectedValueSeg, setSelectedValueSeg] = useState(false);
  const [selectedValueAge, setSelectedValueAge] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const selectOpenModalSeg = () => {
    setSelectedValueSeg(true);
  };
  const selectCloseModalSeg = () => {
    setSelectedValueSeg(false);
  };
  const selectOpenModalAge = () => {
    setSelectedValueAge(true);
  };
  const selectCloseModalAge = () => {
    setSelectedValueAge(false);
  };

  const handleSelectedValueSeg = (value: string) => {
    setSelectedValue(value);
  };

  const handleSelectedValueAge = (value: string) => {
    setSelectedValue(value);
  };

  const option2 = [
    { value: 'option1', label: '' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  return (
    <>
      <Container>
        <ContainerLink>
          <Link>Administrativo &nbsp; &rsaquo;</Link>
          <Link>Turnos de trabalho</Link>
        </ContainerLink>
        <HomeHeader>
          <p></p>
          <HomeInput>
            <button>
              <Icon name="notification" />
            </button>
            <button style={{ zIndex: 100 }}>
              <Icon name="avatar" size={60} />
            </button>
          </HomeInput>
        </HomeHeader>
        <Form />
        <Table />
        <ContainerBottom>
          <CotainerQuestions>
            <Text>
              Escolha os convênios vinculados a essa clínica que serão
              disponibilizados para o <br />
              agendamento desse turno:
            </Text>
            <SelectContainer className="Selectbottom">
              <p className="qual">
                Qual convênio?
                <button onClick={selectOpenModalSeg}>
                  <Icon
                    name="add"
                    size={13}
                    style={{ marginTop: '20px', marginLeft: '10px' }}
                  />
                </button>
              </p>
              <Select options={option2} onChange={handleSelectedValueSeg} />
              <Icon
                name="setaDown"
                size={13}
                style={{ marginTop: '-22px', marginLeft: '110px' }}
              />

              {selectedValueSeg ? (
                <>
                  <Select options={option2} onChange={handleSelectedValueSeg} />
                  <Icon
                    name="setaDown"
                    size={13}
                    style={{ marginTop: '-22px', marginLeft: '110px' }}
                  />
                </>
              ) : (
                ''
              )}
              {selectedValueSeg ? (
                <button onClick={selectCloseModalSeg}>
                  <Icon
                    name="closeSelect"
                    size={13}
                    style={{ marginTop: '20px', marginRight: '10px' }}
                  />
                </button>
              ) : (
                <button onClick={selectOpenModalSeg}>
                  {/* <Icon name="add" size={13} /> */}
                </button>
              )}
            </SelectContainer>
          </CotainerQuestions>
          <CotainerQuestions>
            <Text>
              Escolha os tipos de agendamento que estarão disponíveis para o
              agendamento <br />
              desse turno:
            </Text>
            <ContainerSelectMaster>
              <SelectContainer className="Selectbottom">
                <p className="qual">
                  Qual agendamento?
                  <button onClick={selectOpenModalAge}>
                    <Icon
                      name="add"
                      size={13}
                      style={{ marginTop: '20px', marginLeft: '10px' }}
                    />
                  </button>
                </p>
                <Select options={option2} onChange={handleSelectedValueAge} />
                <Icon
                  name="setaDown"
                  size={13}
                  style={{ marginTop: '-22px', marginLeft: '110px' }}
                />

                {selectedValueAge ? (
                  <>
                    <Select
                      options={option2}
                      onChange={handleSelectedValueAge}
                    />
                    <Icon
                      name="setaDown"
                      size={13}
                      style={{ marginTop: '-22px', marginLeft: '110px' }}
                    />
                  </>
                ) : (
                  ''
                )}
                {selectedValueAge ? (
                  <button onClick={selectCloseModalAge}>
                    <Icon
                      name="closeSelect"
                      size={13}
                      style={{ marginTop: '20px', marginRight: '10px' }}
                    />
                  </button>
                ) : (
                  <button onClick={selectOpenModalAge}>
                    {/* <Icon name="add" size={13} /> */}
                  </button>
                )}
              </SelectContainer>
            </ContainerSelectMaster>
          </CotainerQuestions>
        </ContainerBottom>
        <Button />
      </Container>
    </>
  );
}
