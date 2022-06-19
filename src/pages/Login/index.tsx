import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { ButtonBase, Gitlab, Google, Input } from '../../components';
import Astronaut from '../../components/illustations/Astronaut';
import AuthServices from '../../services/auth';
import handleNotify from '../../utils/notify';
import {
  Container,
  FormContainer,
  Hero,
  Form,
  Link,
  ActionsContainer,
  Span,
  Row,
  HeroTitle,
  HeroDescription,
  TextContainer,
  HeroText,
  Divider,
} from './styles';

export default function App() {
  // states
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  function handleEnterPress() {
    setLoading(true);

    const service = new AuthServices();

    service.login(email, password).then((a) => {
      handleNotify('success', 'Login realizado com sucesso');
    }).catch((e) => {
      console.log(e);
      handleNotify('error', 'Credenciais inválidas');
    })

    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }

  return (
    <Container>
      <Hero>
        <Astronaut />
        <HeroText>
          <HeroTitle>
            Bem-vindo a bordo meu amigo!
          </HeroTitle>
          <HeroDescription>
            apenas alguns cliques e começamos.
          </HeroDescription>
        </HeroText>
      </Hero>
      <FormContainer>
        <TextContainer>
          <HeroTitle>
            Bem-vindo a bordo meu amigo!
          </HeroTitle>
          <HeroDescription>
            apenas alguns cliques e começamos.
          </HeroDescription>
        </TextContainer>
        <Form>
          <Input
            placeholder={'Email'}
            icon={<FiMail size={24} color={'#828282'} />}
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            placeholder={'Senha'}
            type={'password'}
            icon={<FiLock size={24} color={'#828282'} />}
            onChangeText={(value) => setPassword(value)}
          />
          <Link>
            Esqueceu a senha?
          </Link>
        </Form>
        <ActionsContainer>
          <ButtonBase
            kind={'primary'}
            label={'Entrar'}
            isLoading={loading}
            onClick={() => handleEnterPress()}
          />
          <Row>
            <Divider />
            <Span>OU</Span>
            <Divider />
          </Row>
          <Row>
            <ButtonBase
              kind={'outline'}
              label={'Google'}
              icon={<Google />}
            />
            <ButtonBase
              kind={'outline'}
              label={'Gitlab'}
              icon={<Gitlab />}
            />
          </Row>
          <Span>Ainda não tem uma conta?</Span>
          <ButtonBase
            kind={'outline'}
            label={'Registre-se'}
          />
        </ActionsContainer>
      </FormContainer>
    </Container>);
}