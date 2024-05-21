import React from "react";
import { Text, View } from "react-native";

interface CurrentBalanceProps {
  balance: number;
}

export const CurrentBalance = (props: CurrentBalanceProps) => {
  const { balance } = props;

  return (
    <View>
      <Text style={{ fontWeight: "500" }}>Saldo atual</Text>
      <Text style={{ fontWeight: "700", fontSize: 18 }}>
        {`$ ${balance.toLocaleString("pt-BR", { style: "decimal" })}`}
      </Text>
    </View>
  );
};
