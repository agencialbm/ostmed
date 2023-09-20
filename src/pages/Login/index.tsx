import { useForm } from 'react-hook-form';
import validator from 'validator';
import { CustomButton } from '@/components/CustomButton';
import { CustomInput } from '@/components/CustomInput';
import {
  Help,
  LoginContainer,
  LoginContent,
  LoginCustomInput,
  LoginHeadline,
  LoginImg,
  LoginInputContainer,
  LoginRecoverPassword
} from './styled';
import { ErrorMessage } from '@/components/ErrorMessage';
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../../server/firebase';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { ILoginForm } from './interfaces';
import logo from '../../components/Icon/svg/logo.svg';
import { CustomFooter } from '@/components/CustomFooter';
import { Loading } from '@/components/Loading';
import { Icon } from '@/components/Icon';

export function Login() {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit
  } = useForm<ILoginForm>();

  const [isLoading, setIsLoading] = useState(false);
  const [isPassword, setIsPassword] = useState(true);

  const { isAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();

  const handlePassword = () => {
    setIsPassword(true);
  };

  const handleViewPassword = () => {
    setIsPassword(false);
  };

  const handleSubmitPress = async (data: ILoginForm) => {
    try {
      setIsLoading(true);

      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      console.log(userCredentials);
    } catch (error) {
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError('password', { type: 'mismatch' });
      }

      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError('email', { type: 'notFound' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/ostmed/home');
    }
  }, [isAuthenticated]);

  return (
    <>
      {isLoading && <Loading />}
      <LoginContainer>
        <LoginContent>
          <LoginImg src={logo} />
          <LoginHeadline>Faça login na sua conta</LoginHeadline>
          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Digite seu e-mail"
              {...register('email', {
                required: true,
                validate: (value: any) => {
                  return validator.isEmail(value);
                }
              })}
            />

            {errors?.email?.type === 'required' && (
              <ErrorMessage>O e-mail é obrigatório.</ErrorMessage>
            )}

            {errors?.email?.type === 'notFound' && (
              <ErrorMessage>O e-mail não foi encontrado.</ErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <ErrorMessage>Por favor, insira um e-mail válido.</ErrorMessage>
            )}
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <LoginCustomInput>
              <CustomInput
                hasError={!!errors?.password}
                placeholder="Digite sua senha"
                type={isPassword ? 'password' : 'text'}
                {...register('password', { required: true })}
              />

              {isPassword ? (
                <button onClick={handleViewPassword}>
                  <Icon name="olhoClose" />
                </button>
              ) : (
                <button onClick={handlePassword}>
                  <Icon name="olhoOpen" />
                </button>
              )}
            </LoginCustomInput>

            {errors?.password?.type === 'required' && (
              <ErrorMessage>A senha é obrigatória.</ErrorMessage>
            )}

            {errors?.password?.type === 'mismatch' && (
              <ErrorMessage>A senha é inválida.</ErrorMessage>
            )}
          </LoginInputContainer>

          <LoginRecoverPassword>
            <div>
              <input type="checkbox" />
              <p>Lembrar senha</p>
            </div>
            <button>Esqueceu sua senha?</button>
          </LoginRecoverPassword>

          <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>
            Login
          </CustomButton>
          <Help>
            <p>Precisando de ajuda?</p> <button>Fale com nosso suporte</button>
          </Help>
        </LoginContent>
      </LoginContainer>
      <CustomFooter />
    </>
  );
}
