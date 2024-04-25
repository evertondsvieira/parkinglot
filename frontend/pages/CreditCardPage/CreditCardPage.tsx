import React, { useState } from "react";
import { View } from "react-native";
import { CreditCardPayment } from "./components/CreditCardPayment";
import { CurrentBalance } from "./components/CurrentBalance";
import { PriceSelection } from "./components/PriceSection";
import { PaymentMethodSelection } from "./components/PaymentMethodSelection";
import { PixPayment } from "./components/PixPayment";
import { PurchaseButton } from "./components/PurchaseButton";

export interface CreditType {
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export const CreditCardPage = () => {
  const [value, setValue] = useState<number>(0);
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
    //
  };

  const handleCardInfoChange = (newCardInfo: CreditType) => {
    setCardInfo(newCardInfo);
  };

  const handleCopyPixNumber = () => {
    //
  };

  return (
    <View style={{ padding: 16, gap: 8 }}>
      <CurrentBalance balance={value} />
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
