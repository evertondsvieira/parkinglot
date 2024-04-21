import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { CustomTextInput } from "./components/CustomTextInput";
import { styled } from "../../style";
import CustomButton from "./components/CustomButton";

interface InputField {
  label: string;
  value: string;
  onChange: (text: string) => void;
}

export const RegisterPage: React.FC = () => {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState<string | null>(null);
  const [street, setStreet] = React.useState("");
  const [price, setPrice] = React.useState("");

  const { brand, text, button } = styled;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri as string);
    }
  };

  const formattedInputs: InputField[] = [
    { label: "Insira o nome", value: name, onChange: setName },
    { label: "Insira o seu endereço", value: street, onChange: setStreet },
    { label: "Insira o valor por hora", value: price, onChange: setPrice },
  ];

  const MappingInputs: React.FC<{ formattedInputs: InputField[] }> = ({
    formattedInputs,
  }) => {
    return (
      <>
        {formattedInputs.map((item) => (
          <CustomTextInput
            key={item.label}
            label={item.label}
            value={item.value}
            onChangeText={item.onChange}
          />
        ))}
      </>
    );
  };

  return (
    <View style={{ gap: 8, padding: 12 }}>
      <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "500" }}>
        Cadastre o seu estacionamento
      </Text>

      <MappingInputs formattedInputs={formattedInputs} />

      <Text style={{ fontWeight: "500" }}>Insira uma foto</Text>
      <View
        style={{ width: "100%", flexDirection: "row", gap: 8, paddingRight: 8 }}
      >
        <CustomButton
          onPress={pickImage}
          backgroundColor="button.info"
          textColor="text.main"
          text="Tire uma foto"
          iconName="camera"
        />
        <CustomButton
          onPress={pickImage}
          backgroundColor="brand.secondary"
          textColor="text.main"
          text="Armazenamento"
          iconName="wallpaper"
        />
      </View>
      <TouchableOpacity
        onPress={console.log}
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: button.success,
          padding: 12,
          borderRadius: 4,
        }}
      >
        <Text style={{ color: text.main }}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};
