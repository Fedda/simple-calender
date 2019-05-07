import styled from 'styled-components';

const StyledCalender = styled.div`
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .day-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
  }
  .monthname {
    font-size: 20px;
    margin: 10px;
  }
`;

export default StyledCalender;
