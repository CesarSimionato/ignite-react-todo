import styled from "styled-components"

import { CheckCircle, Circle, Trash } from "phosphor-react"

type TaskCardProps = {
  isChecked?: boolean
}

export const Container = styled.article`
  background: ${({ theme }) => theme.COLORS.GRAY_500};

  border-radius: ${({ theme }) => theme.BORDER_RADIUS.CARD};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const ClickArea = styled.button<TaskCardProps>`
  background: none;

  display: flex;
  gap: 1rem; 

  cursor: pointer;

  border: 1px solid transparent;
  border-right-width: 2px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.CARD};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: ${({ theme }) => theme.PADDING.CARD};

  :focus {
    border-color: ${({ theme, isChecked }) => isChecked ? theme.COLORS.SECONDARY_400 : theme.COLORS.PRIMARY_400};
  }
`

export const Text = styled.p<TaskCardProps>`
  margin-left: ${({ theme }) => theme.PADDING.CARD};
  margin-right: ${({ theme }) => theme.PADDING.CARD};
  margin-bottom: ${({ theme }) => theme.PADDING.CARD};
  text-align: justify;
  color: ${({ theme, isChecked }) => isChecked ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
  text-decoration: ${({ isChecked }) => isChecked ? "line-through" : "none"};
`

export const Checkbox = styled(CheckCircle).attrs({
  weight: "fill",
})`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.COLORS.SECONDARY_400};

  transition: color 0.2s;
  
  :hover {
    color: ${({ theme }) => theme.COLORS.SECONDARY_500};
  }
`

export const Circlebox = styled(Circle).attrs({
  weight: "bold",
})`
  font-size: 2rem;
  color: ${({ theme }) => theme.COLORS.PRIMARY_400};

  transition: color 0.2s;
  
  :hover {
    color: ${({ theme }) => theme.COLORS.PRIMARY_500};
  }
`

export const CreatedAt = styled.p`
  color: ${({ theme }) => theme.COLORS.WHITE};
  align-self: center;
`

export const TrashIconContainer = styled.button`
  background: none;

  display: flex;
  gap: 1rem; 

  cursor: pointer;

  border: 1px solid transparent;
  border-left-width: 2px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.CARD};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: ${({ theme }) => theme.PADDING.CARD};

  :focus {
    border-color: ${({ theme }) => theme.COLORS.DANGER};
  }
`

export const TrashIcon = styled(Trash).attrs({
  weight: "bold",
})`
  font-size: 2rem;
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  transition: color 0.2s;
  
  :hover {
    color: ${({ theme }) => theme.COLORS.DANGER};
  }
`