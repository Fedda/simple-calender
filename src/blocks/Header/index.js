import styled from 'styled-components';
import PropTypes from 'prop-types';

import Content from './Content';
import Logo from './Logo';
import Subtitle from './Subtitle';
import Title from './Title';
import Icon from './Icon';

const Header = styled.div`
  display: flex;
  justify-content: center;
  ${'' /* align-items: flex-end; */}
  background-color: #607d8b;
  min-height: ${props => props.minHeight};
`;


Header.Content = Content;
Header.Logo = Logo;
Header.Subtitle = Subtitle;
Header.Title = Title;
Header.Icon = Icon;


Header.propTypes = {
  minHeight: PropTypes.string.isRequired,
};

Header.defaultProps = {
  minHeight: '300px',
};

export default Header;
