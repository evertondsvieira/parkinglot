import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

interface PaymentMethodSelectionProps {
  methods: string[]
  selectedMethod: string | null
  onSelect: (method: string) => void
}

export const PaymentMethodSelection = (props: PaymentMethodSelectionProps) => {
  const { methods, selectedMethod, onSelect } = props

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontWeight: "500" }}>Qual a forma de pagamento?</Text>
      {methods.map((method) => (
        <TouchableOpacity key={method} onPress={() => onSelect(method)}>
          <Text
            style={{
              backgroundColor: selectedMethod === method ? "#007bff" : "#ababab",
              color: "#fff",
              padding: 8,
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            { method }
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
