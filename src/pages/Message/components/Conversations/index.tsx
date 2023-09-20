import { Container, ContainerName, Image, Name, Neighborhood } from './styles';
import image from '../../../../assets/imageProfile.svg';

export default function Conversations() {
  return (
    <Container>
      <img src={image} alt="image" />
      <ContainerName>
        <Name>Maria da Silva</Name>
        <Neighborhood>Vila Mariana</Neighborhood>
      </ContainerName>
    </Container>
  );
}
