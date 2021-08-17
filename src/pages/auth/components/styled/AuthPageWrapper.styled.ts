import styled from 'styled-components';

enum AuthPageWrapperColors {
  background = 'rgba(255, 255, 255, 0.9)'
}

const AuthPageWrapper = styled.div`
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${AuthPageWrapperColors.background};
  text-align: center;
  padding: 45px 55px;
`;

export default AuthPageWrapper;
