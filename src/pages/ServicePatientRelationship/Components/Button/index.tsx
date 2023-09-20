import { Icon } from '@/components/Icon';
import { Container, Save } from './styles';

export default function Button() {
  return (
    <Container>
      <Save>Ver mais</Save>
      <Icon name="setDownGreen" size={13} style={{marginTop:'10px', marginLeft:'-40px'}}/>
    </Container>
  );
}
