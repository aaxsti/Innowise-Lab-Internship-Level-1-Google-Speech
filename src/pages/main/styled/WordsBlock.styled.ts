import styled from 'styled-components';

const WordsBlock = styled.div`
  padding-top: 20px;
  display: grid;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
  column-gap: 15px;
  grid-template-columns: repeat(5, minmax(230px, 1fr));
`;

export default WordsBlock;
