import {
  Container,
  ContainerTable,
  ContainerTableMaster,
  Day,
  Text
} from './styles';
import Frequence from '../Frequence';
import Hour from '../Hour';
import { Icon } from '@/components/Icon';

export default function Table() {
  // const option2 = [{ value: 'option1', label: '' }]

  return (
    <Container>
      <Text>
        <h3>Quais dias?</h3>
      </Text>
      <ContainerTableMaster>
        <ContainerTable>
          <Day>
            <span>
              <input type="checkbox" />
              Segunda
            </span>
            <Icon
              name="check"
              size={13}
              style={{
                background: 'red',
                marginLeft: '40px',
                marginTop: '-20px'
              }}
            />
          </Day>
          <Hour />
          <Frequence />
        </ContainerTable>
        <ContainerTable>
          <Day>
            <span>
              <input type="checkbox" />
              Terça
            </span>
          </Day>
          <Hour />
          <Frequence />
        </ContainerTable>
        <ContainerTable>
          <Day>
            <span>
              <input type="checkbox" />
              Quarta
            </span>
          </Day>
          <Hour />
          <Frequence />
        </ContainerTable>
        <ContainerTable>
          <Day>
            <span>
              <input type="checkbox" />
              Quinta
            </span>
          </Day>
          <Hour />
          <Frequence />
        </ContainerTable>
        <ContainerTable>
          <Day>
            <span>
              <input type="checkbox" />
              Sexta
            </span>
          </Day>
          <Hour />
          <Frequence />
        </ContainerTable>
        <ContainerTable>
          <Day>
            <span>
              <input type="checkbox" />
              Sábado
            </span>
          </Day>
          <Hour />
          <Frequence />
        </ContainerTable>
        <ContainerTable>
          <Day>
            <span>
              <input type="checkbox" />
              Domingo
            </span>
          </Day>
          <Hour />
          <Frequence />
        </ContainerTable>
      </ContainerTableMaster>
    </Container>
  );
}
