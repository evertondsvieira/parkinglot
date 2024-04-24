import React from "react";
import { View } from "react-native";
import { CustomTextInput } from "../../../components/CustomTextInput";

interface CardInfo {
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface CreditCardPaymentProps {
  cardInfo: CardInfo;
  onChange: (newCardInfo: CardInfo) => void;
}

export const CreditCardPayment = (props: CreditCardPaymentProps) => {
  const { cardInfo, onChange } = props

  const fields = [
    { label: "Nome do Titular", value: cardInfo.name, onChange: (text: string) => onChange({ ...cardInfo, name: text }) },
    { label: "Número do Cartão", value: cardInfo.cardNumber, onChange: (text: string) => onChange({ ...cardInfo, cardNumber: text }) },
    { label: "Validade", value: cardInfo.expiryDate, onChange: (text: string) => onChange({ ...cardInfo, expiryDate: text }) },
    { label: "CVV", value: cardInfo.cvv, onChange: (text: string) => onChange({ ...cardInfo, cvv: text }) },
  ];

  return (
    <View style={{ gap: 8 }}>
      {fields.map((field, index) => (
        <CustomTextInput
          key={index}
          label={field.label}
          value={field.value}
          onChangeText={field.onChange}
          placeholder={field.label}
        />
      ))}
    </View>
  );
};
