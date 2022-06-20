import { NoTasks } from "../NoTasks"
import { TaskCard } from "../TaskCard"
import { Badge, Container, Header, TasksContainer, Text } from "./styles"

export const Tasks: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <Text type="primary">Tarefas criadas</Text>
          <Badge>0</Badge>
        </div>

        <div>
          <Text type="secondary">Concluídas</Text>
          <Badge>0</Badge>
        </div>
      </Header>

      {/* <NoTasks /> */}

      <TasksContainer>
        <TaskCard />
        <TaskCard isChecked />
        <TaskCard />
        <TaskCard />
        <TaskCard isChecked />
        <TaskCard />
        <TaskCard />
        <TaskCard isChecked />
        <TaskCard />
        <TaskCard />
        <TaskCard isChecked />
        <TaskCard />
      </TasksContainer>
    </Container>
  )
}