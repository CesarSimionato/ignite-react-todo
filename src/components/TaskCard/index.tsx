import { Container, Text, ClickArea, Checkbox, Circlebox, TrashIcon, TrashIconContainer, Header, CreatedAt } from "./styles"

type TaskCardProps = {
  isChecked?: boolean
}

export const TaskCard: React.FC<TaskCardProps> = ({ isChecked }) => {
  return (
    <Container>

      <Header>
        <ClickArea isChecked={isChecked}>
          {
            isChecked ? <Checkbox /> : <Circlebox />
          }
        </ClickArea>

        <CreatedAt>
          Domingo, 19 de junho de 2022 ás 22:00
        </CreatedAt>

        <TrashIconContainer>
          <TrashIcon />
        </TrashIconContainer>
      </Header>

      <Text isChecked={isChecked}>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </Text>
    </Container>
  )
}  