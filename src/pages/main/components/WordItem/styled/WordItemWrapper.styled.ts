import styled from 'styled-components';

export const WordItemWrapper = styled.div`
  transition: 0.3s ease;
  padding: 10px;
  display: flex;
  justify-content: normal;
  align-items: center;
  background-color: rgb(229, 229, 229);
  border: 1px solid #e5e5e5;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: none;
    background-color: #f0f0f0;
  }
`;
