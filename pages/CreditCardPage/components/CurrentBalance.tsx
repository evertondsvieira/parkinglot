import React from "react";
import { Text } from "react-native";

interface CurrentBalanceProps {
  balance: number
}

export const CurrentBalance = (props: CurrentBalanceProps) => {
  const { balance } = props

  return (
    <Text style={{ fontWeight: "500" }}>
      Saldo atual:{" "}
      <Text style={{ fontWeight: "400" }}>
        {balance.toLocaleString("pt-BR", { style: "decimal" })}
      </Text>
    </Text>
  );
};
