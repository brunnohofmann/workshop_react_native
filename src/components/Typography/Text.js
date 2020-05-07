import styled from 'styled-components';
import {Text} from 'react-native';

export default styled(Text)`
  color: ${(props) => props.theme.textColor};
`;
