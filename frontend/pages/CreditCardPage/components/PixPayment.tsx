import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styled } from "../../../style";

interface PixPaymentProps {
  pixNumber: string;
  qrCodeUrl: string;
  copyPixNumber: () => void;
}

export const PixPayment = (props: PixPaymentProps) => {
  const { pixNumber, qrCodeUrl, copyPixNumber } = props;

  const { text } = styled;

  return (
    <View style={{ alignItems: "flex-start", marginTop: 8, gap: 8 }}>
      <View style={{ gap: 4 }}>
        <Text style={{ fontWeight: "500", textAlign: "left" }}>
          Código Pix - Copia e Cola:
        </Text>
        <TouchableOpacity
          onPress={copyPixNumber}
          style={{
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 8,
            backgroundColor: text.disabled,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {pixNumber}
          </Text>
          <MaterialIcons name="content-copy" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={{ fontWeight: "500" }}>QR Code - Escaneie o código</Text>
      <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
        <QRCode value={qrCodeUrl} size={200} />
      </View>
    </View>
  );
};
