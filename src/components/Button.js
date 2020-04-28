import React from 'react';
import styled from 'styled-components';
import {
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

const Touchable =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const CustomButtonView = styled(View)`
  background-color: ${({theme}) => theme.buttons.primaryBackground}
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CustomButtonText = styled(Text)`
  color: ${(props) => props.theme.buttons.primaryTextColor};
  font-size: 15px;
  font-style: normal;
  font-weight: bold;
`;

export default ({onPress, text}) => {
  return (
    <Touchable onPress={onPress}>
      <CustomButtonView>
        <CustomButtonText>{text}</CustomButtonText>
      </CustomButtonView>
    </Touchable>
  );
};
