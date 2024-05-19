import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import { CreditCardPayment } from "./components/CreditCardPayment";
import { CurrentBalance } from "./components/CurrentBalance";
import { PriceSelection } from "./components/PriceSection";
import { PaymentMethodSelection } from "./components/PaymentMethodSelection";
import { PixPayment } from "./components/PixPayment";
import { PurchaseButton } from "./components/PurchaseButton";
import { useLocationContext } from "../../context/Location";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackList } from "../../@types";
import { toastMessage } from "../../utils/toastMessage";

export interface CreditType {
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export const CreditCardPage: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackList, "Mapa">>();

  const { totalValue, setTotalValue } = useLocationContext();
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [cardInfo, setCardInfo] = useState<CreditType>({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [pixNumber, setPixNumber] = useState<string>("");
  const [randomQRCode, setRandomQRCode] = useState<string>("");

  const priceOptions = [10, 20, 30, 50, 100];

  const handlePriceSelect = (price: number) => {
    setSelectedPrice(price === selectedPrice ? null : price);
  };

  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method);
    if (method === "Pix") {
      const randomPixNumber = Math.floor(
        Math.random() * 1000000000000
      ).toString();
      setPixNumber(randomPixNumber);
      setRandomQRCode(`https://example.com/qrcode/${randomPixNumber}`);
    }
  };

  const handlePurchase = () => {
    if (selectedPrice !== null) {
      setTotalValue((prevTotal) => prevTotal + selectedPrice);
    }

    setTimeout(() => {
      toastMessage({ title: "Crédito adicionado na carteira com sucesso", type: "success" })
      navigation.navigate("Mapa");
    }, 1000);
  };

  const handleCardInfoChange = (newCardInfo: CreditType) => {
    setCardInfo(newCardInfo);
  };

  const handleCopyPixNumber = async () => {
    await Clipboard.setStringAsync(pixNumber);
    setCopiedToClipboard(true);
    toastMessage({ title: "Pix copiado para a área de transferência", type: "success" })
  };

  return (
    <View style={{ padding: 16, gap: 8 }}>
      <CurrentBalance balance={totalValue} />
      <PriceSelection
        options={priceOptions}
        selectedPrice={selectedPrice}
        onSelect={handlePriceSelect}
      />
      {selectedPrice && (
        <PaymentMethodSelection
          methods={["Pix", "Cartão de crédito"]}
          selectedMethod={paymentMethod}
          onSelect={handlePaymentMethodSelect}
        />
      )}
      {paymentMethod === "Pix" && (
        <PixPayment
          pixNumber={pixNumber}
          qrCodeUrl={randomQRCode}
          copyPixNumber={handleCopyPixNumber}
        />
      )}
      {paymentMethod === "Cartão de crédito" && (
        <CreditCardPayment
          cardInfo={cardInfo}
          onChange={handleCardInfoChange}
        />
      )}
      {paymentMethod && <PurchaseButton onPress={handlePurchase} />}
    </View>
  );
};
