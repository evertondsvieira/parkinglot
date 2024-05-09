import { View, Text } from "react-native";
import { styled } from "../../../style";

export const AlertCopyPix = () => {
  const { brand, text } = styled
  return (
    <View
      style={{
        backgroundColor: text.disabled,
        padding: 10,
        borderRadius: 8,
        marginTop: 160,
      }}
    >
      <Text style={{ color: text.main, textAlign: "center" }}>
        PIX copiado para a área de transferência!
      </Text>
    </View>
  );
};
