import { useState } from 'react'
import {
  Container,
  ContainerButton,
  ContainerDente,
  ContainerIcon,
  ContainerInput,
  ContainerLine,
  ContainerLineOne,
  ContainerLineText,
  ContainerMasterOdonto,
  ContainerOdonto,
  Input,
  Line,
  Overlay,
  Select,
  Text
} from './styles'
import { useContext } from 'react'
import { Icon } from '@/components/Icon'
import { OdontogramaPrescription } from '@/contexts/odontogramaPrescription'

export default function ComponentButton() {
  const {openodontogramaPrescription} = useContext(OdontogramaPrescription)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container>
      <ContainerMasterOdonto>
        <ContainerOdonto>
          <ContainerLineText>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
          </ContainerLineText>
          <ContainerLineOne>
            <button onClick={handleOpen}>
              <Icon
                name="dente1"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente2"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente3"
                size={30}
                style={{
                  marginTop: '2px',
                  marginRight:'7px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente4"
                size={30}
                style={{
                  marginTop: '2px',
                  marginRight:'8px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente5"
                size={30}
                style={{
                  marginTop: '2px',
                  marginRight:'10px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente6"
                size={30}
                style={{
                  marginTop: '2px',
                  marginRight:'8px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente7"
                size={30}
                style={{
                  marginTop: '2px',
                  marginRight:'15px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente8"
                size={30}
                style={{
                  marginTop: '2px',
                  marginRight:'15px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente9"
                size={30}
                style={{
                  marginTop: '2px',
                  marginRight:'17px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente10"
                size={30}
                style={{
                  marginTop: '2px',
                  marginRight:'22px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente11"
                size={30}
                style={{
                  marginTop: '2px',
                  marginRight:'20px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente12"
                size={30}
                style={{
                  marginTop: '2px',
                  marginRight:'18px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente13"
                size={30}
                style={{
                  marginTop: '2px',
                  marginRight:'12px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente14"
                size={30}
                style={{
                  marginTop: '2px',
                  marginRight:'8px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente15"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente16"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
          </ContainerLineOne>
          <ContainerLine>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux1"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux1"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux1"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux1"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux1"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux1"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
          </ContainerLine>
          <ContainerLine>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux1"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux1"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux1"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux1"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux1"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux1"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="denteAux2"
                size={20}
                style={{
                  marginTop: '5px',
                  marginRight: '5px'
                }}
              />
            </button>
          </ContainerLine>
          <ContainerLineOne>
            <button onClick={handleOpen}>
              <Icon
                name="dente32"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente31"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente30"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente29"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente28"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente27"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente26"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente25"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente24"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente23"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente22"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente21"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente20"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente19"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente18"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
            <button onClick={handleOpen}>
              <Icon
                name="dente17"
                size={30}
                style={{
                  marginTop: '2px'
                }}
              />
            </button>
          </ContainerLineOne>
          <ContainerLineText>
            <p>32</p>
            <p>31</p>
            <p>30</p>
            <p>29</p>
            <p>28</p>
            <p>27</p>
            <p>26</p>
            <p>25</p>
            <p>24</p>
            <p>23</p>
            <p>22</p>
            <p>21</p>
            <p>20</p>
            <p>19</p>
            <p>18</p>
            <p>17</p>
          </ContainerLineText>
        </ContainerOdonto>
        <ContainerIcon>
          <Icon name="dente" size={200} />
        </ContainerIcon>
      </ContainerMasterOdonto>
      {open ? (
        <>
          <Overlay>
            <ContainerDente>
              <p>Adicionar região</p>
              <Line></Line>
              <Text>Dente 17</Text>
              <ContainerInput>
                <p>Procedimento</p>
                <Select>
                  <option></option>
                  <option>
                    85200050 - Remoção de corpo estranho intracanal
                  </option>
                  <option>
                    85200050 - Remoção de corpo estranho intracanal
                  </option>
                </Select>
                <Icon
                  name="pequisar"
                  size={15}
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'flex-end',
                    marginTop: '-25px',
                    marginLeft: '190px'
                  }}
                />
              </ContainerInput>
              <ContainerInput>
                <p>Observações</p>
                <Input />
              </ContainerInput>
              <ContainerButton>
                <button className="buttonSave" onClick={handleClose}>
                  Cancelar
                </button>
                <button className="buttonPrint" onClick={openodontogramaPrescription}>
                  Adicionar
                </button>
              </ContainerButton>
            </ContainerDente>
          </Overlay>
        </>
      ) : (
        ''
      )}
    </Container>
  )
}
