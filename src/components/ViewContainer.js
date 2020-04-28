import React from 'react';
import styled from 'styled-components';
import {SafeAreaView} from 'react-native';

const CustomSafeAreaView = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.background};
  flex: 1;
`;

export default ({children}) => {
  return <CustomSafeAreaView>{children}</CustomSafeAreaView>;
};
