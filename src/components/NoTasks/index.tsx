import { ClipboardText } from "phosphor-react"
import THEME from "../../theme"

import { Container, Title, Text } from "./styles"

export const NoTasks: React.FC = () => {
  return (
    <Container>
      <ClipboardText
        size={56}
        color={THEME.COLORS.GRAY_300}
      />

      <div>
        <Title>
          Você ainda não tem tarefas cadastradas
        </Title>

        <Text>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </div>
    </Container>
  )
}