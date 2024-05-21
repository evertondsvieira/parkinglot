import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface PaymentMethodSelectionProps {
  methods: string[];
  selectedMethod: string | null;
  onSelect: (method: string) => void;
}

export const PaymentMethodSelection = (props: PaymentMethodSelectionProps) => {
  const { methods, selectedMethod, onSelect } = props;

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontWeight: "500" }}>Qual a forma de pagamento?</Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          gap: 8,
          justifyContent: "space-between",
        }}
      >
        {methods.map((method) => (
          <TouchableOpacity
            style={{
              backgroundColor:
                selectedMethod === method ? "#007bff" : "transparent",
              alignItems: "flex-start",
              padding: 8,
              gap: 4,
              borderRadius: 8,
              width: "50%",
            }}
            key={method}
            onPress={() => onSelect(method)}
          >
            {method === "Pix" ? (
              <MaterialIcons
                name="pix"
                size={20}
                color={selectedMethod === method ? "#fff" : "#000"}
              />
            ) : (
              <MaterialIcons
                name="credit-card"
                size={20}
                color={selectedMethod === method ? "#fff" : "#000"}
              />
            )}
            <Text
              style={{
                color: selectedMethod === method ? "#fff" : "#000",
              }}
            >
              {method}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
