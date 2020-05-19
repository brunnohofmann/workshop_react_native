import React from 'react';
import styled from 'styled-components';
import {View, Dimensions} from 'react-native';

export default styled(View)`
  background-color: ${(props) => props.theme.primaryColor};
  height: ${Dimensions.get('window').height}px;
`;
