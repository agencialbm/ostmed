import { UserContext } from '@/contexts/user.context';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Ball,
  ContainerAvatar,
  ContainerBall,
  ContainerButton,
  ContainerDatePatient,
  ContainerDetailsPatient,
  ContainerFinancial,
  ContainerLine,
  ContainerPatient,
  ContainerService,
  ContainerSide,
  ContainerStatus,
  ContainerTitle,
  ContainerWhats,
  EyeContainer,
  EyeContainerTop,
  HomeHeader,
  HomeSelect,
  Overlay,
  Text
} from './styled';
import Select from '@/components/Select';
import { Icon } from '@/components/Icon';
import { ModalOption } from '@/components/ModalOption';
import { ModalContext } from '@/contexts/modal';
import { CadastroNovaReceita } from '@/components/CadastroNovaReceita';
import { DespesaContext } from '@/contexts/novaDespesa';
import { CadastroNovaDespesa } from '@/components/CadastroNovaReceita copy';
import { ReceitaModalContext } from '@/contexts/novaReceita';
import Header from '@/components/Header';
import { EditeTableModalContext } from '@/contexts/modalEditeTable';
import { PacientesModal } from '@/components/Pacientes';
import { ModalCadastroPaciente } from '@/components/ModalCadastroPaciente';

export function Home() {
  const { EditeTableopenModal, modalVisibleEditeTable,EditeTablecloseModal } = useContext(
    EditeTableModalContext
  );

  const navigate = useNavigate();
  const { isAuthenticated } = useContext(UserContext);
  const [selectedValue, setSelectedValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [option, setOption] = useState(false);
  const [patient, setPatiente] = useState(false);

  const { modalVisible, openModal, closeModal } = useContext(ModalContext);
  const { modalVisibleDespesa } = useContext(DespesaContext);
  const { modalVisibleReceita } = useContext(ReceitaModalContext);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleOptionPatient = () => {
    setPatiente(true);
  };
  const handleOptionPatientClose = () => {
    setPatiente(false);
  };
  const handleOption = () => {
    setOption(true);
  };

  const handleSelect = () => {
    openModal();
  };

  const handleSelectClose = () => {
    closeModal();
  };

  const handleOptionClose = () => {
    setOption(false);
  };

  const handleLeads = () => {
    navigate('/ostmed/pacientes/leads');
  };

  const handleLista = () => {
    navigate('/ostmed/pacientes/listaDeEspera');
  };

  const status = [
    { value: 'option1', label: 'Agendado' },
    { value: 'option2', label: 'Confirmado' },
    { value: 'option3', label: 'Cancelado' },
    { value: 'option3', label: 'Faltou' }
  ];
  const options = [
    { value: 'option1', label: 'Especialidade' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  const option2 = [
    { value: 'option1', label: 'Especialista' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  if (modalVisibleEditeTable) {
    return <PacientesModal />;
  }

  return (
    <>
      <ModalCadastroPaciente
        onClose={() => false}
        visible={modalVisibleEditeTable}
      />

      <HomeHeader>
        <HomeSelect>
          <Select options={options} onChange={handleSelectChange} />
          <Select options={option2} onChange={handleSelectChange} />
          {modalVisible ? (
            <Select options={option2} onChange={handleSelectChange} />
          ) : (
            ''
          )}
          {modalVisible ? (
            <button onClick={handleSelectClose}>
              <Icon name="closeSelect" size={13} />
            </button>
          ) : (
            <button onClick={handleSelect}>
              <Icon name="add" size={13} />
            </button>
          )}
        </HomeSelect>
        <Header />
      </HomeHeader>
      <section>
        <button onClick={handleLeads} className="leads">
          Leads
        </button>
        <button onClick={handleLista} className="lista">
          Lista de espera
        </button>
        <div>
          {option ? (
            <button onClick={handleOptionClose}>
              <Icon name="addModal" size={39} />
            </button>
          ) : (
            <button onClick={handleOption}>
              <Icon name="addModal" size={39} />
            </button>
          )}
          {option ? <ModalOption /> : ''}
        </div>
      </section>
      <button className="buttonOpen" onClick={handleOptionPatient}>
        Carlos da silva
      </button>
      <ContainerPatient>
        {patient && (
          <Overlay>
            <ContainerSide>
              <button
                className="buttonClose"
                onClick={handleOptionPatientClose}
              >
                <Icon
                  name="closeSelect"
                  size={13}
                  style={{
                    marginTop: '2px'
                  }}
                />
              </button>
              <Text>Carlos | Fisioterapeuta osteopata</Text>
              <ContainerTitle>
                <p>Terça-feira, 20/02/2023</p>
                <Text>das 10h00 às 10h30</Text>
              </ContainerTitle>
              <ContainerStatus>
                <Select options={status} onChange={handleSelectChange} />
                <Icon
                  name="setaDown"
                  size={13}
                  style={{ marginLeft: '175px', marginTop: '-22px' }}
                />
                <EyeContainerTop>
                  <button>
                    <Icon name="editeTable" size={16} />
                  </button>
                  <button>
                    <Icon name="deleteTable" size={16} />
                  </button>
                </EyeContainerTop>
              </ContainerStatus>
              <ContainerButton>
                <ContainerWhats>Enviar pelo WhatsApp</ContainerWhats>
              </ContainerButton>
              <Text>
                Convênio:<strong>&nbsp;Particular</strong>
              </Text>
              <Text>
                Total dos prodecimentos:<strong>&nbsp;R$00,00</strong>
              </Text>
              <ContainerButton>
                <ContainerFinancial>Lançar no financeiro</ContainerFinancial>
              </ContainerButton>
              <ContainerButton>
                <ContainerService>Iniciar atendimento</ContainerService>
              </ContainerButton>

              <ContainerDetailsPatient>
                <ContainerBall>
                  <Ball></Ball>
                  <ContainerAvatar>
                    <Text>Carlos da Silva</Text>
                    <p>40 anos</p>
                  </ContainerAvatar>
                </ContainerBall>
                <EyeContainer>
                  <ContainerLine>
                    <a href="/ostmed/home/servicepatient/records">
                      <button className="second">
                        <Icon
                          name="noteplus"
                          size={23}
                          style={{ marginTop: '5px' }}
                        />
                      </button>
                    </a>

                    <button className="first" onClick={EditeTableopenModal}>
                      <Icon
                        name="editeTable"
                        size={18}
                        style={{ marginTop: '5px' }}
                      />
                    </button>
                  </ContainerLine>
                </EyeContainer>
                <ContainerDatePatient>Dados do paciente:</ContainerDatePatient>
                <Text>
                  <strong>Telefone:</strong> &nbsp;+55 11 90000-0000
                </Text>
                <Text>
                  <strong>E-mail:</strong> &nbsp;carlossilva@gmail.com
                </Text>
                <Text>
                  <strong>CPF:</strong> &nbsp;000.000.000-00
                </Text>
              </ContainerDetailsPatient>
            </ContainerSide>
          </Overlay>
        )}
      </ContainerPatient>

      {modalVisibleDespesa && <CadastroNovaDespesa />}

      {modalVisibleReceita && <CadastroNovaReceita />}
    </>
  );
}
