import React from 'react';
import { ButtonImage, Container, Image } from './styles';
import { Icon } from '@/components/Icon';

export default function Avatar() {
  return (
    <Container>
      <Image></Image>
      <ButtonImage>
        <Icon name="foto" size={15} style={{marginRight:'10px'}}/>
        <p>Tirar foto ou fazer upload</p>
      </ButtonImage>
    </Container>
  );
}
