import styled from 'styled-components';

enum WordOutputColors {
  row = '#8e8e8e'
}

const WordOutput = styled.h2`
  font-weight: lighter;
  margin: 0;
  padding: 0;
  border-bottom: 2px ${WordOutputColors.row} solid;
  min-height: 40px;
  min-width: 270px;
  text-align: center;
`;

export default WordOutput;
