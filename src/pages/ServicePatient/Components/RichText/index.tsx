import React from 'react';
import { Icon } from '@/components/Icon';
import {
  Container,
  ContainerList,
  ContainerListPatient,
  ContainerNumber,
  TextListPatient
} from './styles';

export default function RichText() {
  return (
    <Container>
      <ContainerList>
        <ContainerNumber>
          <button>
            <Icon name="returnLeft" size={15} />
          </button>
          <button>
            <Icon name="returnRight" size={25} />
          </button>
          <button>
            <Icon name="text" size={100} />
          </button>
          <button>
            <Icon name="textAlign" size={35} />
          </button>
          <button>
            <Icon name="textColor" size={30} />
          </button>
          <button>
            <Icon name="bold" size={18} />
          </button>
          <button>
            <Icon name="italic" size={18} />
          </button>
          <button>
            <Icon name="textUnderline" size={18} />
          </button>
          <button>
            <Icon name="textStrikethrough" size={18} />
          </button>
          <button>
            <Icon name="barButton" size={30} />
          </button>
          <button>
            <Icon name="menuBarButton" size={25} />
          </button>
          <button>
            <Icon name="listBulleted" size={18} />
          </button>
          <button>
            <Icon name="listNumbered" size={18} />
          </button>
          <button>
            <Icon name="icLink" size={18} />
          </button>
          <button>
            <Icon name="icImage" size={18} />
          </button>
          <button>
            <Icon name="code" size={30} />
          </button>
          <button>
            <Icon name="icQuotes" size={18} />
          </button>
          <button>
            <Icon name="menuBar" size={20} />
          </button>
        </ContainerNumber>
      </ContainerList>
      <ContainerListPatient>
        <TextListPatient placeholder='Escolha um model ode anamnese acima ou digite a sua aqui'>
        </TextListPatient>
      </ContainerListPatient>
    </Container>
  );
}
