import styled from "styled-components"

export const Container = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr;

  background: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const Header = styled.header`
  height: 12.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Main = styled.main`
  margin: 0px auto; 

  padding-left: ${({ theme }) => theme.PADDING.LAYOUT};
  padding-right: ${({ theme }) => theme.PADDING.LAYOUT};

  width: 100%;
  max-width: calc(736px); 
  max-width: ${({ theme }) => `calc(736px + (2 * ${theme.PADDING.LAYOUT}))`}; 
  height: 100%;
`