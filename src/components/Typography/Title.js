import styled from 'styled-components';
import {Text} from 'react-native';

export default styled(Text)`
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
`;
