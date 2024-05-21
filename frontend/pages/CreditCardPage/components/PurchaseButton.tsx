import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styled } from "../../../style";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackList } from "../../../@types";

interface PurchaseButtonProps {
  onPress: () => void;
  selectedMethod: string | null;
}

export const PurchaseButton = (props: PurchaseButtonProps) => {
  const { onPress, selectedMethod } = props;

  const { button, text } = styled;

  const navigation = useNavigation<NavigationProp<RootStackList, "Mapa">>();

  const toggleLocation = () => {
    navigation.navigate("Mapa");
  };

  return selectedMethod === "Pix" ? (
    <View style={{ flexDirection: "row", justifyContent: "center", gap: 8 }}>
      <TouchableOpacity
        style={{
          backgroundColor: button.success,
          padding: 12,
          borderRadius: 8,
          alignItems: "center",
          width: "48%"
        }}
        onPress={onPress}
      >
        <Text style={{ color: "#fff" }}>Já paguei</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: text.disabled,
          padding: 12,
          borderRadius: 8,
          alignItems: "center",
          width: "48%"
        }}
        onPress={toggleLocation}
      >
        <Text style={{ color: "#fff" }}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity
      style={{
        backgroundColor: button.success,
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ color: "#fff" }}>Confirmar compra</Text>
    </TouchableOpacity>
  );
};
