import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomTextInput } from "../../../components/CustomTextInput";
import { CreditType } from "../../../models/Credit";

interface CreditCardPaymentProps {
  cardInfo: CreditType;
  onChange: (newCardInfo: CreditType) => void;
}

export const CreditCardPayment = (props: CreditCardPaymentProps) => {
  const { cardInfo, onChange } = props;

  return (
    <View style={styles.container}>
      <CustomTextInput
        label="Número do Cartão"
        value={cardInfo.cardNumber}
        onChangeText={(text) => onChange({ ...cardInfo, cardNumber: text })}
        placeholder="Digite o número do cartão"
      />
      <View style={styles.row}>
        <View style={styles.halfWidth}>
          <CustomTextInput
            label="Validade"
            value={cardInfo.expiryDate}
            onChangeText={(text) => onChange({ ...cardInfo, expiryDate: text })}
            placeholder="MM/AA"
          />
        </View>
        <View style={styles.halfWidth}>
          <CustomTextInput
            label="CVC"
            value={cardInfo.cvv}
            onChangeText={(text) => onChange({ ...cardInfo, cvv: text })}
            placeholder="Digite o CVC"
          />
        </View>
      </View>
      <CustomTextInput
        label="Nome do Titular"
        value={cardInfo.name}
        onChangeText={(text) => onChange({ ...cardInfo, name: text })}
        placeholder="Digite o nome do titular"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  row: {
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fullWidth: {
    width: '100%',
  },
  halfWidth: {
    width: '48%',
  },
});
