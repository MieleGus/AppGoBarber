import React from 'react'
import { Image } from 'react-native'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Title, ForgotPassword, ForgotPasswordText } from './styles'

import logoImg from '../../assets/logo.png'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg}/>

      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />

      <Input name="password" icon="lock" placeholder="Senha" />

      <Button 
        onPress={() => {

        }}
        >
          Entrar
      </Button>

      <ForgotPassword onPress={() => {}}>
        <ForgotPasswordoText>Esqueci</ForgotPasswordoText>
      </ForgotPassword>

    </Container>
  )
}

export default SignIn
