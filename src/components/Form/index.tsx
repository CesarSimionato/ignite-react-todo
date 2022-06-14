import { Container, Input, Button } from "./styles"

export const Form: React.FC = () => {
  return (
    <Container>
      <Input
        placeholder="Adicione uma nova tarefa"
      />

      <Button
        type="submit"
      >
        Criar
      </Button>
    </Container>
  )
}