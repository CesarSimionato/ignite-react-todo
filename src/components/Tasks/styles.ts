import styled from "styled-components"

type TextProps = {
  type: "primary" | "secondary"
}

export const Container = styled.div`
  margin-top: 1.5rem;
`

export const Header = styled.header`
  margin-bottom: 1.5rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const Text = styled.h2<TextProps>`
  font-size: ${({ theme }) => theme.SIZES.MD};
  color: ${({ type, theme }) => type === "primary" ? theme.COLORS.PRIMARY_400 : theme.COLORS.SECONDARY_400};
`

export const Badge = styled.span`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  border-radius: ${({ theme }) => theme.BORDER_RADIUS.BADGE};

  padding: 4px 10px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.SIZES.SM};
`
