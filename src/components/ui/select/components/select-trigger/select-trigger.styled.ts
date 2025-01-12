import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-height: 140px;
  background-color: transparent;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary[600]};
  border-radius: 8px;
  box-shadow: none;
  transition-duration: 0.2s;
  overflow-y: auto;
  overscroll-behavior: none;
  cursor: pointer;
`;

export const PillsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-height: 20px;
  height: fit-content;
  overflow: hidden;
`;
