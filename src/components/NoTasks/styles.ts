import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  padding: 2rem;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius:${({ theme }) => theme.BORDER_RADIUS.CARD};
`

export const Title = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.SIZES.MD};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Text = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.SIZES.MD};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`