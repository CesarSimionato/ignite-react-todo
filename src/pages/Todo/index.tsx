import { Container, Header, Main } from "./styles"

import { Form } from "../../components/Form"
import { Tasks } from "../../components/Tasks"

import logoImg from "../../assets/logo.svg"

export const Todo: React.FC = () => {
  return (
    <Container>
      <Header>
        <img
          src={logoImg}
          alt="Logo da plataforma Todo"
        />
      </Header>

      <Main>
        <Form />

        <Tasks />
      </Main>
    </Container>
  )
}