import React, { FunctionComponent } from 'react';
import { ICustomInputProps } from './interfaces';

import { CustomInputContainer } from './styled';


export const CustomInputCadastro: FunctionComponent<ICustomInputProps> =
  React.forwardRef((props, ref) => {
    return <CustomInputContainer {...props} ref={ref as any} />;
  });

CustomInputCadastro.displayName = 'CustomInputCadastro';
