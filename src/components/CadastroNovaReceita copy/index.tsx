import { DespesaContext } from '@/contexts/novaDespesa';
import { useContext, useState } from 'react';
import { ToggleOn } from './components/TogglerOn';
import { Icon } from '@/components/Icon';
import {
  Bancaria,
  Btns,
  Clients,
  Clinica,
  ContainerCadastroNovaReceita,
  ContainerTitleReceita,
  Lancamento,
  Overlay,
  TogglerButton
} from './styled';

export function CadastroNovaDespesa() {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [isOn2, setIsOn2] = useState<boolean>(false);
  const [isOn3, setIsOn3] = useState<boolean>(false);
  const { closeModalDespesa } = useContext(DespesaContext);

  const CloseModal = () => {
    closeModalDespesa();
  };

  const handleToggle = (newIsOn: boolean) => {
    setIsOn(newIsOn);
  };

  const handleToggle2 = (newIsOn: boolean) => {
    setIsOn2(newIsOn);
  };

  const handleToggle3 = (newIsOn: boolean) => {
    setIsOn3(newIsOn);
  };

  return (
    <Overlay>
      <ContainerCadastroNovaReceita>
        <ContainerTitleReceita>
          <p>CADASTRO DE NOVA DESPESA</p>
          <span>SAÍDA</span>
        </ContainerTitleReceita>

        <Lancamento>
          <div className="data">
            <text>Data do lançamento</text>
            <input type="text" />
            <Icon
              name="calendar"
              size={12}
              style={{ position: 'relative', left: '195px', top: '-23px' }}
            />
          </div>

          <div className="descricao">
            <text>Descrição</text>
            <input type="text" />
          </div>

          <div className="forma">
            <text>Forma de pagamento</text>
            <input type="text" />
          </div>
        </Lancamento>

        <Clients>
          <div className="clients">
            <text>Cliente</text>
            <input type="text" />
            <Icon
              name="pequisar"
              size={18}
              style={{ position: 'relative', left: '265px', top: '-25px' }}
            />
          </div>

          <div className="fornecedor">
            <text>Fornecedor</text>
            <input type="text" />
            <Icon
              name="pequisar"
              size={18}
              style={{ position: 'relative', left: '265px', top: '-25px' }}
            />
          </div>

          <div className="profissional">
            <text>Profissional de saúde</text>
            <input type="text" />
            <Icon
              name="pequisar"
              size={18}
              style={{ position: 'relative', left: '265px', top: '-25px' }}
            />
          </div>
        </Clients>

        <Bancaria>
          <div className="bancaria">
            <text>Conta Bancária</text>
            <select />
          </div>

          <div className="custo">
            <text>Centro de custo</text>
            <select />
          </div>

          <div className="categoria">
            <text>Categoria/natureza</text>
            <select />
          </div>
        </Bancaria>

        <Clinica>
          <div className="clinica">
            <text>Clínica</text>
            <input type="text" />
          </div>

          <div className="vencimento">
            <text>Data de vencimento</text>
            <input type="text" />
            <Icon
              name="calendar"
              size={12}
              style={{ position: 'relative', left: '210px', top: '-23px' }}
            />
          </div>

          <div className="valor">
            <text>Valor</text>
            <input type="text" />
          </div>
        </Clinica>

        <TogglerButton>
          <div className="toggler">
            <div className="recebido">
              <p>Recebido</p>
              <ToggleOn isOn={isOn} onToggle={handleToggle} />
            </div>

            <div className="recebido">
              <p>Recorrente</p>
              <ToggleOn isOn={isOn2} onToggle={handleToggle2} />
            </div>

            <div className="recebido">
              <p>Parcelamento</p>
              <ToggleOn isOn={isOn3} onToggle={handleToggle3} />
            </div>
          </div>

          {isOn && (
            <div className="valor">
              <div className="recebido">
                <text>Valor recebido</text>
                <input type="text" />
              </div>

              <div className="recebido">
                <text>Data do recebimento</text>
                <input type="text" />
                <Icon
                  name="calendar"
                  size={12}
                  style={{ position: 'relative', left: '165px', top: '-23px' }}
                />
              </div>

              <div className="recebido">
                <text>Descontos</text>
                <input type="text" />
              </div>

              <div className="recebido">
                <text>Multas/Juros</text>
                <input type="text" />
              </div>
            </div>
          )}

          {isOn2 && (
            <div className="valor">
              <div className="recebido">
                <text>Periodicidade</text>
                <input type="text" />
              </div>

              <div className="recebido">
                <text>Quantidade de meses</text>
                <input type="number" />
                <Icon
                  name="calendar"
                  size={12}
                  style={{ position: 'relative', left: '165px', top: '-23px' }}
                />
              </div>
            </div>
          )}

          {isOn3 && (
            <div className="valor">
              <div className="recebido">
                <text>Nº de parcelas</text>
                <input type="text" />
              </div>

              <div className="recebido">
                <text>Intervalo entre parcelas</text>
                <input type="text" />
                <Icon
                  name="calendar"
                  size={12}
                  style={{ position: 'relative', left: '165px', top: '-23px' }}
                />
              </div>

              <div className="recebido">
                <text>Valor da parcela</text>
                <input type="text" />
              </div>
            </div>
          )}
        </TogglerButton>

        <Btns>
          <div className="btns">
            <button onClick={CloseModal} className="cancelar">
              Cancelar
            </button>
            <button className="salvar">Salvar</button>
          </div>
        </Btns>
      </ContainerCadastroNovaReceita>
    </Overlay>
  );
}
