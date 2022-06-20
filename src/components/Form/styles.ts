import styled from "styled-components"

export const Container = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;

  transform: translateY(-50%);
`

export const Input = styled.input`
  width: 100%;

  border: none;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.INPUT};
  
  padding: ${({ theme }) => theme.PADDING.INPUT};

  color: ${({ theme }) => theme.COLORS.WHITE};

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};  
  
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_500};

  ::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};  
  }

  :focus {
    border-color: ${({ theme }) => theme.COLORS.SECONDARY_500};
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.BUTTON};

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
  
  padding: ${({ theme }) => theme.PADDING.BUTTON};

  color: ${({ theme }) => theme.COLORS.WHITE};
  
  cursor: pointer;
  transition: background-color border-color 0.3s;

  font-weight: bold;

  border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY_500};

  :hover {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_400};
    border-color: ${({ theme }) => theme.COLORS.PRIMARY_400};
  }

  :focus {
    border-color: ${({ theme }) => theme.COLORS.PRIMARY_400};
  }
`