import styled from 'styled-components';

import newslyLogo from '../../assets/images/newsly-logo.svg';

const Logo = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-image: url(${newslyLogo});
  height: 150px;
  width: 150px;
  margin: 5px;
  transition: all 0.2s ease;
  @media (max-width: 700px) {
    height: 100px;
    width: 100px;
  }
`;

export default Logo;
