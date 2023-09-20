import { Icon } from '@/components/Icon';
import { Input } from '@/components/Input';
import { useState } from 'react';
import { columnsLeadsView, dataLeadsView } from '@/mocks/chairs';
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
  ContainerSelect,
  ContainerDate,
  ContainerCheckbox,
  Checkbox,
  ContainerPreferenceDate,
  ContainerButton,
  InputLeads,
  Container
} from './styles';
import { TableLeads } from './components/tableLeads/index';
import { CardLeads } from './components/card/card';
import ButtonDashboard from './components/buttonDashboard';
import ButtonListContact from './components/buttonListContact';
import ButtonPagination from '@/components/ButtonPagination';
import Header from '@/components/Header';

export function Leads() {
  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [lista, setLista] = useState(true);

  const handleLista = () => {
    setLista(true);
  };

  const handleCard = () => {
    setLista(false);
  };

  const paciente = [
    { value: 'option1', label: 'Paciente' },
    { value: 'option2', label: 'Paciente 2' },
    { value: 'option3', label: 'Paciente 3' }
  ];
  const data = [
    { value: 'option1', label: 'Data' },
    { value: 'option1', label: '24/05/2023' },
    { value: 'option1', label: '13/06/2023' },
    { value: 'option1', label: '15/07/2023' }
  ];

  const horario = [
    { value: 'option1', label: 'Horário' },
    { value: 'option1', label: '10h00' },
    { value: 'option1', label: '11h00' },
    { value: 'option1', label: '12h00' }
  ];
  const email = [
    { value: 'option1', label: 'E-mail' },
    { value: 'option2', label: 'E-mail 2' },
    { value: 'option3', label: 'E-mail 3' }
  ];
  const indicacao = [
    { value: 'option1', label: 'Indicação' },
    { value: 'option2', label: 'Indicação 2' },
    { value: 'option3', label: 'Indicação 3' }
  ];
  const especialidade = [
    { value: 'option1', label: 'Especialidade' },
    { value: 'option2', label: 'Especialidade 2' },
    { value: 'option3', label: 'Especialidade 3' }
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
          <p>Leads</p>
        </HeadeTable>
        <AfterHeadTable>
          <TableSelectec>
            <Select options={paciente} onChange={handleSelectChange} />
            <InputLeads type="text" placeholder="Queixa/Sintoma" />
            <Select options={especialidade} onChange={handleSelectChange} />
            <Select options={email} onChange={handleSelectChange} />
            <InputLeads type="text" placeholder="Telefone" />
            <Select options={indicacao} onChange={handleSelectChange} />
            <ButtonAdd />
          </TableSelectec>
        </AfterHeadTable>
        <Text style={{ color: '#969696' }}>Retorno do contato</Text>
        <ContainerSelect>
          <ContainerDate>
            <Select options={data} onChange={handleSelectChange} />
            <Select options={horario} onChange={handleSelectChange} />
            <ContainerCheckbox>
              <Checkbox type="checkbox" /> sem retorno
            </ContainerCheckbox>
          </ContainerDate>
          <ContainerPreferenceDate></ContainerPreferenceDate>
        </ContainerSelect>
        <ContainerButton>
          <ButtonDashboard />
          <ButtonListContact />
        </ContainerButton>
        {lista ? (
          <ContainerTable>
            <TableLeads columns={columnsLeadsView} data={dataLeadsView} />
          </ContainerTable>
        ) : (
          <ContainerCards>
            <CardLeads />
            <CardLeads />
            <CardLeads />
          </ContainerCards>
        )}
        <ButtonPagination />
      </Container>
    </>
  );
}
