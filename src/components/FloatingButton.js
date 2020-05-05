import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components';

const FloatingButton = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({theme}) => theme.buttons.primaryBackground};
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 20px;
`;

const ImageIcon = styled(Image)`
  flex: 1;
  height: undefined;
  width: undefined;
  tint-color: ${(props) => props.theme.buttons.primaryTextColor};
`;

export default ({onPress}) => (
  <FloatingButton onPress={onPress}>
    <ImageIcon
      source={require('../assets/icons/plus_icon.png')}
      resizeMode="contain"
    />
  </FloatingButton>
);
