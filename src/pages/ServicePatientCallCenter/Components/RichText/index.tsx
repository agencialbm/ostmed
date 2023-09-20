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
            <Icon name="returnLeft" size={13} />
          </button>
          <button>
            <Icon name="returnRight" size={22} />
          </button>
          <button>
            <Icon name="text" size={90} />
          </button>
          <button>
            <Icon name="textAlign" size={33} />
          </button>
          <button>
            <Icon name="textColor" size={27} />
          </button>
          <button>
            <Icon name="bold" size={15} />
          </button>
          <button>
            <Icon name="italic" size={15} />
          </button>
          <button>
            <Icon name="textUnderline" size={15} />
          </button>
          <button>
            <Icon name="textStrikethrough" size={15} />
          </button>
          <button>
            <Icon name="barButton" size={27} />
          </button>
          <button>
            <Icon name="menuBarButton" size={22} />
          </button>
          <button>
            <Icon name="listBulleted" size={15} />
          </button>
          <button>
            <Icon name="listNumbered" size={15} />
          </button>
          <button>
            <Icon name="icLink" size={15} />
          </button>
          <button>
            <Icon name="icImage" size={15} />
          </button>
          <button>
            <Icon name="code" size={27} />
          </button>
          <button>
            <Icon name="icQuotes" size={15} />
          </button>
          <button>
            <Icon name="menuBar" size={17} />
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
