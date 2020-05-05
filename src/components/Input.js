import React, {useContext} from 'react';
import {TextInput} from 'react-native';
import styled, {ThemeContext} from 'styled-components';
import {ThemeProviderContext} from '../ThemeProviders';

const CustomTextInput = styled(TextInput)`
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.input.borderColor};
  color: ${(props) => props.theme.textColor};
  padding-bottom: 8px;
  position: relative;
`;

export default ({value, onChangeText, placeholder, ...props}) => {
  const themeContext = useContext(ThemeContext);
  const {theme} = useContext(ThemeProviderContext);

  return (
    <CustomTextInput
      keyboardAppearance={theme}
      value={value}
      enablesReturnKeyAutomatically
      placeholderTextColor={themeContext.textColor}
      placeholder={placeholder}
      onChangeText={onChangeText}
      {...props}
    />
  );
};
