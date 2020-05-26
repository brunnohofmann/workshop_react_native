import React from 'react';
import styled from 'styled-components';
import {SafeAreaView} from 'react-native-safe-area-context';

const CustomSafeAreaView = styled(SafeAreaView)`
  background: ${({theme}) => theme.palette.background.default};
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
`;

export default ({children}) => {
  return <CustomSafeAreaView>{children}</CustomSafeAreaView>;
};
