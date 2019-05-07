import styled from 'styled-components';
import PropTypes from 'prop-types';

const Content = styled.div`
  display: flex;
  flex: 1;
  max-width: 800px;
  padding: 5px;
  flex-direction: column;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
`;

Content.propTypes = {
  alignItems: PropTypes.string.isRequired,
  justifyContent: PropTypes.string.isRequired,
};

Content.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
};

export default Content;
