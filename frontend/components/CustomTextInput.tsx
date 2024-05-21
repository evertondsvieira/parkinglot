import React from "react";
import { View, Text, TextInput, KeyboardType } from "react-native";

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardType;
}

export const CustomTextInput = (props: InputProps) => {
  const { label, value, onChangeText, keyboardType, placeholder } = props;

  return (
    <View style={{ width: "100%" }}>
      <Text style={{ fontWeight: "500" }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={{ borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 8 }}
      />
    </View>
  );
};
