import { Icon } from '@/components/Icon';
import { Input } from '@/components/Input';
import { useState, useContext } from 'react';
import { ModalContext } from '@/contexts/modal';
import { columnsWaitingListView, dataWaitingListView } from '@/mocks/chairs';
import Select from '@/components/Select';
import { HomeHeader, HomeInput } from './../Home/styled';
import ButtonAdd from './components/buttonAdd';
import {
  HeadeTable,
  AfterHeadTable,
  TableSelectec,
  Text,
  ContainerTable,
  ContainerCards,
  ContainerDateHour,
  ContainerSelectDate,
  ContainerSelectHour,
  ButtonOpenModal,
  ContainerSelect,
  ContainerDate,
  ContainerDH,
  ContainerPreferenceDate,
  Container
} from './styles';
import { TableWaitingList } from './components/tableWaitingList/index';
import { CardWaitingList } from './components/card/card';
import ButtonPagination from '@/components/ButtonPagination';
import Header from '@/components/Header';

export function WaitingList() {
  const [inputValue, setInputValue] = useState('');
  const [dateHourVisible, setDateHourVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [lista, setLista] = useState(true);

  function HandleOpenModal() {
    setDateHourVisible(true);
  }

  function HandleCloseModal() {
    setDateHourVisible(false);
  }

  const options = [
    { value: 'option1', label: 'Paciente' },
    { value: 'option2', label: 'Paciente 2' },
    { value: 'option3', label: 'Paciente 3' }
  ];
  const options2 = [
    { value: 'option1', label: 'Data de preferência' },
    { value: 'option1', label: '24/05/2023' },
    { value: 'option1', label: '13/06/2023' },
    { value: 'option1', label: '15/07/2023' }
  ];

  const options3 = [
    { value: 'option1', label: 'Horário de preferência' },
    { value: 'option1', label: '10h00' },
    { value: 'option1', label: '11h00' },
    { value: 'option1', label: '12h00' }
  ];
  const options6 = [
    { value: 'option1', label: 'Data alternativa' },
    { value: 'option1', label: '24/05/2023' },
    { value: 'option1', label: '13/06/2023' },
    { value: 'option1', label: '15/07/2023' }
  ];

  const options7 = [
    { value: 'option1', label: 'Horário alternativo' },
    { value: 'option1', label: '10h00' },
    { value: 'option1', label: '11h00' },
    { value: 'option1', label: '12h00' }
  ];

  const option4 = [
    { value: 'option1', label: 'Convênio' },
    { value: 'option2', label: 'Convênio 2' },
    { value: 'option3', label: 'Convênio 3' }
  ];
  const option5 = [
    { value: 'option1', label: 'Procedimento' },
    { value: 'option2', label: 'Procedimento 2' },
    { value: 'option3', label: 'Procedimento 3' }
  ];

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <>
      <Container>
        <HomeHeader>
          <p>Dr. Wesley Lima - Osteopatia</p>
          <Header />
        </HomeHeader>

        <HeadeTable>
          <p>Lista de espera</p>
        </HeadeTable>
        <AfterHeadTable>
          <Text>Adicionar paciente na lista de espera</Text>
          <TableSelectec>
            <ContainerSelect>
              <Select options={options} onChange={handleSelectChange} />
              <ContainerDate>
                <Select options={options2} onChange={handleSelectChange} />
                <ButtonOpenModal
                  onClick={dateHourVisible ? HandleCloseModal : HandleOpenModal}
                >
                  <Icon name="add" size={15} style={{ marginRight: '10px' }} />
                </ButtonOpenModal>
              </ContainerDate>
            </ContainerSelect>
            <ContainerPreferenceDate>
              <Select options={options3} onChange={handleSelectChange} />
              <ContainerDH>
                {dateHourVisible ? (
                  <>
                    <ContainerDateHour>
                      <ContainerSelectDate>
                        <Select
                          options={options6}
                          onChange={handleSelectChange}
                        />
                      </ContainerSelectDate>
                      <ContainerSelectHour>
                        <Select
                          options={options7}
                          onChange={handleSelectChange}
                        />
                      </ContainerSelectHour>
                    </ContainerDateHour>
                  </>
                ) : (
                  ''
                )}
              </ContainerDH>
            </ContainerPreferenceDate>

            <Select options={option4} onChange={handleSelectChange} />
            <Select options={option5} onChange={handleSelectChange} />
            <ButtonAdd />
          </TableSelectec>
        </AfterHeadTable>
        {lista ? (
          <ContainerTable>
            <TableWaitingList
              columns={columnsWaitingListView}
              data={dataWaitingListView}
            />
          </ContainerTable>
        ) : (
          <ContainerCards>
            <CardWaitingList />
            <CardWaitingList />
            <CardWaitingList />
            <CardWaitingList />
            <CardWaitingList />
            <CardWaitingList />
            <CardWaitingList />
            <CardWaitingList />
            <CardWaitingList />
            <CardWaitingList />
          </ContainerCards>
        )}
        <ButtonPagination />
      </Container>
    </>
  );
}
