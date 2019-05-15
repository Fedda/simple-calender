import styled from 'styled-components';

export const StyledInputDate = styled.div`
  /* display: inline-block; */
  position: relative;
  min-width: 150px;
  margin-bottom: 15px;

  .form__field {
    /* display: block; */
    outline: 0;
    border: 0;
    border-bottom: 1px solid #d2d2d2;
  }
  .form__field:hover {
    border-bottom: 1px solid black;
  }
  .form__label {
    position: absolute;
    top: -14px;
    left: 0;
    font-size: 10px;
    color: #9b9b9b;
  }
`;

export const StyledInput = styled.div`
  position: relative;
  min-width: 200px;
  margin-bottom: 15px;
  .form__field {
    border: 0;
    border-bottom: 1px solid #d2d2d2;
    background: transparent;

    font-size: 16px;
    outline: 0;
  }

  .form__field:hover {
    border-bottom: 1px solid black;
  }
  .form__field::placeholder {
    color: transparent;
  }
  .form__field:placeholder-shown ~ .form__label {
    top: 0px;
    font-size: 16px;
  }

  label.form__label {
    position: absolute;
    top: -14px;
    left: 0;
    /* display: block; */
    transition: 0.2s;
    color: #9b9b9b;
    font-size: 1rem;
  }
  .form__field:focus {
  }
`;
