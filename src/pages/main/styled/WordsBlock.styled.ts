import styled from 'styled-components';

export const WordsBlock = styled.div`
  padding-top: 30px;
  display: grid;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
  column-gap: 15px;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
`;
