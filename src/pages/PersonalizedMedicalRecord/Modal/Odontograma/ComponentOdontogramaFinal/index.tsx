import {
  Container,
  ContainerAdd,
  ContainerPrecription,
  ContainerText,
  Line
} from './styles'
import { useContext } from 'react'
import { Odontograma } from '@/contexts/odontograma'
import { Icon } from '@/components/Icon'
import ComponentButton from './button'
import { OdontogramaPrescription } from '@/contexts/odontogramaPrescription'

export default function ComponentOdontogramaFinal() {
  const { closeOdontograma } = useContext(Odontograma)
  const { odontogramaVisible } = useContext(OdontogramaPrescription)
  return (
    <Container>
      <button className="buttonClose" onClick={() => closeOdontograma()}>
        <Icon
          name="closeSelect"
          size={13}
          style={{
            marginTop: '2px'
          }}
        />
      </button>
      <ComponentButton />
      <Line></Line>
      {odontogramaVisible && (
        <ContainerPrecription>
          <ContainerAdd>
            <ContainerText>
              <p>Dente: 37</p>
              <p>Procedimentos:</p>
              <p>85200050 - Remoção de corpo estranho intracanal</p>
            </ContainerText>
          </ContainerAdd>
          <ContainerAdd>
            <ContainerText>
              <p>Dente: 37</p>
              <p>Procedimentos:</p>
              <p>85200050 - Remoção de corpo estranho intracanal</p>
            </ContainerText>
          </ContainerAdd>
        </ContainerPrecription>
      )}
    </Container>
  )
}
