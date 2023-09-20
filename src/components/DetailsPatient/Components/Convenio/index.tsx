import { DadosInfo } from './styled';

export function Convenio(){
  return(
    <>
      <DadosInfo>
        <div className='conv'>

          <div className="convenio">
            <text>Convênio</text>
            <select/>
          </div>

          <div className="plano">
            <text>Tipo de Plano</text>
            <select/>
          </div>


          <div className="acomo">
            <text>Acomodação</text>
            <select/>
          </div>


          <div className="matri">
            <text>Matrícula</text>
            <input type="text" />
          </div>


        </div>


        <div className='conv'>

          <div className="guia">
            <text>Número da guia/convênio</text>
            <input type="text" />
          </div>

          <div className="numguia">
            <text>Número da guia/interno</text>
            <input type="text" />
          </div>


          <div className="token">
            <text>Token</text>
            <input type="text" />
          </div>

        </div>




      </DadosInfo>
    </>
  );

}
