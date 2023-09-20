interface User {
  name: string
  photoURL: string
}

export interface ChairDTO {
  id: string
  nome: string
  photoURL: string
  email: string
  cpf: string
  telefone: string
  datanascimento: string
  ultimavisita: string
}

export interface ChairWaitingList {
  id: string
  ordem: string
  photoURL: string
  tipodeatendimento: string
  datahorariodepreferencia: string
  datadasolicitacao: string
  atendente: string
}

export interface ChairLeads {
  ordem: string
  id: string
  photoURL: string
  queixasintoma: string
  especialidade: string
  email: string
  telefone: string
  indicacao: string
  atendente: string
  retornodocontato: string
}
export interface ChairList {
  id: string
  photoURL: string
  especialidade: string
  telefone: string
  orgaodeclasse: string
  unidadedeatendimento: string
  niveldeacessos: string
}
export interface ChairListOther {
  id: string
  photoURL: string
  cargo: string
  telefone: string
  unidadedeatendimento: string
  niveldeacessos: string
}
export interface ChairUserRegister {
  unidadeDeAtendimento: string
  bairro: string
  cidade: string
  estado: string
}
export interface ChairRegister {
  nomedoconvenio: string
  registroans: string
  email: string
  telefone: string
}
export interface ChairSchedulesList {
  titulo: string
  valor: string
}
export interface ChairProcedures {
  procedimento: string
  valor: string
  unidadesDeAtendimento: string
  acoes: string
}
export interface ChairTurn {
  id: string
  photoURL: string
  especialidade: string
  diasdeatendimento: string
  unidadesDeAtendimento: string
  acoes: string
}
export interface ChairProceduresTable {
  nome: string
  acoes: string
}
export interface ChairPackageTable {
  titulo: string
  duracao: string
  numerodesessoes: string
  validadedocontrato: string
  valortotal: string
  valorunitario: string
  acoes: string
}
export interface ChairPlanTable {
  titulo: string
  duracao: string
  numerodeaulas: string
  tipodeplano: string
  valortotal: string
  valormensal: string
  valorporaula: string
  acoes: string
}
export interface ChairClassroomsTable {
  nomedasala: string
  numerodasala: string
  numeromaximodeocupantes: string
  unidadedeatendimento: string
  acoes: string
}
export interface ChairMessageTable {
  id: string
  photoURL: string
  datahorario: string
  visualizacao: string
  status: string
  acoes: string
}
export interface ChairServiceTable {
  codigo: string
  procedimento: string
  preco: string
  unidade: string
  precototal: string
}
export interface ChairReturnListTable {
  id: string
  photoURL: string
  ordem: string
  queixasintoma: string
  especialidade: string
  email: string
  telefone: string
  status: string
  proximocontato: string
  datadaprospeccao: string
  datadaabordagem: string
  dataapresentacao: string
  dataFollowup: string
  datanegociacao: string
  datafechamento: string
  dataposvendas: string
  comentarios: string
}
export interface ChairContactTable {
  id: string
  photoURL: string
  ordem: string
  telefone: string
  status: string
}
export interface ChairLateTable {
  id: string
  photoURL: string
  ordem: string
  dataprevista: string
  diasdeatraso: string
}
