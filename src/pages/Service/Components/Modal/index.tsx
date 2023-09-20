import {
  ContainerModal,
  CustomSelect,
  ModalBtn,
  ModalCodigo,
  ModalObs,
  ModalPlanos,
  ModalProcedimentos,
  ModalRegistro,
  ModalRegistroInfo,
  ModalRegistroInfo2,
  ModalRegistroInfo3,
  ModalSala,
  ModalValor,
  Overlay
} from './styled';
import { useContext, useEffect, useState } from 'react';
import { ModalCadastroContext } from '@/contexts/modalCadastro';
import { HomeInput } from '@/pages/Home/styled';
import { ModalCadastroContextPaciente } from '@/contexts/modalCadastroPaciente';
import { CustomInputCadastro } from '@/components/CustomInputCadastro';
import SelectCadastro from '@/components/SelectCadastro';
import { Toggle } from '@/components/Toggler';
import { ToggleOn } from '@/components/TogglerOn';
import { DayOfWeekRadio } from '@/components/RaioDias';
import { Input } from '@/components/Input';
import { Icon } from '@/components/Icon';

interface IOrderModal {
  visible: boolean
  onClose: () => void
}

export function Modal({ visible, onClose }: IOrderModal) {
  const [selectedValue, setSelectedValue] = useState('');
  const { closeModalCadastro } = useContext(ModalCadastroContext);
  const [inputValue, setInputValue] = useState('');
  const [isOn2, setIsOn2] = useState<boolean>(false);

  const [isOn, setIsOn] = useState<boolean>(false);

  const daysOfWeek = [
    { label: 'Seg', value: 'monday' },
    { label: 'Ter', value: 'tuesday' },
    { label: 'Qua', value: 'wednesday' },
    { label: 'Qui', value: 'thursday' },
    { label: 'Sex', value: 'friday' },
    { label: 'Sáb', value: 'saturday' },
    { label: 'Dom', value: 'sunday' }
  ];

  const handleToggle = (newIsOn: boolean) => {
    setIsOn(newIsOn);
  };

  const handleToggle2 = (newIsOn: boolean) => {
    setIsOn2(newIsOn);
  };

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
        closeModalCadastro();
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
  const options = [
    { value: 'option1', label: 'Consulta - 30min' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  function cadastroPaciente() {
    closeModalCadastro();
    openModalCadastroPaciente();
  }

  const { openModalCadastroPaciente } = useContext(ModalCadastroContextPaciente);

  return (
    <>
      <Overlay>
        <ContainerModal>
          <div className="div1Modal">
            <CustomInputCadastro disabled value={'OSTEOMED - VILA MARIANA'} />

            <CustomInputCadastro disabled value={'Especialidade'} />

            <CustomInputCadastro disabled value={'Dr. Wesley Lima'} />

            <SelectCadastro options={options} onChange={handleSelectChange} />

            <section className="calendario">
              <div>
                <p>AGENDAR</p>
                <Toggle isOn={isOn} onToggle={handleToggle} />
                <text>BLOQUEAR</text>
              </div>
              <h3>Segunda-feira - 02/01/2023</h3>
              <aside>
                <p>de</p>
                <div>
                  <input type="text" />
                  <text>:</text>
                  <input type="text" />
                </div>
                <p>às</p>
                <div>
                  <input type="text" />
                  <text>:</text>
                  <input type="text" />
                </div>
              </aside>

              <div className="linha"></div>

              <div className="repetir">
                <p>Repetir evento</p>
                <ToggleOn isOn={isOn2} onToggle={handleToggle2} />
              </div>

              {isOn2 ? (
                <div className="semana">
                  <p>Quais dias?</p>
                  <div className="radio">
                    <DayOfWeekRadio days={daysOfWeek} />
                  </div>
                  <p className="qual">Qual frequência?</p>
                  <SelectCadastro
                    options={options}
                    onChange={handleSelectChange}
                  />

                  <div className="ate">
                    <text>Até quando?</text>
                    <input placeholder="Até uma data" />
                  </div>

                  <div className="agenda">
                    <p>Número de agendamentos</p>
                    <input type="number" />
                  </div>
                </div>
              ) : (
                ''
              )}
            </section>
          </div>

          <ModalRegistro>
            <p>AGENDAMENTO DE HORÁRIO</p>

            <ModalRegistroInfo>
              <Icon name="perfilAgendamento" size={66} />
              <ModalRegistroInfo2>
                <div className="pacienteInfo">
                  <p>Carlos da Silva</p>
                  <div>
                    <span>
                      <button>
                        <Icon name="editar" size={10} />
                      </button>
                      Editar
                    </span>
                    <span>
                      <button>
                        <Icon name="trocar" size={10} />
                      </button>
                      Trocar Paciente
                    </span>
                  </div>
                </div>

                <div
                  style={{ border: '1px solid #D9D9D9', marginBottom: '7px' }}
                />

                <ModalRegistroInfo3>
                  <div>
                    <text>Data de nasc: 25/11/1998</text>
                    <text>Nome da mãe: Maria da Silva</text>
                  </div>

                  <div>
                    <text>CPF: 000.000.000-00</text>
                    <text>Celular: 11 90000-0000</text>
                  </div>
                </ModalRegistroInfo3>
              </ModalRegistroInfo2>
            </ModalRegistroInfo>

            <ModalPlanos>
              <div>
                <div>
                  <span>Convênio</span>
                  <select></select>
                </div>
                <div>
                  <span>Plano doconvênio</span>
                  <select></select>
                </div>
                <div>
                  <span>Matrícula</span>
                  <input type="text" />
                </div>
              </div>
              <div
                style={{
                  border: '1px solid #D9D9D9',
                  marginTop: '26px',
                  width: '104%'
                }}
              />
            </ModalPlanos>

            <ModalProcedimentos>
              <div className="div1">
                <span>Selecionar prodecimentos</span>
                <input type="text" />
              </div>

              <div className="div2">
                <span>Senha</span>
                <input type="text" />
              </div>
            </ModalProcedimentos>

            <ModalCodigo>
              <div className="codigo">
                <span>Código</span>
                <input type="text" />
              </div>

              <div className="tipo">
                <span>Tipo</span>
                <input type="text" />
              </div>

              <div className="valor">
                <span>Valor</span>
                <input type="text" />
              </div>

              <div className="qua">
                <span>Qtde</span>
                <input type="text" />
              </div>

              <div className="sub">
                <span>Subtotal</span>
                <input type="text" />
              </div>
            </ModalCodigo>

            <ModalValor>
              <p>
                Uma receita será lançada automaticamente no financeiro quando o
                agendamento for concluido.
              </p>

              <text>Valor total: R$ 00,00</text>
            </ModalValor>

            <div
              style={{
                border: '1px solid #D9D9D9',
                marginTop: '10px',
                width: '104%'
              }}
            />

            <ModalSala>
              <text>Selecionar a sala</text>
              <select></select>
            </ModalSala>

            <ModalObs>
              <text>Observações</text>
              <input type="text" />

              <div className="check">
                <div>
                  <input type="checkbox" />
                  <label htmlFor="">Deseja notificar paciente via SMS?</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label htmlFor="">
                    Deseja notificar paciente via WhatsApp?
                  </label>
                </div>
              </div>
            </ModalObs>

            <ModalBtn>
              <div>
                <button onClick={onClose} >Cancelar</button>
                <button className="confirma">Confirmar agendamento</button>
              </div>
            </ModalBtn>
          </ModalRegistro>
        </ContainerModal>
      </Overlay>
    </>
  );
}
