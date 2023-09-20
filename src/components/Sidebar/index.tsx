import { auth } from '@/server/firebase';
import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../Icon';
import Select from '../Select';
import { SidebarButton, SidebarContainer, SidebarContext } from './styled';

export function Sidebar() {
  const [calendario, setCalendario] = useState(true);
  const [paciente, setPaciente] = useState(false);
  const [financas, setFinancas] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [medicos, setMedicos] = useState(false);
  const [adm, setAdm] = useState(false);
  const [sms, setSms] = useState(false);
  const [atalho, setAtalho] = useState(false);
  const [prontuario, setProntuario] = useState(false);
  const [config, setConfig] = useState(false);
  const [deash, setDeash] = useState(false);
  const [userRegister, setUserRegister] = useState(false);
  const [userClinicRegister, setUserClinicRegister] = useState(false);
  const [agreementRegister, setAgreementRegister] = useState(false);
  const [schedulesRegister, setschedulesRegister] = useState(false);
  const [workShift, setWorkShift] = useState(false);
  const [Schedules, setSchedules] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [packageAndPlans, setPackageAndPlans] = useState(false);
  const [procedureTable, setProcedureTable] = useState(false);
  const [classroomsList, setClassroomsList] = useState(false);
  const navigate = useNavigate();

  function handleCalendario() {
    setCalendario(true);
    setPaciente(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(false);
    navigate('/ostmed/home');
  }

  function handlePaciente() {
    setPaciente(true);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(false);
    navigate('/ostmed/pacientes');
  }

  function handleFinancas() {
    setPaciente(false);
    setCalendario(false);
    setFinancas(true);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(false);
  }

  function handleFinancasAll() {
    setPaciente(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(false);
  }

  function handleMarkegin() {
    setPaciente(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(true);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(false);
  }

  function handleMarkeginAll() {
    setPaciente(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(false);
  }

  function handleMedicos() {
    setPaciente(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(true);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(false);
    navigate(
      '/ostmed/configuracoes/conta/usuarios/profisssionaldesaude/cadastro'
    );
  }

  function handleAdm() {
    setPaciente(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(true);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(false);
  }

  function handleAdmAll() {
    setPaciente(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(false);
  }

  function handleSms() {
    setPaciente(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(true);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(false);
  }

  function handleAtalho() {
    setPaciente(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(true);
    setProntuario(false);
    setConfig(false);
    setDeash(false);
  }

  function handleAtalhoAll() {
    setPaciente(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(false);
  }

  function handleProntuario() {
    setPaciente(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(true);
    setConfig(false);
    setDeash(false);
    navigate('/ostmed/home/servicepatient/teleatendimento');
  }

  function handleConfig() {
    setPaciente(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(true);
    setDeash(false);
  }

  function handleDeash() {
    setPaciente(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(true);
  }
  function handleUserRegister() {
    setUserRegister(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(true);
    navigate('/ostmed/pacientes/cadastrodeusuarios');
  }

  function handleClinicRegister() {
    setUserClinicRegister(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(true);
    navigate('/ostmed/administrativo/cadastrodeclinicas/clinicas');
  }

  function handleAgreementRegister() {
    setAgreementRegister(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(true);
    navigate('/ostmed/administrativo/cadastrodeconvenios/convenios/convenios');
  }
  function handleSchedulesRegister() {
    setschedulesRegister(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(true);
    navigate('/ostmed/administrativo/cadastrodeagendamento/procedimento');
  }
  function handleSchedulesWorkShift() {
    setWorkShift(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(true);
    navigate('/ostmed/administrativo/conta/turnodetrabalho');
  }
  function handleSchedules() {
    setSchedules(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(true);
    navigate('/ostmed/administrativo/cadastrodeagendamento/procedimento');
  }
  function handleCalendar() {
    setCalendar(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(true);
    navigate('/ostmed/atalhos/calendar');
  }
  function handlePackageAndPlans() {
    setPackageAndPlans(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(true);
    navigate('/ostmed/administrativo/pacoteseplanos');
  }
  function handleProcedureTable() {
    setProcedureTable(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(true);
    navigate('/ostmed/administrativo/tabelasdeprocedimentos');
  }
  function handleClassroomsList() {
    setClassroomsList(false);
    setCalendario(false);
    setFinancas(false);
    setMarketing(false);
    setMedicos(false);
    setAdm(false);
    setSms(false);
    setAtalho(false);
    setProntuario(false);
    setConfig(false);
    setDeash(true);
    navigate('/ostmed/administrativo/salas');
  }

  const [selectedValue, setSelectedValue] = useState('');

  const options = [{ value: 'option1', label: 'Vila Mariana' }];

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    // <Container>
    <SidebarContainer className="side">
      <Icon className="logo" name="logo" size={175} />

      <aside>
        <p>MENU</p>
        <div>
          <Select options={options} onChange={handleSelectChange} />
          <Icon style={{}} name="seta" size={10} />
        </div>
      </aside>

      <SidebarButton isActive={calendario} onClick={handleCalendario}>
        {calendario ? (
          <Icon name="calendario" size={18} />
        ) : (
          <Icon name="calendarioBlack" size={18} />
        )}
        Calendário
      </SidebarButton>
      <SidebarButton isActive={paciente} onClick={handlePaciente}>
        {paciente ? (
          <Icon name="pacientesActive" size={18} />
        ) : (
          <Icon name="pacientes" size={18} />
        )}
        Pacientes
      </SidebarButton>

      <SidebarButton
        isActive={financas}
        onClick={financas ? handleFinancasAll : handleFinancas}
      >
        {financas ? (
          <Icon name="financasActive" size={18} />
        ) : (
          <Icon name="financas" size={18} />
        )}
        Finanças
        <Icon
          style={{ marginLeft: '80px', marginTop: '5px' }}
          name="seta"
          size={10}
        />
      </SidebarButton>

      {financas ? (
        <>
          <SidebarButton isActive={false}>Abertura do caixa</SidebarButton>
          <SidebarButton isActive={false}>Sangria</SidebarButton>
          <SidebarButton isActive={false}>Fluxo de caixa</SidebarButton>
          <SidebarButton isActive={false}>Contas a pagar</SidebarButton>
          <SidebarButton isActive={false}>Contas a receber</SidebarButton>
          <SidebarButton isActive={false}>
            Gerenciamento de planos
          </SidebarButton>
          <SidebarButton isActive={false}>
            Detalhamento de receitas
          </SidebarButton>
          <SidebarButton isActive={false}>
            Receitas e despesas - Mensal
          </SidebarButton>
          <SidebarButton isActive={false}>
            Receitas e despesas - Anual
          </SidebarButton>
          <SidebarButton isActive={false}>Planejamento de metas</SidebarButton>
          <SidebarButton isActive={false}>Conciliação bancária</SidebarButton>
          <SidebarButton isActive={false}>Cadastro de banco</SidebarButton>
          <SidebarButton isActive={false}>DRE</SidebarButton>
        </>
      ) : (
        ''
      )}

      <SidebarButton
        isActive={marketing}
        onClick={marketing ? handleMarkeginAll : handleMarkegin}
      >
        {marketing ? (
          <Icon name="marketingActive" size={18} />
        ) : (
          <Icon name="marketing" size={18} />
        )}
        Marketing
        <Icon
          style={{ marginLeft: '72px', marginTop: '5px' }}
          name="seta"
          size={10}
        />
      </SidebarButton>

      {marketing ? (
        <>
          <SidebarButton isActive={false}>E-mail marketing</SidebarButton>
          <SidebarButton isActive={false}>Automação manuais</SidebarButton>
          <SidebarButton isActive={false}>Automação Automática</SidebarButton>
          <SidebarButton isActive={false}>Leads</SidebarButton>
        </>
      ) : (
        ''
      )}

      <SidebarButton isActive={medicos} onClick={handleMedicos}>
        {medicos ? (
          <Icon name="medicosActive" size={18} />
        ) : (
          <Icon name="medicos" size={18} />
        )}
        Médicos
      </SidebarButton>

      {medicos ? (
        <>
          <SidebarButton isActive={false}>Prontuário</SidebarButton>
          <SidebarButton isActive={false}>Modelo de documento</SidebarButton>
        </>
      ) : (
        ''
      )}

      <SidebarButton isActive={adm} onClick={adm ? handleAdmAll : handleAdm}>
        {adm ? (
          <Icon name="admActive" size={18} />
        ) : (
          <Icon name="adm" size={18} />
        )}
        Adm
        <Icon
          style={{ marginLeft: '110px', marginTop: '5px' }}
          name="seta"
          size={10}
        />
      </SidebarButton>

      {adm ? (
        <>
          <SidebarButton isActive={userClinicRegister} onClick={handleClinicRegister}>Cadastro de clínica</SidebarButton>
          <SidebarButton isActive={userRegister} onClick={handleUserRegister}>
            Cadastro de usuários
          </SidebarButton>
          {/* <SidebarButton isActive={false} >
            Cadastro de especialidades
          </SidebarButton> */}
          {/* <SidebarButton isActive={schedulesRegister} onClick={handleSchedulesRegister}>Tipos de agendamento</SidebarButton> */}
          <SidebarButton isActive={Schedules} onClick={handleSchedules} >Cadastro de especialidades</SidebarButton>
          <SidebarButton isActive={agreementRegister} onClick={handleAgreementRegister}>Cadastro convênio</SidebarButton>
          <SidebarButton isActive={workShift} onClick={handleSchedulesWorkShift}>Turno de trabalho</SidebarButton>
          <SidebarButton isActive={classroomsList} onClick={handleClassroomsList}>Cadastro das salas</SidebarButton>
          <SidebarButton isActive={packageAndPlans} onClick={handlePackageAndPlans}>Pacotes de planos</SidebarButton>
          <SidebarButton isActive={procedureTable} onClick={handleProcedureTable}>Tabela de procedimentos</SidebarButton>
        </>
      ) : (
        ''
      )}

      <SidebarButton isActive={sms} onClick={handleSms}>
        {sms ? (
          <Icon name="smsActive" size={18} />
        ) : (
          <Icon name="sms" size={18} />
        )}
        Notificações
      </SidebarButton>

      <SidebarContext>General</SidebarContext>

      <SidebarButton
        isActive={atalho}
        onClick={atalho ? handleAtalhoAll : handleAtalho}
      >
        {atalho ? (
          <Icon name="atalhoActive" size={18} />
        ) : (
          <Icon name="atalhos" size={18} />
        )}
        Atalhos
        <Icon
          style={{ marginLeft: '90px', marginTop: '5px' }}
          name="seta"
          size={10}
        />
      </SidebarButton>

      {atalho ? (
        <>
          <SidebarButton isActive={false}  onClick={handleCalendar}>Google calendar</SidebarButton>
          <SidebarButton isActive={false}>Funil vendas</SidebarButton>
          <SidebarButton isActive={false}>Api do whatsapp</SidebarButton>
          <SidebarButton isActive={false}>Api do docsign</SidebarButton>
        </>
      ) : (
        ''
      )}

      <SidebarButton isActive={prontuario} onClick={handleProntuario}>
        {prontuario ? (
          <Icon name="prontuarioActive" size={18} />
        ) : (
          <Icon name="prontuario" size={18} />
        )}
        Teleatendimento
      </SidebarButton>

      <SidebarButton isActive={config} onClick={handleConfig}>
        {config ? (
          <Icon name="configActive" size={18} />
        ) : (
          <Icon name="config" size={18} />
        )}
        Configurações
      </SidebarButton>
      <SidebarButton isActive={deash} onClick={handleDeash}>
        {deash ? (
          <Icon name="deashActive" size={18} />
        ) : (
          <Icon name="dash" size={18} />
        )}
        Dashboards
      </SidebarButton>

      <SidebarButton
        isActive={false}
        onClick={() => signOut(auth)}
        style={{ paddingTop: '60px' }}
      >
        <Icon name="close" size={18} /> Sair
      </SidebarButton>
      {/* <ScrollButton /> */}
    </SidebarContainer>
    // </Container>
  );
}
