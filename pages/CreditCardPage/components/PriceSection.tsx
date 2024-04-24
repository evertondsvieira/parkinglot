import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

interface PriceSelectionProps {
  options: number[],
  selectedPrice: number | null,
  onSelect: (price: number) => void,
}

export const PriceSelection = (props: PriceSelectionProps) => {
  const { onSelect, options, selectedPrice } = props

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontWeight: "500" }}>Quantos créditos comprar?</Text>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {options.map((price) => (
          <TouchableOpacity key={price} onPress={() => onSelect(price)}>
            <View
              style={{
                padding: 12,
                borderWidth: selectedPrice === price ? 2 : 0.5,
                borderColor: selectedPrice === price ? "#007bff" : "transparent",
                width: 60,
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Text>{price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
