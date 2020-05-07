import React from 'react';
import styled from 'styled-components';
import {SafeAreaView} from 'react-native-safe-area-context';

const CustomSafeAreaView = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.background};
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
`;

export default ({children}) => {
  return <CustomSafeAreaView>{children}</CustomSafeAreaView>;
};
