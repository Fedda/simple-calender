import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.div`
  color: #ffffff;
  font-size: ${(props) => props.fontSize};
  font-weight: 400;
  margin: 5px;
  text-transform: capitalize;
  transition: font-size 0.2s ease;
  @media (max-width: 700px) {
    font-size: 36px;
  }
`;

Title.propTypes = {
  fontSize: PropTypes.string.isRequired
};

Title.defaultProps = {
  fontSize: '60px'
};

export default Title;
