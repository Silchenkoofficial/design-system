import styled from 'styled-components/macro';

export const Wrapper = styled.div<{ multi: boolean }>`
  padding-block: ${({ multi }) => (multi ? '2px' : '0')};
  padding-inline: ${({ multi }) => (multi ? '8px' : '0')};
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.gray[800]};
  width: fit-content;
  max-width: 90%;
  background-color: ${({ multi, theme }) =>
    multi ? theme.colors.gray[100] : 'transparent'};
  border-radius: ${({ multi }) => (multi ? '6px' : 'none')};

  & p {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
