import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;

  & * {
    transition-duration: 0.2s;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  :hover {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;
