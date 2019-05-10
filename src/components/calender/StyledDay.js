import styled from 'styled-components';

const StyledDay = styled.div`
  background-color: #f1f1f1;
  margin: 10px;
  padding: 2px;  
  width: 100px;
  height: 100px;

  &.active {
    background-color: #4caf50;
  }

  .context {
    font-size:1rem;
  }

  button {
    float: right;
  }
`;

export default StyledDay;
