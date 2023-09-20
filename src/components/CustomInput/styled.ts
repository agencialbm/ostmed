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

  border: ${(props) => (props.hasError ? `2px solid ${Colors.error}` : 'none')};
  &::placeholder {
    color: ${(props) =>
    props.hasError ? Colors.error : Colors.input.placeholder};
  }

  outline: ${(props) =>
    props.hasError ? 'none' : `2px solid ${Colors.input.placeholder}`};
`;
