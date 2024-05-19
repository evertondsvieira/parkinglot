import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";
import AntDesign from '@expo/vector-icons/AntDesign';

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
      <TouchableOpacity onPress={copyPixNumber} style={{ flexDirection: "row", gap: 4, alignItems: "center", justifyContent: "center", marginBottom: 4 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {pixNumber}
        </Text>
        <AntDesign name="copy1" size={18} color="#007bff" />
      </TouchableOpacity>
      <QRCode value={qrCodeUrl} size={200} />
    </View>
  );
};

