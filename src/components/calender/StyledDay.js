import styled from 'styled-components';

const StyledDay = styled.div`
  background-color: #f1f1f1;
  margin: 10px;
  padding: 2px;
  width: 100px;
  height: 100px;

  .day-number {
    margin-bottom: 15px;
  }
  .active {
    margin-top: 5px;
    padding-left: 5px;
    background: #4caf50;
  }

  .context {
    font-size: 1rem;
  }

  button {
    float: right;
    margin-bottom: 5px;
  }
`;

export default StyledDay;
