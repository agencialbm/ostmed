import { TextIcon, Container, SaveAndAdd, Text } from './styles';
import { Icon } from '@/components/Icon';
export default function ButtonSend() {
  return (
    <Container>
      <Text>Sincronização inativa</Text>
      <a href="">
        <SaveAndAdd>
          <Icon
            name="google"
            size={20}
            style={{ position: 'relative', right: '0px', top: '8px' }}
          />
          <TextIcon> Sincronizar com Google</TextIcon>
        </SaveAndAdd>
      </a>
    </Container>
  );
}
