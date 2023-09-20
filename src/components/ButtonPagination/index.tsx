import { Icon } from '@/components/Icon';
import { Container, ContainerArrow, ContainerNumber } from './styles';

export default function ButtonPagination() {
  return (
    <Container>
      <ContainerArrow>
        <Icon name="setaLeft" size={20} style={{marginTop:'4px'}}/>
      </ContainerArrow>
      <ContainerNumber
        style={{
          background: '#44c0c2',
          borderColor: '#44c0c2',
          color: 'white'
        }}
      >
        1
      </ContainerNumber>
      <ContainerNumber>2</ContainerNumber>
      <ContainerNumber>3</ContainerNumber>
      <ContainerArrow>
        <Icon name="setaRight" size={20} style={{marginTop:'4px'}}/>
      </ContainerArrow>
    </Container>
  );
}
