import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CustomButtonProps {
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  text: string;
  iconName: string;
}

const CustomButton = (props: CustomButtonProps) => {
  const { onPress, backgroundColor, textColor, text, iconName } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "50%",
        backgroundColor: backgroundColor,
        padding: 8,
        borderRadius: 4,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Text style={{ color: textColor }}>{text}</Text>
        <MaterialIcons name={iconName as any} size={24} color={textColor} />
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
