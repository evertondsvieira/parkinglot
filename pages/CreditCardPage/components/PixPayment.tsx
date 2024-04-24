import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";

interface PixPaymentProps {
  pixNumber: string
  qrCodeUrl: string
  copyPixNumber: () => void
}

export const PixPayment = (props: PixPaymentProps) => {
  const { pixNumber, qrCodeUrl, copyPixNumber } = props

  return (
    <View style={{ alignItems: "center", marginTop: 8 }}>
      <Text style={{ fontWeight: "500" }}>Número PIX:</Text>
      <TouchableOpacity onPress={copyPixNumber}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 8 }}>
          {pixNumber}
        </Text>
      </TouchableOpacity>
      <QRCode value={qrCodeUrl} size={200} />
    </View>
  );
};

