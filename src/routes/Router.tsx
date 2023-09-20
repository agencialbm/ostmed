import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '@/pages/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { useContext, useState } from 'react';
import { UserContext } from '@/contexts/user.context';
import { auth, db } from '@/server/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { userConverter } from '@/converters/firestore.converters';
import { Loading } from '@/components/Loading';
import { Home } from '@/pages/Home';
import { Pacientes } from '@/pages/Pacientes';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { WaitingList } from './../pages/WaitingList/index';
import { Leads } from '@/pages/Leads';
import List from '@/pages/List';
import Register from '@/pages/Register';
import RegisterOthersProfessionals from './../pages/RegisterOthersProfessionals/index';
import ListClinic from '@/pages/ListClinic';
import RegisterClinic from '@/pages/RegisterClinic';
import RegisterAgreement from '@/pages/RegisterAgreement';
import Agreement from '@/pages/Agreement';
import Schedules from '@/pages/Schedules';
import ServiceRegistration from '@/pages/ServiceRegistration';
import WorkShift from '@/pages/WorkShift';
import WorkShiftList from '@/pages/WorkShiftList';
import ProcedureTable from '@/pages/ProcedureTable';
import ProcedureImportTable from '@/pages/ProcedureImportTable';
import PackagesAndPlans from '@/pages/PackagesAndPlans';
import ListPackageAndPlans from '@/pages/ListPackageAndPlans';
import GoogleCalendar from '@/pages/GoogleCalendar';
import Classrooms from '@/pages/Classrooms';
import ClassroomsList from '@/pages/ClassroomsList';
import { Message } from '@/pages/Message';
import Service from '@/pages/Service';
import ServicePatient from '@/pages/ServicePatient';
import ServicePatientRecords from '@/pages/ServicePatientRecords';
import { ContactReturn } from '@/pages/ContactReturn';
import { Dashboard } from '@/pages/Dashboard';
import ServicePatientRelationship from '@/pages/ServicePatientRelationship';
import ServicePatientFile from '@/pages/ServicePatientFile';
import ServicePatientFileFiles from '@/pages/ServicePatientFileFiles';
import ServicePatientCallCenter from '../pages/ServicePatientCallCenter';
import PersonalizedMedicalRecord from '@/pages/PersonalizedMedicalRecord';

export function Router() {
  const [isInitializing, setIsInitializing] = useState(true);

  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async user => {
    const isSigningOut = isAuthenticated && !user;

    if (isSigningOut) {
      logoutUser();

      return setIsInitializing(false);
    }

    const isSigningIn = !isAuthenticated && user;

    if (isSigningIn) {
      const querySnapshot = await getDocs(
        query(
          collection(db, 'users').withConverter(userConverter),
          where('id', '==', user.uid)
        )
      );

      const userFromFirestore = querySnapshot.docs[0]?.data();

      loginUser(userFromFirestore);

      return setIsInitializing(false);
    }

    return setIsInitializing(false);
  });

  if (isInitializing) return <Loading />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ostmed" element={<DefaultLayout />}>
          <Route path="/ostmed/home" element={<Home />} />
          <Route path="/ostmed/pacientes" element={<Pacientes />} />
          <Route
            path="/ostmed/pacientes/listaDeEspera"
            element={<WaitingList />}
          />
          <Route path="/ostmed/pacientes/leads" element={<Leads />} />
          <Route path="/ostmed/pacientes/cadastrodeusuarios" element={<List />} />
          <Route path="/ostmed/administrativo/profissionaldesaude" element={<Register />} />
          <Route path="/ostmed/administrativo/cadastrodeconvenios/convenio" element={<RegisterAgreement />} />
          <Route path="/ostmed/administrativo/cadastrodeconvenios/convenios/convenios" element={<Agreement />} />
          <Route path="/ostmed/administrativo/outrosprofissionais" element={<RegisterOthersProfessionals />} />
          <Route path="/ostmed/administrativo/cadastrodeclinicas/clinicas" element={<ListClinic />} />
          <Route path="/ostmed/administrativo/cadastrodeclinicas/cadastro" element={<RegisterClinic />} />
          <Route path="/ostmed/administrativo/cadastrodeagendamento/procedimento" element={<Schedules />} />
          <Route path="/ostmed/configuracoes/conta/cadastrodoatendimento" element={<ServiceRegistration />} />
          <Route path="/ostmed/administrativo/conta/turnodetrabalho/turno" element={<WorkShift />} />
          <Route path="/ostmed/administrativo/conta/turnodetrabalho" element={<WorkShiftList />} />
          <Route path="/ostmed/administrativo/tabelasdeprocedimentos" element={<ProcedureTable />} />
          <Route path="/ostmed/administrativo/tabelasdeprocedimentos/Importtable" element={<ProcedureImportTable />} />
          <Route path="/ostmed/administrativo/cadastro/pacoteseplanos" element={<PackagesAndPlans />} />
          <Route path="/ostmed/administrativo/pacoteseplanos" element={<ListPackageAndPlans />} />
          <Route path="/ostmed/atalhos/calendar" element={<GoogleCalendar />} />
          <Route path="/ostmed/administrativo/salas" element={<ClassroomsList />} />
          <Route path="/ostmed/administrativo/cadastro/salas" element={<Classrooms />} />
          <Route path="/ostmed/home/message" element={<Message />} />
          <Route path="/ostmed/home/service" element={<Service />} />
          <Route path="/ostmed/home/servicepatient" element={<ServicePatient />} />
          <Route path="/ostmed/home/servicepatient/records" element={<ServicePatientRecords />} />
          <Route path="/ostmed/home/servicepatient/retornodocontato" element={<ContactReturn />} />
          <Route path="/ostmed/home/servicepatient/dashboard" element={<Dashboard />} />
          <Route path="/ostmed/home/servicepatient/relationship" element={<ServicePatientRelationship />} />
          <Route path="/ostmed/home/servicepatient/arquivos" element={<ServicePatientFile />} />
          <Route path="/ostmed/home/servicepatient/arquivos/arquivos" element={<ServicePatientFileFiles />} />
          <Route path="/ostmed/home/servicepatient/teleatendimento" element={<ServicePatientCallCenter />} />
          <Route path="/ostmed/home/prontuariopersonalizado" element={<PersonalizedMedicalRecord />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
