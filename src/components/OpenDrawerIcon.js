import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const ImageIcon = styled(Image)`
  tint-color: #fff;
  width: 24px;
  margin-left: 16px;
`;

export default () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <ImageIcon
        source={require('../assets/icons/bars.png')}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};
