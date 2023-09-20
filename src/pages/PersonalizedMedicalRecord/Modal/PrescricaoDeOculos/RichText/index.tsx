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
            <Icon
              name="returnLeft"
              size={11}
              style={{ marginLeft: '90px', marginTop: '5px' }}
            />
          </button>
          <button>
            <Icon
              name="returnRight"
              size={20}
              style={{ marginTop: '1px',  }}
            />
          </button>
          <button>
            <Icon name="text" size={90} style={{ marginTop: '-33px' }} />
          </button>
          <button>
            <Icon name="textAlign" size={33} style={{ marginTop: '-5px' }} />
          </button>
          <button>
            <Icon name="textColor" size={23} style={{ marginTop: '1px' }} />
          </button>
          <button>
            <Icon name="bold" size={15} style={{ marginTop: '5px' }}/>
          </button>
          <button>
            <Icon name="italic" size={13} style={{ marginTop: '5px' }}/>
          </button>
          <button>
            <Icon name="textUnderline" size={13} style={{ marginTop: '5px' }}/>
          </button>
          <button>
            <Icon name="textStrikethrough" size={13} style={{ marginTop: '5px' }}/>
          </button>
          <button>
            <Icon name="barButton" size={23} style={{ marginTop: '1px' }} />
          </button>
          <button>
            <Icon
              name="menuBarButton"
              size={20}
              style={{ marginTop: '3px' }}
            />
          </button>
          <button>
            <Icon name="listBulleted" size={13} style={{ marginTop: '5px' }}/>
          </button>
          <button>
            <Icon name="listNumbered" size={13} style={{ marginTop: '5px' }}/>
          </button>
          <button>
            <Icon name="icLink" size={13} style={{ marginTop: '5px' }}/>
          </button>
          <button>
            <Icon name="icImage" size={13} style={{ marginTop: '5px' }}/>
          </button>
          <button>
            <Icon name="code" size={23} style={{ marginTop: '1px' }} />
          </button>
          <button>
            <Icon name="icQuotes" size={13} style={{ marginTop: '5px' }}/>
          </button>
          <button>
            <Icon name="menuBar" size={15} style={{ marginTop: '5px' }}/>
          </button>
        </ContainerNumber>
      </ContainerList>
    </Container>
  );
}
