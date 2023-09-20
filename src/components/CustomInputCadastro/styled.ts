import styled from 'styled-components';
import Colors from '../../styles/theme';

type ICustomInputContainerProps = {
  hasError?: boolean
}

export const CustomInputContainer = styled.input<ICustomInputContainerProps>`
  border: none;
  width: 100%;
  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: 1px solid #DED2D9;
  border-radius: 5px;
  color: ${Colors.text.dark};
  height: 32px;

border-radius: 15.5px;
`;
