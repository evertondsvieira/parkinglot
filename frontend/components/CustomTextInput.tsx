import React from "react";
import { View, Text, TextInput, KeyboardType, StyleProp, TextStyle, ViewStyle } from "react-native";

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  isPassword?: boolean
  keyboardType?: KeyboardType;
  style?: StyleProp<TextStyle | ViewStyle>
}

export const CustomTextInput = (props: InputProps) => {
  const { label, value, onChangeText, keyboardType, placeholder, isPassword, style } = props;

  return (
    <View style={{ width: "100%", gap: 4 }}>
      <Text style={{ fontWeight: "500" }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={isPassword}
        style={[style,{borderWidth: 1, borderColor: "#C0C0C0", borderRadius: 8, padding: 8}]}
      />
    </View>
  );
};
