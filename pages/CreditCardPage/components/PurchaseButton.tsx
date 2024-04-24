import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styled } from "../../../style";

interface PurchaseButtonProps {
  onPress: () => void
}

export const PurchaseButton = (props: PurchaseButtonProps) => {
  const { onPress } = props

  const { button } = styled
  
  return (
    <TouchableOpacity
      style={{
        backgroundColor: button.success,
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ color: "#fff" }}>Comprar</Text>
    </TouchableOpacity>
  );
};
